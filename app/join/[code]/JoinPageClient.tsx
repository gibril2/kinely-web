'use client'

import { useEffect, useState } from 'react'

interface InvitePreview {
  family_name?: string
  family_photo_url?: string
  inviter_name?: string
  valid: boolean
}

export function JoinPageClient({
  code,
  preview,
}: {
  code: string
  preview: InvitePreview | null
}) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const ua = navigator.userAgent
    setIsMobile(/iPhone|iPad|iPod|Android/i.test(ua))
  }, [])

  const valid = preview?.valid ?? false
  const familyName = preview?.family_name
  const inviterName = preview?.inviter_name
  const deepLink = `kinely://join/${code}`

  // On mobile, try to open the app immediately via universal link
  useEffect(() => {
    if (isMobile && valid) {
      window.location.href = deepLink
    }
  }, [isMobile, valid, deepLink])

  const headline = valid
    ? inviterName
      ? `${inviterName} invited you to join ${familyName ?? 'their family'} on Kinely`
      : `You're invited to join ${familyName ?? 'a family'} on Kinely`
    : 'This invite is no longer valid'

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px 24px',
      backgroundColor: '#1A1A1A',
      color: '#F5EDE0',
      fontFamily: 'var(--font-dm-sans), system-ui, sans-serif',
    }}>
      {/* Wordmark */}
      <h1 style={{
        fontFamily: 'var(--font-cormorant), Georgia, serif',
        fontSize: 40,
        fontWeight: 400,
        color: '#B5622A',
        marginBottom: 48,
        letterSpacing: 1,
      }}>
        Kinely
      </h1>

      {/* Family photo */}
      {valid && preview?.family_photo_url && (
        <img
          src={preview.family_photo_url}
          alt={familyName ?? 'Family'}
          style={{
            width: 80,
            height: 80,
            borderRadius: 40,
            objectFit: 'cover',
            marginBottom: 24,
            border: '3px solid rgba(181,98,42,0.3)',
          }}
        />
      )}

      {/* Headline */}
      <h2 style={{
        fontFamily: 'var(--font-cormorant), Georgia, serif',
        fontSize: 28,
        fontWeight: 500,
        textAlign: 'center',
        lineHeight: 1.3,
        maxWidth: 440,
        marginBottom: 12,
      }}>
        {headline}
      </h2>

      {valid && (
        <p style={{
          fontSize: 16,
          color: 'rgba(245,237,224,0.55)',
          textAlign: 'center',
          maxWidth: 360,
          lineHeight: 1.6,
          marginBottom: 48,
        }}>
          Answer one question a day with your family.<br />
          Build memories that last forever.
        </p>
      )}

      {valid && (
        <>
          {/* Open in App button (mobile) */}
          {isMobile && (
            <a
              href={deepLink}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                maxWidth: 320,
                height: 56,
                borderRadius: 14,
                backgroundColor: '#B5622A',
                color: '#FFFFFF',
                fontSize: 17,
                fontWeight: 600,
                textDecoration: 'none',
                marginBottom: 16,
              }}
            >
              Open in Kinely
            </a>
          )}

          {/* Store buttons */}
          <div style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            gap: 12,
            width: '100%',
            maxWidth: 320,
            alignItems: 'center',
          }}>
            <a
              href="https://apps.apple.com/app/kinely/id000000000"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flex: 1,
                width: '100%',
                height: 50,
                borderRadius: 12,
                border: '1px solid rgba(255,255,255,0.15)',
                color: '#F5EDE0',
                fontSize: 14,
                fontWeight: 500,
                textDecoration: 'none',
                gap: 8,
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
              App Store
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.kinely.app"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flex: 1,
                width: '100%',
                height: 50,
                borderRadius: 12,
                border: '1px solid rgba(255,255,255,0.15)',
                color: '#F5EDE0',
                fontSize: 14,
                fontWeight: 500,
                textDecoration: 'none',
                gap: 8,
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M3.18 23.04L13.18 12.97 3.14.91a1.55 1.55 0 00-.05.43v21.28c0 .16.03.3.09.42zm1.44.56l11.12-6.25-2.46-2.44L4.62 23.6zm13.38-7.51L6.04 24 17.36 17.52l.64-1.43zM20.15 11.32L17.56 9.88l-2.75 2.75 2.74 2.74 2.6-1.47c.5-.28.82-.82.82-1.4 0-.58-.32-1.12-.82-1.18zM4.62.4l8.66 8.69 2.46-2.44L4.62.4z"/></svg>
              Google Play
            </a>
          </div>

          {/* QR code hint for desktop */}
          {!isMobile && (
            <p style={{
              fontSize: 13,
              color: 'rgba(245,237,224,0.35)',
              textAlign: 'center',
              marginTop: 32,
            }}>
              Or scan this page's URL with your phone camera
            </p>
          )}
        </>
      )}

      {/* Invalid invite */}
      {!valid && (
        <div style={{ textAlign: 'center', marginTop: 24 }}>
          <p style={{ fontSize: 16, color: 'rgba(245,237,224,0.55)', marginBottom: 24 }}>
            This invite may have expired or already been used.
          </p>
          <a
            href="https://getkinely.com"
            style={{
              color: '#B5622A',
              fontSize: 15,
              fontWeight: 500,
              textDecoration: 'none',
            }}
          >
            Learn more about Kinely →
          </a>
        </div>
      )}
    </div>
  )
}
