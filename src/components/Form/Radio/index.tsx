import React, { FC } from 'react';
import styled from 'styled-components';

import { basicFont } from 'components/Typography';

import { Theme } from 'styles/baseTheme';
import { withBasicElementOffsets, TWithBasicElementOffsets, TFullWidth } from 'styles/helpers';

type IRadioProps = {
  name: string;
  id?: string;
  value: any;
  type: 'radio';
  theme: Theme;
} & TWithBasicElementOffsets &
  TFullWidth;

const RadioInput = styled.input<IRadioProps>`
  ${({ theme: { colors, border, elements, offsets } }: IRadioProps) => `
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
  height: ${({ theme: { elements } }: { theme: Theme }) => elements.form.height};
  align-items: center;

  ${withBasicElementOffsets};
  ${({ fullWidth }) => fullWidth && 'width: 100%;'}
`;

const Radio: FC<IRadioProps> = ({ name, id, value, ...props }) => (
  <RadioContainer {...props}>
    <RadioInput type="radio" id={id} name={name} value={value} />
  </RadioContainer>
);

export { Radio };
