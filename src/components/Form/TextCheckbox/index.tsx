import React, { FC } from 'react';
import styled from 'styled-components';

import { basicFont } from 'components/Typography';

import { Theme } from 'styles/baseTheme';
import { withBasicElementOffsets, TWithBasicElementOffsets, TFullWidth } from 'styles/helpers';

type ITextCheckboxProps = {
  name: string;
  id: string;
  theme: Theme;
} & TWithBasicElementOffsets &
  TFullWidth;

const CheckboxContainer = styled.div`
  display: inline-block;
  cursor: pointer;
`;

const CheckboxInput = styled.input<TWithBasicElementOffsets & TFullWidth>`
  ${({ theme: { colors, elements, offsets, border } }: { theme: Theme }) => `
    display: none;

    & + label {
      ${basicFont};

      cursor: pointer;

      display: inline-block;
      height: ${elements.form.height};
      padding: ${offsets.elementContent};

      background: ${colors.overlay};
      border-radius:${border.radius};
    }

    & + label:hover {
      background: ${colors.overlayActive};
    }

    &:checked + label {
      background: ${colors.highlighted};
      color: ${colors.highlightedText};
    }

    ${withBasicElementOffsets};
    ${({ fullWidth }: TFullWidth) => fullWidth && 'width: 100%;'};
  `}
`;

const TextCheckbox: FC<ITextCheckboxProps> = ({ name, id, ...props }) => (
  <CheckboxContainer {...props}>
    <CheckboxInput id={id} name={name} type="checkbox" />
    <label htmlFor={id}>{name}</label>
  </CheckboxContainer>
);

export { TextCheckbox };
