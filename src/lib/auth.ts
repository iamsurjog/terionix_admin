const AUTH_KEY = 'terionix_admin'

export function isAuthenticated(): boolean {
  if (typeof window === 'undefined') return false
  return localStorage.getItem(AUTH_KEY) === 'true'
}

export async function login(password: string): Promise<boolean> {
  console.log('[auth] login called, password length:', password.length)
  try {
    const result = await verifyPassword({ data: { password } })
    console.log('[auth] verifyPassword result:', result)
    if (result) {
      localStorage.setItem(AUTH_KEY, 'true')
      console.log('[auth] login success')
      return true
    }
    console.log('[auth] password mismatch')
  } catch (e) {
    console.error('[auth] login error:', e)
    return false
  }
  return false
}

export async function changePassword(currentPassword: string, newPassword: string) {
  console.log('[auth] changePassword called')
  try {
    const result = await updatePassword({ data: { currentPassword, newPassword } })
    console.log('[auth] changePassword result:', result)
    return result
  } catch (e) {
    console.error('[auth] changePassword error:', e)
    return { success: false, error: 'Failed to connect to server' }
  }
}

export async function logout(): Promise<void> {
  localStorage.removeItem(AUTH_KEY)
  try {
    await fetch('http://localhost:8001/api/auth/logout', { method: 'POST', credentials: 'include' })
  } catch {
    // server session will timeout naturally
  }
}

const API_BASE = 'http://localhost:8001/api'

function getCsrfToken(): string {
  const match = document.cookie.match(/csrftoken=([^;]+)/)
  return match ? match[1] : ''
}

async function apiFetch(path: string, options: RequestInit = {}): Promise<Response> {
  const isFormData = options.body instanceof FormData
  const headers: Record<string, string> = {}
  if (!isFormData) {
    headers['Content-Type'] = 'application/json'
  }
  const method = (options.method || 'GET').toUpperCase()
  if (method !== 'GET') {
    headers['X-CSRFToken'] = getCsrfToken()
  }
  return fetch(`${API_BASE}${path}`, {
    ...options,
    headers: { ...headers, ...(options.headers as Record<string, string> || {}) },
    credentials: 'include',
  })
}

export async function readContent(): Promise<Record<string, unknown>> {
  const res = await apiFetch('/content')
  if (!res.ok) throw new Error(`Failed to fetch content: ${res.status}`)
  return res.json()
}

export async function contentAction(d: {
  action: string
  section?: string
  content?: unknown
}): Promise<unknown> {
  if (d.action === 'read') {
    return readContent()
  }
  if (d.action === 'write' && d.section && d.content !== undefined) {
    const res = await apiFetch(`/content/${d.section}`, {
      method: 'PATCH',
      body: JSON.stringify({ data: d.content }),
    })
    if (!res.ok) {
      const err = await res.json().catch(() => ({}))
      throw new Error(err.error || `Failed to save: ${res.status}`)
    }
    return { success: true }
  }
  return { success: false, error: 'Invalid action' }
}

export async function verifyPassword(d: {
  data: { password: string }
}): Promise<boolean> {
  const res = await apiFetch('/auth/login', {
    method: 'POST',
    body: JSON.stringify({ username: 'admin', password: d.data.password }),
  })
  const json = await res.json()
  return json.success === true
}

export async function updatePassword(d: {
  data: { currentPassword: string; newPassword: string }
}): Promise<{ success: boolean; error?: string }> {
  const res = await apiFetch('/auth/change-password', {
    method: 'POST',
    body: JSON.stringify({
      current_password: d.data.currentPassword,
      new_password: d.data.newPassword,
    }),
  })
  return res.json()
}
