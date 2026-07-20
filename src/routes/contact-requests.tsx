import { useState, useEffect, useMemo, Fragment } from 'react'
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
  Download,
  FileJson,
  FileSpreadsheet,
  Mail,
  Settings,
  Filter,
  ChevronDown,
  ChevronRight,
  CheckCircle2,
  XCircle,
  Clock,
  Send,
  Save,
} from 'lucide-react'

export const Route = createFileRoute('/contact-requests')({
  component: ContactRequestsPage,
})

// ── Types ──────────────────────────────────────────────

interface ContactSubmission {
  id: number
  submission_type: string
  form_data: Record<string, unknown>
  created_at: string
}

interface EmailConfigResponse {
  to_email: string
}

// ── Helpers ────────────────────────────────────────────

function formatDateTime(dateStr: string): string {
  const d = new Date(dateStr)
  if (isNaN(d.getTime())) return dateStr
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  const mon = months[d.getMonth()]
  const day = String(d.getDate()).padStart(2, '0')
  const year = d.getFullYear()
  const hours = String(d.getHours()).padStart(2, '0')
  const mins = String(d.getMinutes()).padStart(2, '0')
  return `${mon} ${day}, ${year} ${hours}:${mins}`
}

function buildFilterParams(
  submissionType: string,
  dateFrom: string,
  dateTo: string,
): URLSearchParams {
  const params = new URLSearchParams()
  if (submissionType) params.set('submission_type', submissionType)
  if (dateFrom) params.set('date_from', dateFrom)
  if (dateTo) params.set('date_to', dateTo)
  return params
}

// ── Page Component ─────────────────────────────────────

function ContactRequestsPage() {
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
  const [data, setData] = useState<ContactSubmission[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Filters
  const [submissionTypeFilter, setSubmissionTypeFilter] = useState('')
  const [dateFrom, setDateFrom] = useState('')
  const [dateTo, setDateTo] = useState('')

  // Sorting
  const [sorting, setSorting] = useState<SortingState>([
    { id: 'created_at', desc: true },
  ])

  // Expanded row
  const [expandedRow, setExpandedRow] = useState<number | null>(null)

  // Email config
  const [emailAddress, setEmailAddress] = useState('')
  const [emailConfigLoading, setEmailConfigLoading] = useState(true)
  const [emailSaveMsg, setEmailSaveMsg] = useState<{
    type: 'success' | 'error'
    text: string
  } | null>(null)

  // Send email
  const [sendingEmail, setSendingEmail] = useState(false)
  const [sendEmailMsg, setSendEmailMsg] = useState<{
    type: 'success' | 'error'
    text: string
  } | null>(null)

  // ── Data fetching ──────────────────────────────────

  const fetchSubmissions = async (
    type: string,
    from: string,
    to: string,
  ) => {
    setLoading(true)
    setError(null)
    try {
      const params = buildFilterParams(type, from, to)
      const res = await apiFetch(`/submissions?${params.toString()}`)
      if (!res.ok) throw new Error(`Failed to fetch submissions: ${res.status}`)
      const json = await res.json()
      // Support both paginated { results: [...] } and plain arrays
      setData(Array.isArray(json) ? json : json.results ?? [])
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Failed to load submissions')
      setData([])
    } finally {
      setLoading(false)
    }
  }

  const fetchEmailConfig = async () => {
    try {
      const res = await apiFetch('/email-config')
      if (res.ok) {
        const json: EmailConfigResponse = await res.json()
        setEmailAddress(json.to_email || '')
      }
    } catch {
      // Config may not exist yet
    } finally {
      setEmailConfigLoading(false)
    }
  }

  // Initial load
  useEffect(() => {
    fetchSubmissions(submissionTypeFilter, dateFrom, dateTo)
    fetchEmailConfig()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Re-fetch when filters change (skip initial)
  const [initialised, setInitialised] = useState(false)
  useEffect(() => {
    if (!initialised) {
      setInitialised(true)
      return
    }
    fetchSubmissions(submissionTypeFilter, dateFrom, dateTo)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [submissionTypeFilter, dateFrom, dateTo])

  // ── Table setup ────────────────────────────────────

  const submissionTypes = useMemo(() => {
    const types = new Set(data.map((d) => d.submission_type))
    return Array.from(types).sort()
  }, [data])

  const columnHelper = createColumnHelper<ContactSubmission>()

  const columns = useMemo(
    () => [
      columnHelper.accessor('id', {
        header: 'ID',
        enableSorting: true,
      }),
      columnHelper.accessor('submission_type', {
        header: 'Submission Type',
        enableSorting: true,
      }),
      columnHelper.accessor('form_data', {
        header: 'Form Data',
        enableSorting: false,
        cell: ({ row }) => (
          <button
            onClick={() =>
              setExpandedRow(
                expandedRow === row.original.id ? null : row.original.id,
              )
            }
            className="flex items-center gap-1 text-primary hover:text-primary-deep transition-colors"
          >
            {expandedRow === row.original.id ? (
              <ChevronDown className="w-4 h-4" />
            ) : (
              <ChevronRight className="w-4 h-4" />
            )}
            <span className="text-xs">View Details</span>
          </button>
        ),
      }),
      columnHelper.accessor('created_at', {
        header: 'Created At',
        enableSorting: true,
        cell: ({ getValue }) => formatDateTime(getValue()),
      }),
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [expandedRow],
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

  // ── Export handlers ────────────────────────────────

  const buildExportUrl = (format: 'csv' | 'json') => {
    const params = buildFilterParams(submissionTypeFilter, dateFrom, dateTo)
    const qs = params.toString()
    return `/api/submissions/export/${format}${qs ? `?${qs}` : ''}`
  }

  const handleExportCSV = () => {
    window.open(buildExportUrl('csv'), '_blank')
  }

  const handleExportJSON = () => {
    window.open(buildExportUrl('json'), '_blank')
  }

  // ── Email config handlers ──────────────────────────

  const handleSaveEmailConfig = async () => {
    setEmailSaveMsg(null)
    try {
      const res = await apiFetch('/email-config', {
        method: 'POST',
        body: JSON.stringify({ to_email: emailAddress }),
      })
      if (!res.ok) throw new Error(`Failed to save: ${res.status}`)
      setEmailSaveMsg({ type: 'success', text: 'Email configuration saved successfully' })
    } catch (e) {
      setEmailSaveMsg({
        type: 'error',
        text: e instanceof Error ? e.message : 'Failed to save email config',
      })
    }
  }

  const handleSendToEmail = async () => {
    if (!emailAddress) {
      setSendEmailMsg({ type: 'error', text: 'Please configure an email address first' })
      return
    }
    setSendingEmail(true)
    setSendEmailMsg(null)
    try {
      const params = buildFilterParams(submissionTypeFilter, dateFrom, dateTo)
      const res = await apiFetch(
        `/submissions/send-email?${params.toString()}`,
        {
          method: 'POST',
          body: JSON.stringify({ to_email: emailAddress }),
        },
      )
      if (!res.ok) {
        const body = await res.json().catch(() => ({}))
        throw new Error(body.error || `Failed to send: ${res.status}`)
      }
      setSendEmailMsg({ type: 'success', text: 'Email sent successfully!' })
      // Track last send time
      localStorage.setItem('terionix_auto_send_last', new Date().toISOString())
    } catch (e) {
      setSendEmailMsg({
        type: 'error',
        text: e instanceof Error ? e.message : 'Failed to send email',
      })
    } finally {
      setSendingEmail(false)
    }
  }

  // ── Auto-send status ───────────────────────────────

  const [autoSendStatusText, setAutoSendStatusText] = useState(
    'Daily auto-send scheduled for 6:00 AM'
  )

  useEffect(() => {
    const lastAutoSend = localStorage.getItem('terionix_auto_send_last')
    if (lastAutoSend) {
      setAutoSendStatusText(
        `Last send: ${formatDateTime(lastAutoSend)} — Daily auto-send scheduled for 6:00 AM`
      )
    }
  }, [])

  // ── Render ─────────────────────────────────────────

  return (
    <div className="font-sans text-text">
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
        <h1 className="font-title text-3xl font-bold mb-8">Contact Requests</h1>

        {/* Error Banner */}
        {error && (
          <div className="mb-6 p-4 bg-error/10 border border-error/20 rounded-xl flex items-center gap-3">
            <XCircle className="w-5 h-5 text-error flex-shrink-0" />
            <p className="text-sm text-error">{error}</p>
            <button
              onClick={() =>
                fetchSubmissions(submissionTypeFilter, dateFrom, dateTo)
              }
              className="ml-auto px-3 py-1.5 bg-error text-white text-xs font-semibold rounded-lg hover:brightness-110 transition-all"
            >
              Retry
            </button>
          </div>
        )}

        {/* Filters + Export Bar */}
        <div className="bg-white/40 backdrop-blur-sm rounded-2xl border border-primary/10 p-5 mb-6">
          <div className="flex flex-wrap items-end gap-4">
            {/* Submission Type Filter */}
            <div className="flex-1 min-w-[180px]">
              <label className="block text-xs font-semibold text-text/60 uppercase tracking-wider mb-1.5">
                <Filter className="w-3.5 h-3.5 inline mr-1" />
                Submission Type
              </label>
              <select
                value={submissionTypeFilter}
                onChange={(e) => setSubmissionTypeFilter(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-primary/20 bg-white/60 text-sm focus:outline-none focus:border-primary/50 transition-colors"
              >
                <option value="">All Types</option>
                {submissionTypes.length === 0 && (
                  <option value="" disabled>
                    No types available
                  </option>
                )}
                {submissionTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            {/* Date From */}
            <div className="min-w-[160px]">
              <label className="block text-xs font-semibold text-text/60 uppercase tracking-wider mb-1.5">
                From Date
              </label>
              <input
                type="date"
                value={dateFrom}
                onChange={(e) => setDateFrom(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-primary/20 bg-white/60 text-sm focus:outline-none focus:border-primary/50 transition-colors"
              />
            </div>

            {/* Date To */}
            <div className="min-w-[160px]">
              <label className="block text-xs font-semibold text-text/60 uppercase tracking-wider mb-1.5">
                To Date
              </label>
              <input
                type="date"
                value={dateTo}
                onChange={(e) => setDateTo(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-primary/20 bg-white/60 text-sm focus:outline-none focus:border-primary/50 transition-colors"
              />
            </div>

            {/* Export Buttons */}
            <div className="flex items-center gap-2 ml-auto">
              <button
                onClick={handleExportCSV}
                className="px-4 py-2 bg-surface border border-primary/20 text-text text-sm font-semibold rounded-lg hover:bg-primary/5 transition-all duration-300 flex items-center gap-2"
              >
                <FileSpreadsheet className="w-4 h-4 text-primary" />
                Export CSV
              </button>
              <button
                onClick={handleExportJSON}
                className="px-4 py-2 bg-surface border border-primary/20 text-text text-sm font-semibold rounded-lg hover:bg-primary/5 transition-all duration-300 flex items-center gap-2"
              >
                <FileJson className="w-4 h-4 text-primary" />
                Export JSON
              </button>
            </div>
          </div>
        </div>

        {/* Results count */}
        <div className="mb-3 text-sm text-text/50">
          {loading
            ? 'Loading...'
            : `${data.length} submission${data.length !== 1 ? 's' : ''} found`}
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
                        Loading submissions...
                      </div>
                    </td>
                  </tr>
                ) : data.length === 0 ? (
                  <tr>
                    <td
                      colSpan={columns.length}
                      className="px-4 py-12 text-center text-sm text-text/40"
                    >
                      No submissions found
                    </td>
                  </tr>
                ) : (
                  table.getRowModel().rows.map((row) => (
                    <Fragment key={row.id}>
                      <tr className="border-t border-primary/5 hover:bg-primary/[0.02] transition-colors">
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
                      {/* Expanded row: form_data details */}
                      {expandedRow === row.original.id && (
                        <tr className="bg-primary/[0.02]">
                          <td
                            colSpan={columns.length}
                            className="px-4 py-4 border-t border-primary/5"
                          >
                            <div className="bg-json-bg rounded-xl p-4 font-mono text-xs">
                              <pre className="whitespace-pre-wrap break-words text-json-key">
                                <CodeBlock data={row.original.form_data} />
                              </pre>
                            </div>
                          </td>
                        </tr>
                      )}
                    </Fragment>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Email Configuration + Send to Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Email Config Card */}
          <div className="bg-white/40 backdrop-blur-sm rounded-2xl border border-primary/10 p-6">
            <div className="flex items-center gap-2 mb-4">
              <Settings className="w-5 h-5 text-primary" />
              <h2 className="font-title text-lg font-bold">
                Email Configuration
              </h2>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-text/60 mb-1.5">
                  Send To Email Address
                </label>
                <input
                  type="email"
                  value={emailAddress}
                  onChange={(e) => setEmailAddress(e.target.value)}
                  placeholder="admin@example.com"
                  className="w-full px-3 py-2 rounded-lg border border-primary/20 bg-white/60 text-sm focus:outline-none focus:border-primary/50 transition-colors"
                />
              </div>

              <button
                onClick={handleSaveEmailConfig}
                className="px-4 py-2 bg-primary text-white text-sm font-semibold rounded-lg hover:brightness-110 transition-all duration-300 flex items-center gap-2"
              >
                <Save className="w-4 h-4" />
                Save Config
              </button>

              {emailSaveMsg && (
                <p
                  className={`text-xs flex items-center gap-1 ${
                    emailSaveMsg.type === 'success'
                      ? 'text-success'
                      : 'text-error'
                  }`}
                >
                  {emailSaveMsg.type === 'success' ? (
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  ) : (
                    <XCircle className="w-3.5 h-3.5" />
                  )}
                  {emailSaveMsg.text}
                </p>
              )}
            </div>
          </div>

          {/* Send to Email Card */}
          <div className="bg-white/40 backdrop-blur-sm rounded-2xl border border-primary/10 p-6">
            <div className="flex items-center gap-2 mb-4">
              <Mail className="w-5 h-5 text-primary" />
              <h2 className="font-title text-lg font-bold">
                Send to Email
              </h2>
            </div>

            <div className="space-y-4">
              <p className="text-xs text-text/50">
                Send the currently filtered submission data to the configured
                email address.
              </p>

              <button
                onClick={handleSendToEmail}
                disabled={sendingEmail || !emailAddress}
                className="px-4 py-2 bg-accent text-white text-sm font-semibold rounded-lg hover:brightness-110 transition-all duration-300 disabled:opacity-50 flex items-center gap-2"
              >
                <Send className="w-4 h-4" />
                {sendingEmail ? 'Sending...' : 'Send Currently Shown Data'}
              </button>

              {sendEmailMsg && (
                <p
                  className={`text-xs flex items-center gap-1 ${
                    sendEmailMsg.type === 'success'
                      ? 'text-success'
                      : 'text-error'
                  }`}
                >
                  {sendEmailMsg.type === 'success' ? (
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  ) : (
                    <XCircle className="w-3.5 h-3.5" />
                  )}
                  {sendEmailMsg.text}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Auto-send Status */}
        <div className="bg-white/40 backdrop-blur-sm rounded-2xl border border-primary/10 p-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Clock className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-title text-sm font-bold">Auto-Send Status</h3>
              <p className="text-xs text-text/50 mt-0.5">
                {autoSendStatusText}
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

// ── CodeBlock: pretty-print JSON with coloured tokens ──

function CodeBlock({ data }: { data: Record<string, unknown> }) {
  return (
    <>
      {'{'}
      {Object.entries(data).map(([key, value], i, arr) => (
        <span key={key}>
          {'\n  '}
          <span className="text-json-key">&quot;{key}&quot;</span>
          {': '}
          <JsonValue value={value} />
          {i < arr.length - 1 ? ',' : ''}
        </span>
      ))}
      {'\n}'}
    </>
  )
}

function JsonValue({ value }: { value: unknown }) {
  if (value === null) return <span className="text-json-bool">null</span>
  if (typeof value === 'boolean')
    return <span className="text-json-bool">{String(value)}</span>
  if (typeof value === 'number')
    return <span className="text-json-number">{value}</span>
  if (typeof value === 'string')
    return <span className="text-json-string">&quot;{value}&quot;</span>
  if (Array.isArray(value))
    return <span className="text-json-bool">[Array]</span>
  if (typeof value === 'object' && value !== null)
    return <span className="text-json-bool">{'{...}'}</span>
  return <span>{String(value)}</span>
}
