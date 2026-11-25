import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`

// Padding lives on Panel, so a click on the dialog element itself is a backdrop click.
export const Dialog = styled.dialog`
  padding: 0;
  border: 0;
  border-radius: ${({ theme }) => theme.radius.lg};
  background: ${({ theme }) => theme.colors.card};
  color: ${({ theme }) => theme.colors.ink};
  box-shadow: ${({ theme }) => theme.shadows.card};
  width: min(88vw, 360px);

  &:focus {
    outline: none;
  }

  &[open],
  &[open]::backdrop {
    animation: ${fadeIn} 0.5s ease both;
  }

  &::backdrop {
    background: ${({ theme }) => theme.colors.overlay};
  }

  @media (prefers-reduced-motion: reduce) {
    &[open],
    &[open]::backdrop {
      animation: none;
    }
  }
`

export const Panel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 28px 24px 22px;
  text-align: center;
`

export const Title = styled.h2`
  margin: 0;
  font-family: ${({ theme }) => theme.fonts.script};
  font-size: 2.2rem;
  line-height: 1;
  color: ${({ theme }) => theme.colors.accent};
`

export const Message = styled.p`
  margin: 12px 0 22px;
`

export const Actions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`
