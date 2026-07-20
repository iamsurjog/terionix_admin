import { createFileRoute, useNavigate, Link } from '@tanstack/react-router'
import { useEffect } from 'react'
import { isAuthenticated, logout } from '#/lib/auth'
import { FileText, MessageSquare, ArrowRight, LayoutDashboard, ClipboardList } from 'lucide-react'

export const Route = createFileRoute('/')({
  component: AdminDashboard,
})

const sections = [
  {
    key: 'content',
    label: 'Content Management',
    desc: 'Edit website content — home, solutions, about, contact forms, and more.',
    icon: FileText,
    to: '/content/',
    color: 'from-primary/20 via-primary/10 to-transparent',
    iconBg: 'bg-primary/10',
    iconColor: 'text-primary',
    borderHover: 'hover:border-primary/30 hover:shadow-primary/10',
  },
  {
    key: 'contact-requests',
    label: 'Contact Requests',
    desc: 'View, filter, export contact form submissions. Configure email delivery.',
    icon: MessageSquare,
    to: '/contact-requests',
    color: 'from-secondary/20 via-secondary/10 to-transparent',
    iconBg: 'bg-secondary/10',
    iconColor: 'text-secondary',
    borderHover: 'hover:border-secondary/30 hover:shadow-secondary/10',
  },
  {
    key: 'tenders',
    label: 'Tenders',
    desc: 'View and refresh government tender data from eprocure.gov.in',
    icon: ClipboardList,
    to: '/tenders',
    color: 'from-accent/20 via-accent/10 to-transparent',
    iconBg: 'bg-accent/10',
    iconColor: 'text-accent',
    borderHover: 'hover:border-accent/30 hover:shadow-accent/10',
  },
]

function AdminDashboard() {
  const navigate = useNavigate()
  useEffect(() => {
    if (!isAuthenticated()) navigate({ to: '/content/login' })
  }, [navigate])

  return (
    <div className="font-sans text-text min-h-screen">
      {/* Subtle header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-xl border-b border-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg shadow-primary/25">
              <LayoutDashboard className="w-5 h-5 text-white" />
            </div>
            <span className="font-title font-bold text-lg">Admin Panel</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent motion-preset-pulse" />
              <span className="text-xs font-semibold text-accent uppercase tracking-wider">Dashboard</span>
            </div>
            <div className="w-px h-8 bg-primary/20" />
            <button
              onClick={async () => { await logout(); navigate({ to: '/content/login' }) }}
              className="px-4 py-2 font-sans text-sm font-medium rounded-full text-error hover:bg-error-soft transition-all"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      <main className="pt-32 pb-24 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12 motion-preset-slide-up">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-1 bg-accent rounded-full" />
              <span className="w-16 h-1 bg-primary/30 rounded-full" />
            </div>
            <h1 className="font-title text-4xl font-bold mb-2">Welcome, Admin</h1>
            <p className="text-text/60 text-lg">Manage your website content and review contact submissions.</p>
          </div>

          {/* Navigation Cards */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sections.map((s) => (
              <Link
                key={s.key}
                to={s.to}
                className={`group relative block p-8 rounded-2xl border border-primary/10 bg-white/40 backdrop-blur-sm overflow-hidden transition-all duration-500 ${s.borderHover} hover:bg-white/60 hover:shadow-xl motion-preset-slide-up`}
                style={{ animationDelay: '100ms' }}
              >
                {/* Gradient decoration */}
                <div className={`absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br ${s.color} opacity-60 group-hover:opacity-100 blur-2xl transition-all duration-700`} />
                <div className="absolute -bottom-20 -left-20 w-32 h-32 rounded-full bg-gradient-to-tr ${s.color} opacity-30 group-hover:opacity-60 blur-xl transition-all duration-700" />

                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-xl ${s.iconBg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mb-5`}>
                    <s.icon className={`w-7 h-7 ${s.iconColor} group-hover:scale-110 transition-transform duration-300`} />
                  </div>
                  <h2 className="font-title text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {s.label}
                  </h2>
                  <p className="text-text/60 text-sm leading-relaxed mb-5">
                    {s.desc}
                  </p>
                  <div className="flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all duration-300">
                    <span>Open</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Footer info */}
          <div className="mt-12 pt-8 border-t border-primary/5 text-center">
            <p className="text-xs text-text/30">
              Terionix Admin Panel &middot; Manage content and contact requests
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
