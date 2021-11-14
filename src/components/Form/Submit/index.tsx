import React, { FC } from 'react';
import styled from 'styled-components';

import { basicFont } from 'components/Typography';

import { TTheme } from 'styles/baseTheme';
import { withBasicElementOffsets, TWithBasicElementOffsets, TFullWidth } from 'styles/helpers';

type TSubmitProps = {
  name: string;
  id?: string;
  value: any;
  theme: TTheme;
} & TWithBasicElementOffsets &
  TFullWidth;

const SubmitInput = styled.input<TSubmitProps>`
  ${({ theme: { colors, border, elements, offsets } }: TSubmitProps) => `
    ${basicFont};

    cursor: pointer;
    display: block;
    height: ${elements.form.height};
    padding: ${offsets.elementContent} calc(${offsets.elementContent} * 2);

    border: none;
    background: ${colors.highlighted};
    border-radius: ${border.radius};
    color: ${colors.highlightedText};
    
    font-weight: 700;

    ${withBasicElementOffsets};
    ${({ fullWidth }: TFullWidth) => fullWidth && 'width: 100%;'};
  `}
`;

const Submit: FC<TSubmitProps> = (props) => <SubmitInput {...props} type='submit' />;

export { Submit };
