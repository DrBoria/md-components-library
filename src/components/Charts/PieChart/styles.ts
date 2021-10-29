import styled from 'styled-components';
import { Theme } from 'styles/baseTheme';

// TODO: TFR-44 move to container group or do not export
export const NameContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 1rem;
`;

// TODO: TFR-44 looks similar to component/Status could be united and reused
export const ColoredDot = styled.div`
  background: ${({ theme: { colors } }: { theme: Theme }) => colors.background.section};
  border-radius: 50%;
  width: 0.75rem;
  height: 0.75rem;
  margin-right: 0.75rem;
`;
