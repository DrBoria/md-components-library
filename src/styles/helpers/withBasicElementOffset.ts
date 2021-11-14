import { css } from 'styled-components';

import { TTheme } from 'styles/baseTheme';

export type TWithBasicElementOffsets = {
  /** added offset right by multiplying theme baseOffset variable */
  offsetRight?: boolean | number;
  /** added offset bottom by multiplying theme baseOffset variable */
  offsetBottom?: boolean | number;
};

// Every element can have only right and bottom offsets
export const withBasicElementOffsets = css`
  box-sizing: border-box;

  ${({ offsetRight, theme }: TWithBasicElementOffsets & { theme: TTheme }) =>
    offsetRight && `margin-right: ${theme.offsets.batweenElements}`};

  ${({ offsetBottom, theme }: TWithBasicElementOffsets & { theme: TTheme }) =>
    offsetBottom && `margin-bottom: ${theme.offsets.batweenElements}`};
`;
