import React, { FC } from 'react';
import styled from 'styled-components';

import { basicFont } from 'components/Typography';

import { Theme } from 'styles/baseTheme';
import { withBasicElementOffsets, TWithBasicElementOffsets, TFullWidth } from 'styles/helpers';

import ArrowDownIcon from './arrow_down.svg';

export type TOption = { value: any; text: string };
type ISelectProps = {
  name: string;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  id: string;
  type?: string;
  value: any;
  defaultText?: string;
  options: TOption[];
} & TWithBasicElementOffsets &
  TFullWidth;

const SelectInput = styled.select<{ theme: Theme }>`
  ${({ theme: { colors, border, elements, offsets } }: { theme: Theme }) => `
    ${basicFont};

    display: block;
    height: ${elements.form.height};
    padding: ${offsets.elementContent};
    border: none;
    background: ${colors.overlay};
    border-radius: ${border.radius};
    color: ${colors.sectionContent};

    width: 100%;
    height: 100%;
    border: 0;

    appearance: none;
    background: var(--color-overlay);
    border-radius: var(--border-radius);
    box-shadow: none;

    cursor: pointer;
    outline: 0;

    &:invalid {
      color: ${colors.disabled};
    }
  `}
`;

const Option = styled.option`
  ${({ theme: { colors } }: { theme: Theme }) => `
    background: ${colors.overlay};
    color: ${colors.sectionContent};

    &:disabled {
        color: ${colors.disabled};
    }
  `}
`;

const SelectContainer = styled.div<TWithBasicElementOffsets & TFullWidth>`
  position: relative;
  display: flex;
  overflow: hidden;

  height: ${({ theme: { elements } }: { theme: Theme }) => elements.form.height};

  ${withBasicElementOffsets};
  ${({ fullWidth }) => fullWidth && 'width: 100%;'}
`;

const Label = styled.label`
  ${({ theme: { elements, offsets } }: { theme: Theme }) => `
    position: absolute;
    top: ${offsets.elementContent};
    right: ${offsets.elementContent};
    width: calc(${elements.form.height} - ${offsets.elementContent} * 2);
    height: calc(${elements.form.height} - ${offsets.elementContent} * 2);
  `}
`;

const Select: FC<ISelectProps> = ({ name, id, options, defaultText = 'Choose goal', onChange }) => (
  <SelectContainer>
    <SelectInput id={id} name={name} defaultValue="0" required onChange={onChange}>
      <Option disabled value="0">
        {defaultText}
      </Option>
      {options.map((option: TOption, index: number) => (
        <Option key={index} value={option.value}>
          {option.text}
        </Option>
      ))}
    </SelectInput>

    <Label htmlFor={id}>
      <img src={ArrowDownIcon} alt="" />
    </Label>
  </SelectContainer>
);

export { Select };
