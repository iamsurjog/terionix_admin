import { useState, useEffect, useMemo, useCallback, useRef } from 'react'
import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { isAuthenticated, logout } from '#/lib/auth'
import { apiFetch } from '#/lib/content'
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  flexRender,
  createColumnHelper,
  type SortingState,
} from '@tanstack/react-table'
import {
  RefreshCw,
  Search,
  XCircle,
  Clock,
  Loader2,
} from 'lucide-react'

export const Route = createFileRoute('/tenders')({
  component: TendersPage,
})

// ── Types ──────────────────────────────────────────────

interface Tender {
  serial_no?: string
  title?: string
  organization_chain?: string
  published_date?: string
  closing_date?: string
  opening_date?: string
}

interface ScrapeStatusResponse {
  status: 'idle' | 'running' | 'completed' | 'failed'
  error?: string
}

// ── Helpers ────────────────────────────────────────────

function formatDate(dateStr: string | undefined): string {
  if (!dateStr) return '-'
  const d = new Date(dateStr)
  if (isNaN(d.getTime())) return dateStr
  const months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
  ]
  const mon = months[d.getMonth()]
  const day = String(d.getDate()).padStart(2, '0')
  const year = d.getFullYear()
  return `${mon} ${day}, ${year}`
}

const MAX_POLL_ITERATIONS = 105 // ~35 minutes at 20s interval

// ── Page Component ─────────────────────────────────────

function TendersPage() {
  const navigate = useNavigate()

  // ── Auth ───────────────────────────────────────────
  useEffect(() => {
    if (!isAuthenticated()) navigate({ to: '/content/login' })
  }, [navigate])

  const handleLogout = async () => {
    await logout()
    navigate({ to: '/content/login' })
  }

  // ── State ──────────────────────────────────────────
  const [data, setData] = useState<Tender[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Keyword filter
  const [keyword, setKeyword] = useState('')
  const [debouncedKeyword, setDebouncedKeyword] = useState('')

  // Sorting
  const [sorting, setSorting] = useState<SortingState>([])

  // Scrape / polling
  const [scraping, setScraping] = useState(false)
  const [pollingError, setPollingError] = useState<string | null>(null)
  const [pollTimedOut, setPollTimedOut] = useState(false)
  const pollCountRef = useRef(0)
  const pollIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  // ── Debounced keyword ──────────────────────────────
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedKeyword(keyword)
    }, 300)
    return () => clearTimeout(timer)
  }, [keyword])

  // ── Data fetching ──────────────────────────────────

  const fetchTenders = useCallback(async (q: string) => {
    setLoading(true)
    setError(null)
    try {
      const params = q ? `?q=${encodeURIComponent(q)}` : ''
      const res = await apiFetch(`/tenders${params}`)
      if (!res.ok) throw new Error(`Failed to fetch tenders: ${res.status}`)
      const json = await res.json()
      setData(Array.isArray(json) ? json : json.results ?? [])
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Failed to load tenders')
      setData([])
    } finally {
      setLoading(false)
    }
  }, [])

  // Initial load + re-fetch on debounced keyword change
  useEffect(() => {
    fetchTenders(debouncedKeyword)
  }, [debouncedKeyword, fetchTenders])

  // ── Polling ────────────────────────────────────────

  const stopPolling = useCallback(() => {
    if (pollIntervalRef.current) {
      clearInterval(pollIntervalRef.current)
      pollIntervalRef.current = null
    }
    pollCountRef.current = 0
  }, [])

  const startPolling = useCallback(
    (jobId: string) => {
      setScraping(true)
      setPollingError(null)
      setPollTimedOut(false)
      pollCountRef.current = 0

      pollIntervalRef.current = setInterval(async () => {
        pollCountRef.current += 1

        // Timeout check
        if (pollCountRef.current > MAX_POLL_ITERATIONS) {
          stopPolling()
          setScraping(false)
          setPollTimedOut(true)
          return
        }

        try {
          const res = await apiFetch(
            `/tenders/scrape-status?job_id=${encodeURIComponent(jobId)}`,
          )
          if (!res.ok) throw new Error(`Polling failed: ${res.status}`)
          const json: ScrapeStatusResponse = await res.json()

          if (json.status === 'completed') {
            stopPolling()
            setScraping(false)
            fetchTenders(debouncedKeyword)
          } else if (json.status === 'failed') {
            stopPolling()
            setScraping(false)
            setPollingError(json.error || 'Scrape failed')
          }
          // 'running' or 'idle' → continue polling
        } catch (e) {
          stopPolling()
          setScraping(false)
          setPollingError(
            e instanceof Error ? e.message : 'Polling failed',
          )
        }
      }, 20000)
    },
    [stopPolling, fetchTenders, debouncedKeyword],
  )

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (pollIntervalRef.current) {
        clearInterval(pollIntervalRef.current)
      }
    }
  }, [])

  // ── Refresh handler ───────────────────────────────

  const handleRefresh = async () => {
    if (scraping) return
    try {
      const res = await apiFetch('/tenders/refresh', { method: 'POST' })
      if (!res.ok) throw new Error(`Failed to start refresh: ${res.status}`)
      const json = await res.json()
      if (json.job_id) {
        startPolling(json.job_id)
      } else {
        throw new Error('No job_id returned')
      }
    } catch (e) {
      setPollingError(
        e instanceof Error ? e.message : 'Failed to start refresh',
      )
    }
  }

  // ── Table setup ──────────────────────────────────

  const columnHelper = createColumnHelper<Tender>()

  const columns = useMemo(
    () => [
      columnHelper.accessor('serial_no', {
        header: 'S.No',
        enableSorting: true,
        cell: ({ getValue }) => getValue() || '-',
      }),
      columnHelper.accessor('title', {
        header: 'Title',
        enableSorting: true,
        cell: ({ getValue }) => getValue() || '-',
      }),
      columnHelper.accessor('organization_chain', {
        header: 'Organization',
        enableSorting: true,
        cell: ({ getValue }) => getValue() || '-',
      }),
      columnHelper.accessor('published_date', {
        header: 'Published',
        enableSorting: true,
        cell: ({ getValue }) => formatDate(getValue()),
      }),
      columnHelper.accessor('closing_date', {
        header: 'Closing',
        enableSorting: true,
        cell: ({ getValue }) => formatDate(getValue()),
      }),
      columnHelper.accessor('opening_date', {
        header: 'Opening',
        enableSorting: true,
        cell: ({ getValue }) => formatDate(getValue()),
      }),
    ],
    [],
  )

  const table = useReactTable({
    data,
    columns,
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    enableSorting: true,
    enableSortingRemoval: false,
  })

  // ── Render ─────────────────────────────────────────

  const activeError =
    pollingError ||
    (pollTimedOut ? 'Scrape timed out after 35 minutes.' : null) ||
    error

  return (
    <div className="font-sans text-text">
      {/* Fixed header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-xl border-b border-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <a href="/" className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium text-text/70 hover:text-primary hover:bg-primary/5 transition-all">
              ← Dashboard
            </a>
            <div className="w-px h-8 bg-primary/20" />
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent motion-preset-pulse" />
              <span className="text-xs font-semibold text-accent uppercase tracking-wider">Admin</span>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="px-4 py-2 font-sans text-sm font-medium rounded-full text-error hover:bg-error-soft transition-all"
          >
            Logout
          </button>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto pt-32 pb-24 px-4">
        <div className="flex items-center justify-between mb-8">
          <h1 className="font-title text-3xl font-bold">Tenders</h1>

          {/* Refresh All Tenders Button */}
          <button
            onClick={handleRefresh}
            disabled={scraping}
            className="px-4 py-2 bg-accent text-white text-sm font-semibold rounded-lg hover:brightness-110 transition-all duration-300 disabled:opacity-50 flex items-center gap-2"
          >
            <RefreshCw
              className={`w-4 h-4 ${scraping ? 'animate-spin' : ''}`}
            />
            {scraping ? 'Refreshing...' : 'Refresh All Tenders'}
          </button>
        </div>

        {/* Polling indicator */}
        {scraping && (
          <div className="mb-4 p-3 bg-accent/10 border border-accent/20 rounded-xl flex items-center gap-3">
            <Loader2 className="w-4 h-4 text-accent animate-spin" />
            <p className="text-sm text-accent font-medium">
              Refreshing tenders...
            </p>
          </div>
        )}

        {/* Error Banner */}
        {activeError && (
          <div className="mb-6 p-4 bg-error/10 border border-error/20 rounded-xl flex items-center gap-3">
            <XCircle className="w-5 h-5 text-error flex-shrink-0" />
            <p className="text-sm text-error">{activeError}</p>
            {error && !pollingError && !pollTimedOut && (
              <button
                onClick={() => fetchTenders(debouncedKeyword)}
                className="ml-auto px-3 py-1.5 bg-error text-white text-xs font-semibold rounded-lg hover:brightness-110 transition-all"
              >
                Retry
              </button>
            )}
          </div>
        )}

        {/* Keyword Filter */}
        <div className="bg-white/40 backdrop-blur-sm rounded-2xl border border-primary/10 p-5 mb-6">
          <div className="flex flex-wrap items-end gap-4">
            <div className="flex-1 min-w-[200px]">
              <label className="block text-xs font-semibold text-text/60 uppercase tracking-wider mb-1.5">
                <Search className="w-3.5 h-3.5 inline mr-1" />
                Keyword Filter
              </label>
              <input
                type="text"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder="Search tenders by keyword (comma-separated for OR)..."
                className="w-full px-3 py-2 rounded-lg border border-primary/20 bg-white/60 text-sm focus:outline-none focus:border-primary/50 transition-colors"
              />
            </div>
          </div>
        </div>

        {/* Results count */}
        <div className="mb-3 text-sm text-text/50">
          {loading
            ? 'Loading...'
            : `${data.length} tender${data.length !== 1 ? 's' : ''} found`}
        </div>

        {/* Table */}
        <div className="bg-white/40 backdrop-blur-sm rounded-2xl border border-primary/10 overflow-hidden mb-6">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                {table.getHeaderGroups().map((headerGroup) => (
                  <tr key={headerGroup.id} className="bg-primary/5">
                    {headerGroup.headers.map((header) => (
                      <th
                        key={header.id}
                        className={`px-4 py-3 text-xs font-semibold text-text/60 uppercase tracking-wider text-left ${
                          header.column.getCanSort()
                            ? 'cursor-pointer select-none hover:text-primary transition-colors'
                            : ''
                        }`}
                        onClick={header.column.getToggleSortingHandler()}
                      >
                        <span className="flex items-center gap-1">
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                          {header.column.getCanSort() && (
                            <span className="text-text/30">
                              {(
                                {
                                  asc: ' ▲',
                                  desc: ' ▼',
                                } as Record<string, string>
                              )[header.column.getIsSorted() as string] ?? ' ⇅'}
                            </span>
                          )}
                        </span>
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td
                      colSpan={columns.length}
                      className="px-4 py-12 text-center text-sm text-text/40"
                    >
                      <div className="flex items-center justify-center gap-2">
                        <Clock className="w-4 h-4 animate-spin" />
                        Loading tenders...
                      </div>
                    </td>
                  </tr>
                ) : data.length === 0 ? (
                  <tr>
                    <td
                      colSpan={columns.length}
                      className="px-4 py-12 text-center text-sm text-text/40"
                    >
                      No tenders found
                    </td>
                  </tr>
                ) : (
                  table.getRowModel().rows.map((row) => (
                    <tr
                      key={row.id}
                      className="border-t border-primary/5 hover:bg-primary/[0.02] transition-colors"
                    >
                      {row.getVisibleCells().map((cell) => (
                        <td
                          key={cell.id}
                          className="px-4 py-3 text-sm text-text/80"
                        >
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext(),
                          )}
                        </td>
                      ))}
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  )
}
