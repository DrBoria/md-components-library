import styled from 'styled-components';

import { TTheme } from 'styles/baseTheme';

export const NameContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 1rem;
`;

export const ColoredDot = styled.div`
  background: ${({ theme: { colors } }: { theme: TTheme }) => colors.section};
  border-radius: 50%;
  width: 0.75rem;
  height: 0.75rem;
  margin-right: 0.75rem;
`;
