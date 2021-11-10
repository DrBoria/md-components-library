import { PlainText } from 'components/Typography';
import styled, { css } from 'styled-components';

type StyledCellProps = {
  align?: string;
};

export const StyledTextCell = styled.div<StyledCellProps>`
  padding: 0 1rem 1.5rem;
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
  display: flex;
  justify-content: flex-end;
  align-items: center;
  ${PlainText} {
    margin-left: 0.4375rem;
  }
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
