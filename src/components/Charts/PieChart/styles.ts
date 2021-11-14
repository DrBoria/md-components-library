import styled from 'styled-components';

import { TTheme } from 'styles/baseTheme';

// TODO: TFR-44 move to container group or do not export
export const NameContainer = styled.div`
  align-items: center;

  display: flex;
  justify-content: space-between;
  margin-right: ${({ theme: { offsets } }: { theme: TTheme }) => offsets.batweenElements};
`;

// TODO: TFR-44 looks similar to component/Status could be united and reused
export const ColoredDot = styled.div`
  ${({ theme: { border, offsets, colors, elements } }: { theme: TTheme }) => `
    background: ${colors.section};
    border-radius: ${border.circle};
    width: ${elements.icons};
    height: ${elements.icons};
    margin-right: ${offsets.batweenElements};
  `}
`;
