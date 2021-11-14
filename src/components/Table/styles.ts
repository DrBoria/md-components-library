import styled from 'styled-components';

import { TTheme } from 'styles/baseTheme';

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: ${({ colsTemplate }: { colsTemplate: string }) => colsTemplate};
  grid-template-rows: 1fr;
  align-items: center;

  ${({ theme: { offsets } }: { theme: TTheme }) => `
    grid-column-gap: ${offsets.batweenElements};
  `}
`;
