import styled, { keyframes } from 'styled-components'
import { PrimaryButton, Wrap as BaseWrap } from '../ui/index.ts'

const rise = keyframes`
  from { opacity: 0; transform: translateY(18px); }
  to { opacity: 1; transform: translateY(0); }
`

const fall = keyframes`
  0% { transform: translateY(-10vh) rotate(0deg); opacity: 0; }
  10% { opacity: 1; }
  100% { transform: translateY(110vh) rotate(360deg); opacity: 0.9; }
`

export const Wrap = styled(BaseWrap)`
  padding: 36px 20px 48px;
  text-align: center;
  animation: ${rise} 0.8s ease both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`

export const Heading = styled.h1`
  margin: 28px 0 0;
  font-family: ${({ theme }) => theme.fonts.script};
  font-size: clamp(2.6rem, 11vw, 3.6rem);
  line-height: 1;
  color: ${({ theme }) => theme.colors.accent};
`

export const Names = styled.p`
  margin: 8px 0 0;
  font-size: 1.25rem;
  font-weight: 800;
  letter-spacing: 0.04em;
`

export const DateText = styled.p`
  margin: 14px 0 0;
  font-family: ${({ theme }) => theme.fonts.script};
  font-size: clamp(2rem, 9vw, 2.8rem);
  line-height: 1.1;
`

export const Note = styled.p`
  margin: 8px 0 0;
  opacity: 0.75;
`

export const CalendarButton = styled(PrimaryButton)`
  margin-top: 26px;
`

export const Footer = styled.p`
  margin: 22px 0 0;
  font-size: 0.95rem;
`

export const Confetti = styled.div`
  position: fixed;
  inset: 0;
  overflow: hidden;
  pointer-events: none;

  span {
    position: absolute;
    top: 0;
    animation: ${fall} linear forwards;
  }

  @media (prefers-reduced-motion: reduce) {
    display: none;
  }
`
