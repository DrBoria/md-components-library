import React, { FC } from 'react';
import styled from 'styled-components';

import { basicFont } from 'components/Typography';

import { TTheme } from 'styles/baseTheme';
import { withBasicElementOffsets, TWithBasicElementOffsets, TFullWidth } from 'styles/helpers';

type TRadioProps = {
  name: string;
  id?: string;
  value: any;
  type: 'radio';
  theme: TTheme;
} & TWithBasicElementOffsets &
  TFullWidth;

const RadioInput = styled.input<TRadioProps>`
  ${({ theme: { colors, border, elements, offsets } }: TRadioProps) => `
    ${basicFont};

    display: block;
    height: ${elements.form.height};
    padding: ${offsets.elementContent};
    border: none;
    background: ${colors.overlay};
    border-radius: ${border.radius};
    color: ${colors.sectionContent};
  `}
`;

const RadioContainer = styled.div<TWithBasicElementOffsets & TFullWidth>`
  display: flex;
  align-items: center;
  height: ${({ theme: { elements } }: { theme: TTheme }) => elements.form.height};

  ${withBasicElementOffsets};
  ${({ fullWidth }) => fullWidth && 'width: 100%;'}
`;

const Radio: FC<TRadioProps> = ({ name, id, value, ...props }) => (
  <RadioContainer {...props}>
    <RadioInput type='radio' id={id} name={name} value={value} />
  </RadioContainer>
);

export { Radio };
