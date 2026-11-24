import styled from 'styled-components';

export const Photo = styled.div`
  width: min(80vw, 320px);
  padding: 12px 12px 18px;
  background: ${({ theme }) => theme.colors.card};
  border-radius: ${({ theme }) => theme.radius.sm};
  box-shadow: ${({ theme }) => theme.shadows.photo};
  transform: rotate(-2.5deg);

  img {
    display: block;
    width: 100%;
    aspect-ratio: 1;
    object-fit: cover;
  }
`;
