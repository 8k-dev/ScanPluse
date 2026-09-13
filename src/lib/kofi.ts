"use client"

export type PaymentPlan = 'monthly' | 'lifetime'

const KOFI_PAGE_URL: string = 'https://ko-fi.com/4klgtvsok'

/**
 * Builds the Ko-fi embed URL. Ko-fi's widget mode (widget=true&embed=true)
 * is designed to be embedded in an iframe; the surrounding modal crops
 * Ko-fi's own branding bar.
 */
export function kofiEmbedUrl(plan: PaymentPlan): string {
  const path = plan === 'monthly' ? '/membership' : ''
  const title = plan === 'monthly' ? 'Premium Monthly' : 'Premium Lifetime'
  return `${KOFI_PAGE_URL}${path}?hidefeed=true&widget=true&embed=true&title=${encodeURIComponent(title)}`
}