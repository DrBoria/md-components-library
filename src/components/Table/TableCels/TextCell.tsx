import React, { FC } from 'react';

import { PlainText } from 'components/Typography';

import { StyledTextCell } from './styles';

type ITextDisplayCellProps = {
  text: any;
  align?: 'center' | 'left' | 'right';
};

const TextDisplayCell: FC<ITextDisplayCellProps> = ({ text, align, ...props }) => {
  return (
    <StyledTextCell align={align} {...props}>
      <PlainText>{text}</PlainText>
    </StyledTextCell>
  );
};

export default TextDisplayCell;
