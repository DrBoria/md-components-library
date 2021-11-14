import styled, { css } from 'styled-components';

import { PlainText } from 'components/Typography';

import { TTheme } from 'styles/baseTheme';

type TStyledCellProps = {
  align?: string;
};

export const StyledTextCell = styled.div<TStyledCellProps>`
  padding: ${({ theme: { offsets } }: { theme: TTheme }) => offsets.elementContent};

  text-align: ${({ align = 'center' }) => align};
`;

export const StyledHeaderCell = styled(StyledTextCell)`
  align-self: baseline;
`;

export const StyledValueCell = styled(StyledTextCell)`
  text-align: center;
`;

export const OneLineCell = styled(StyledTextCell)`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const Percentage = styled.div<{ trend?: boolean }>`
  ${({ theme: { offsets } }: { theme: TTheme }) => `
    display: flex;
    justify-content: flex-end;
    align-items: center;

    ${PlainText} {
      margin-left: ${offsets.batweenElements};
    }
  `}

  ${({ trend }) => {
    switch (trend) {
      case false:
        return css`
          ${PlainText} {
            color: ${({ theme }) => theme.colors.redMedium};
          }
        `;
      case true:
      default:
        return css`
          ${PlainText} {
            color: ${({ theme }) => theme.colors.greenMedium};
          }
        `;
    }
  }}
`;
