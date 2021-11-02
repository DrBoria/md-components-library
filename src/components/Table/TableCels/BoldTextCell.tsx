import React, { FC } from 'react';

import { StyledTextCell } from './styles';

type IBoldTextCellProps = {
  text: any;
  align?: 'center' | 'left' | 'right';
};

const BoldTextCell: FC<IBoldTextCellProps> = ({ text, align, ...props }) => {
  return (
    <StyledTextCell align={align} {...props}>
      <b>{text}</b>
    </StyledTextCell>
  );
};

export default BoldTextCell;
