import React, { FC } from 'react';

import { StyledTextCell } from './styles';

enum IActivityStatus {
  Active = 'Active',
  InActive = 'InActive',
}

type IStatusCellProps = {
  status: IActivityStatus;
  align?: 'center' | 'left' | 'right';
};

const StatusCell: FC<IStatusCellProps> = ({ status, align, ...props }) => {
  return (
    <StyledTextCell align={align} {...props}>
      {IActivityStatus[status]}
    </StyledTextCell>
  );
};

export default StatusCell;
