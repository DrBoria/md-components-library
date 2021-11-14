import React, { FC } from 'react';

import { StyledTextCell } from './styles';

enum TActivityStatus {
  Active = 'Active',
  InActive = 'InActive',
}

type TStatusCellProps = {
  status: TActivityStatus;
  align?: 'center' | 'left' | 'right';
};

const StatusCell: FC<TStatusCellProps> = ({ status, align, ...props }) => {
  return (
    <StyledTextCell align={align} {...props}>
      {TActivityStatus[status]}
    </StyledTextCell>
  );
};

export default StatusCell;
