import React, { FC } from 'react';

import { IActivityStatus } from '../types';

import { StyledTextCell } from './styles';

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
