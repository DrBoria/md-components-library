import styled from 'styled-components';
import { Theme } from 'styles/baseTheme';
import { withBasicElementOffsets, TWithBasicElementOffsets, TFullWidth } from 'styles/helpers';

type IFormLabelProps = {
  htmlFor: string;
  theme: Theme;
} & TWithBasicElementOffsets &
  TFullWidth;

const FormLabel = styled.label<IFormLabelProps>`
  ${({ theme: { colors } }: IFormLabelProps) => `
      color: ${colors.sectionContent};
  `}

  ${withBasicElementOffsets}

  ${({ fullWidth }) => fullWidth && 'width: 100%;'}
`;

export { FormLabel };
