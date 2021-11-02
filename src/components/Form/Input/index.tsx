import { basicFont } from 'components/Typography';
import styled from 'styled-components';
import { Theme } from 'styles/baseTheme';
import { withBasicElementOffsets, TWithBasicElementOffsets, TFullWidth } from 'styles/helpers';

type IInputProps = {
  name: string;
  id?: string;
  type?: string;
  theme: Theme;
} & TWithBasicElementOffsets &
  TFullWidth;

const Input = styled.input<IInputProps>`
  ${({ theme: { colors, border, elements, offsets } }: IInputProps) => `
    ${basicFont};

    display: block;
    height: ${elements.form.height};
    padding: ${offsets.elementContent};
    border: none;
    background: ${colors.overlay};
    border-radius: ${border.radius};
    color: ${colors.sectionContent};
  `}

  ${withBasicElementOffsets}

  ${({ fullWidth }) => fullWidth && 'width: 100%;'}
`;

export { Input };
