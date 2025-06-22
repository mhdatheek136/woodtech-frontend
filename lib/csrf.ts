// lib/csrf.js
import Cookies from 'js-cookie'

/**
 * Read the `csrftoken` cookie set by Django.
 */
export function getCsrfToken() {
  return Cookies.get('csrftoken') || null
}

/**
 * A thin wrapper around fetch() that:
 *   1. Always sends credentials: 'include' (so cookies flow).
 *   2. Attaches X-CSRFToken header on mutating requests.
 */
export async function fetchWithCsrf(input, init = {}) {
  const url = typeof input === 'string' ? input : input.url
  const method = (init.method || 'GET').toUpperCase()

  const fetchOptions = {
    credentials: 'include',
    ...init,
    headers: {
      ...(init.headers || {}),
    },
  }

  if (['POST', 'PUT', 'PATCH', 'DELETE'].includes(method)) {
    const token = getCsrfToken()
    if (token) {
      fetchOptions.headers['X-CSRFToken'] = token
    }
  }

  return fetch(url, fetchOptions)
}
