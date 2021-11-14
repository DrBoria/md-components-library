import React, { FC } from 'react';

import { PlainText } from 'components/Typography';

import { StyledTextCell } from './styles';

type TTextDisplayCellProps = {
  text: any;
  align?: 'center' | 'left' | 'right';
};

const TextDisplayCell: FC<TTextDisplayCellProps> = ({ text, align, ...props }) => {
  return (
    <StyledTextCell align={align} {...props}>
      <PlainText>{text}</PlainText>
    </StyledTextCell>
  );
};

export default TextDisplayCell;
