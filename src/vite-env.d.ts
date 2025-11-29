/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_RECAPTCHA_SITE_KEY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

// Google reCAPTCHA v3 types
interface Window {
  grecaptcha: {
    ready: (callback: () => void) => void
    execute: (siteKey: string, options: { action: string }) => Promise<string>
    render: (container: string | HTMLElement, parameters: {
      sitekey: string
      size?: 'invisible' | 'compact' | 'normal'
      callback?: (token: string) => void
      'expired-callback'?: () => void
      'error-callback'?: () => void
    }) => number
  }
}
