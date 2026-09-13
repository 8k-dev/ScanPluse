"use client"

import type { AuthResponse, User } from './types'

/**
 * Thin fetch wrapper for the ScanPulse backend REST API.
 * Attaches the JWT (Authorization: Bearer) when available.
 * Only public values live here - no secrets.
 */

const API_URL: string = (
  process.env.NEXT_PUBLIC_API_URL ?? 'https://eightk-dev-github-io.onrender.com'
).replace(/\/+$/, '')
const TOKEN_KEY = 'sp_token'

export function getToken(): string | null {
  if (typeof window === 'undefined') return null
  return localStorage.getItem(TOKEN_KEY)
}

export function setToken(token: string): void {
  localStorage.setItem(TOKEN_KEY, token)
}

export function clearToken(): void {
  localStorage.removeItem(TOKEN_KEY)
}

export class ApiError extends Error {
  status: number

  constructor(status: number, message: string) {
    super(message)
    this.status = status
  }
}

interface ApiErrorBody {
  message?: string
}

async function request<T>(path: string, options: RequestInit = {}): Promise<T> {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  }

  const token = getToken()
  if (token) {
    headers.Authorization = `Bearer ${token}`
  }

  const res = await fetch(`${API_URL}${path}`, { ...options, headers })
  const body = (await res.json().catch(() => null)) as ApiErrorBody | T | null

  if (!res.ok) {
    const message = (body as ApiErrorBody | null)?.message ?? `Request failed (${res.status})`
    throw new ApiError(res.status, message)
  }

  return body as T
}

export const api = {
  get: <T>(path: string): Promise<T> => request<T>(path),

  post: <T>(path: string, data?: unknown): Promise<T> =>
    request<T>(path, {
      method: 'POST',
      body: data === undefined ? undefined : JSON.stringify(data),
    }),
}

export function register(email: string, password: string): Promise<AuthResponse> {
  return api.post<AuthResponse>('/api/auth/register', { email, password })
}

export function login(email: string, password: string): Promise<AuthResponse> {
  return api.post<AuthResponse>('/api/auth/login', { email, password })
}

export function getMe(): Promise<User> {
  return api.get<User>('/api/users/me')
}