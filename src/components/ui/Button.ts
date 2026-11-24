import styled from 'styled-components';

export const PrimaryButton = styled.button`
  padding: 14px 26px;
  border: 0;
  border-radius: ${({ theme }) => theme.radius.pill};
  background: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.onAccent};
  font-size: 1rem;
  font-weight: 800;
  cursor: pointer;
  box-shadow: ${({ theme }) => theme.shadows.button};
  transition: transform 0.15s ease;

  &:active {
    transform: scale(0.97);
  }
`;

export const TextButton = styled.button`
  padding: 8px 12px;
  border: 0;
  background: none;
  color: ${({ theme }) => theme.colors.ink};
  font-size: 0.9rem;
  text-decoration: underline;
  opacity: 0.6;
  cursor: pointer;
`;
