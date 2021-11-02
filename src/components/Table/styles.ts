import styled from 'styled-components';

export const StyledTablePagination = styled.div`
  display: block !important;
  border-bottom: none !important;
`;

type GridProps = {
  colsTemplate: string;
};

export const Grid = styled.div<GridProps>`
  display: grid;
  grid-template-columns: ${({ colsTemplate }) => colsTemplate};
  grid-template-rows: 1fr;
  grid-column-gap: 1rem;

  align-items: center;
`;
