import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  *, *::before, *::after { box-sizing: border-box; }

  html, body, #root { min-height: 100%; margin: 0; }

  /* A flat colour on html and body: iOS Safari tints both its top and bottom
     bars from the page's base background-colour, so a gradient always leaves
     a seam at one end. */
  html {
    background-color: ${({ theme }) => theme.colors.bgGlow};
  }

  body {
    min-height: 100vh;
    min-height: 100dvh;
    background-color: ${({ theme }) => theme.colors.bgGlow};
    color: ${({ theme }) => theme.colors.ink};
    font-family: ${({ theme }) => theme.fonts.body};
    -webkit-tap-highlight-color: transparent;
    overflow-x: hidden;
  }

  button { font-family: inherit; }
`
