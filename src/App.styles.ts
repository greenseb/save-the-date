import styled, { keyframes } from 'styled-components'
import { TextButton, Wrap } from './components/ui/index.ts'

export const Page = styled(Wrap)`
  min-height: 100vh;
  min-height: 100dvh; /* excludes the phone browser's collapsing toolbars */
  padding: 32px 16px 40px;
`

// Safari tints its top bar from a fixed element touching the top edge (it
// ignores theme-color), so this strip matches the glow at the top of the page.
export const TopTint = styled.div`
  position: fixed;
  inset: 0 0 auto 0;
  height: 4px;
  background: ${({ theme }) => theme.colors.bgGlow};
  pointer-events: none;
`

export const Eyebrow = styled.p`
  margin: 0;
  font-family: ${({ theme }) => theme.fonts.script};
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.accent};
`

export const Title = styled.h1`
  margin: 0;
  font-family: ${({ theme }) => theme.fonts.script};
  font-size: clamp(2.6rem, 11vw, 3.4rem);
  line-height: 1;
`

export const Body = styled.p`
  max-width: 28ch;
  margin: 10px 0 22px;
  text-align: center;
`

export const Prompt = styled.p`
  margin: 14px 0 0;
  font-size: 0.8rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  opacity: 0.6;
`

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 0.6; }
`

export const SkipButton = styled(TextButton)`
  margin-top: 28px;
  animation: ${fadeIn} 0.8s ease both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`
