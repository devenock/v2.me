import { ImageResponse } from 'next/og'

export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'

export default async function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '50%',
          background: 'white',
          border: '1px solid #e5e7eb',
        }}
      >
        <div
          style={{
            width: '90%',
            height: '90%',
            borderRadius: '50%',
            background: '#111827',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: 18,
            fontWeight: '600',
            fontFamily: 'system-ui',
            letterSpacing: '-0.5px',
          }}
        >
          {'{'}N{'}'}
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
