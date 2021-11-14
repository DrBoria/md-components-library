import styled from 'styled-components';

import { TTheme } from 'styles/baseTheme';
import { withBasicElementOffsets, TWithBasicElementOffsets, TFullWidth } from 'styles/helpers';

type TFormLabelProps = {
  htmlFor: string;
  theme: TTheme;
} & TWithBasicElementOffsets &
  TFullWidth;

const FormLabel = styled.label<TFormLabelProps>`
  ${({ theme: { colors } }: TFormLabelProps) => `
      color: ${colors.sectionContent};
  `}

  ${withBasicElementOffsets}

  ${({ fullWidth }) => fullWidth && 'width: 100%;'}
`;

export { FormLabel };
