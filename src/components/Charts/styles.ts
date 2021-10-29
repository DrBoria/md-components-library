import styled from 'styled-components';
import { TWithBasicElementOffsets, withBasicElementOffsets } from 'styles/helpers';

/* **************************************************************** */
/* ************************** GRAPHICS **************************** */
/* **************************************************************** */

export const GraphicsContainer = styled.div<TWithBasicElementOffsets>`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;

  ${withBasicElementOffsets}
`;

export const LegendContainer = styled.div<TWithBasicElementOffsets>`
  ${withBasicElementOffsets}
`;

export const LegendRowContainer = styled.div<TWithBasicElementOffsets>`
  display: flex;
  justify-content: space-between;
  font-size: 1.1875rem;
  height: 3rem;
  margin-left: 2.375rem;

  ${withBasicElementOffsets}
`;
