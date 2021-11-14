import React, { FC } from 'react';

import Avatar from 'components/Avatar';
import { PlainText } from 'components/Typography';

import { OneLineCell } from './styles';

type TBrandCellProps = {
  text: string;
  src: string;
  alt?: string;
  align?: 'center' | 'left' | 'right';
};

const BrandCell: FC<TBrandCellProps> = ({ text, src, alt, align, ...props }) => {
  return (
    <OneLineCell align={align} {...props}>
      <Avatar src={src} alt={alt} />
      <PlainText>{text}</PlainText>
    </OneLineCell>
  );
};

export default BrandCell;
