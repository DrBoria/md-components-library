import React, { FC } from 'react';

import { PlainText } from 'components/Typography';
import Avatar from 'components/Avatar';

import { OneLineCell } from './styles';

type IBrandCellProps = {
  text: string;
  src: string;
  alt?: string;
  align?: 'center' | 'left' | 'right';
};

const BrandCell: FC<IBrandCellProps> = ({ text, src, alt, align, ...props }) => {
  return (
    <OneLineCell align={align} {...props}>
      <Avatar src={src} alt={alt} />
      <PlainText>{text}</PlainText>
    </OneLineCell>
  );
};

export default BrandCell;
