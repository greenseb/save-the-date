import styled, { css, keyframes } from 'styled-components';
import { COLS, ROWS } from '../../utils/puzzle.ts';

const pulse = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.07); }
`;

export const Board = styled.div<{ $done: boolean }>`
  display: grid;
  grid-template-columns: repeat(${COLS}, 1fr);
  grid-template-rows: repeat(${ROWS}, 1fr);
  gap: ${({ $done }) => ($done ? 0 : '4px')};
  width: min(90vw, 420px);
  aspect-ratio: 1;
  padding: ${({ $done }) => ($done ? '0' : '6px')};
  background: ${({ theme }) => theme.colors.card};
  border-radius: ${({ theme }) => theme.radius.lg};
  box-shadow: ${({ theme }) => theme.shadows.card};
  transition: gap 0.6s ease, padding 0.6s ease;
`;

interface TileProps {
  $done: boolean;
  $correct: boolean;
  $selected: boolean;
  $hint: boolean;
}

export const Tile = styled.button<TileProps>`
  position: relative;
  padding: 0;
  border: 0;
  border-radius: ${({ $done, theme }) => ($done ? 0 : theme.radius.md)};
  background-size: ${COLS * 100}% ${ROWS * 100}%;
  background-color: ${({ theme }) => theme.colors.accentSoft};
  cursor: pointer;
  touch-action: manipulation;
  transition: transform 0.15s ease, box-shadow 0.15s ease, border-radius 0.6s ease;

  ${({ $correct }) =>
    $correct &&
    css`
      box-shadow: inset 0 0 0 2px rgba(255, 255, 255, 0.85);
    `}

  ${({ $selected, theme }) =>
    $selected &&
    css`
      z-index: 2;
      transform: translateY(-4px) scale(1.06);
      box-shadow: 0 0 0 3px ${theme.colors.accent}, ${theme.shadows.lifted};
    `}

  ${({ $hint, $selected, theme }) =>
    $hint &&
    !$selected &&
    css`
      z-index: 1;
      box-shadow: 0 0 0 3px ${theme.colors.accent};
      animation: ${pulse} 1s ease-in-out infinite;
    `}

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.ink};
    outline-offset: 2px;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    transition: none;
  }
`;

export const Quip = styled.p`
  min-height: 1.6em;
  margin: 18px 0 0;
  font-family: ${({ theme }) => theme.fonts.script};
  font-size: 1.7rem;
  text-align: center;
`;
