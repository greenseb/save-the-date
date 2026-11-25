import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  *, *::before, *::after { box-sizing: border-box; }

  html, body, #root { min-height: 100%; margin: 0; }

  /* iOS Safari tints its top bar from the page's base background-colour, so
     html and body use the glow colour (the top of the page). The gradient
     layers on body then paint the lighter base colour further down. */
  html {
    background-color: ${({ theme }) => theme.colors.bgGlow};
  }

  body {
    min-height: 100vh;
    min-height: 100dvh;
    background-color: ${({ theme }) => theme.colors.bgGlow};
    background-image:
      linear-gradient(to bottom, ${({ theme }) => theme.colors.bgGlow} 0%, transparent 25%),
      radial-gradient(circle at 20% 10%, ${({ theme }) => theme.colors.bgGlow} 0%, ${({ theme }) => theme.colors.bg} 55%),
      linear-gradient(${({ theme }) => theme.colors.bg}, ${({ theme }) => theme.colors.bg});
    background-repeat: no-repeat;
    color: ${({ theme }) => theme.colors.ink};
    font-family: ${({ theme }) => theme.fonts.body};
    -webkit-tap-highlight-color: transparent;
    overflow-x: hidden;
  }

  button { font-family: inherit; }
`
