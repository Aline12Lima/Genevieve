// src/lib/metaPixel.ts

export function trackEvent(
  event: string,
  params?: Record<string, unknown>
) {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", event, params);
  }
}
