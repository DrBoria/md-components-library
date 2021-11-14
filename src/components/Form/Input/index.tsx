import styled from 'styled-components';

import { basicFont } from 'components/Typography';

import { TTheme } from 'styles/baseTheme';
import { withBasicElementOffsets, TWithBasicElementOffsets, TFullWidth } from 'styles/helpers';

type TInputProps = {
  name: string;
  id?: string;
  type?: string;
  theme: TTheme;
} & TWithBasicElementOffsets &
  TFullWidth;

const Input = styled.input<TInputProps>`
  ${({ theme: { colors, border, elements, offsets } }: TInputProps) => `
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
