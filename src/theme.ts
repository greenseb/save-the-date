// Colours, fonts and radius for the whole site. Styles read these via the
// styled-components theme, so tweak the look from one place.
export const theme = {
  colors: {
    bg: '#fff1ec',
    bgGlow: '#ffe3d9',
    ink: '#4a2c2a',
    accent: '#e63762',
    accentSoft: '#ffb3c6',
    card: '#ffffff',
    onAccent: '#ffffff',
    overlay: 'rgba(74, 44, 42, 0.45)',
  },
  fonts: {
    body: "'Nunito', system-ui, sans-serif",
    script: "'Caveat', 'Comic Sans MS', cursive",
  },
  radius: {
    sm: '6px',
    md: '8px',
    lg: '18px',
    pill: '999px',
  },
  shadows: {
    card: '0 12px 32px rgba(74, 44, 42, 0.18)',
    photo: '0 14px 34px rgba(74, 44, 42, 0.22)',
    lifted: '0 10px 20px rgba(74, 44, 42, 0.35)',
    button: '0 8px 18px rgba(230, 55, 98, 0.35)',
  },
}

export type AppTheme = typeof theme
