import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  *, *::before, *::after { box-sizing: border-box; }

  html, body, #root { min-height: 100%; margin: 0; }

  /* The background sits on html (not body) with a solid base colour, so it
     fills the whole screen, including the area behind the notch and over-scroll. */
  html {
    background-color: ${({ theme }) => theme.colors.bg};
    background-image: radial-gradient(circle at 20% 10%, ${({ theme }) => theme.colors.bgGlow} 0%, ${({ theme }) => theme.colors.bg} 55%);
    background-repeat: no-repeat;
  }

  body {
    color: ${({ theme }) => theme.colors.ink};
    font-family: ${({ theme }) => theme.fonts.body};
    -webkit-tap-highlight-color: transparent;
    overflow-x: hidden;
  }

  button { font-family: inherit; }
`
