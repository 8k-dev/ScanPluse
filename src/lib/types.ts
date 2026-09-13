export type Plan = 'free' | 'monthly' | 'lifetime'

export interface Subscription {
  plan: Plan
  expiresAt: string | null
  lifetime: boolean
}

export interface User {
  id: string
  email: string
  createdAt: string
  subscription: Subscription
}

export interface AuthResponse {
  token: string
  user: User
}