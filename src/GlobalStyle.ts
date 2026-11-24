import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *, *::before, *::after { box-sizing: border-box; }

  html, body, #root { min-height: 100%; margin: 0; }

  body {
    background: radial-gradient(circle at 20% 10%, ${({ theme }) => theme.colors.bgGlow} 0%, ${({ theme }) => theme.colors.bg} 55%);
    color: ${({ theme }) => theme.colors.ink};
    font-family: ${({ theme }) => theme.fonts.body};
    -webkit-tap-highlight-color: transparent;
    overflow-x: hidden;
  }

  button { font-family: inherit; }
`;
