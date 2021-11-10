import React, { FC } from 'react';

import { PlainText } from 'components/Typography';

import { StyledTextCell } from './styles';

type INavigationCellProps = {
  text: string;
  link: string;
  align?: 'center' | 'left' | 'right';
};

const NavigationCell: FC<INavigationCellProps> = ({ text, link, align, ...props }) => {
  return (
    <StyledTextCell align={align} {...props}>
      <PlainText>
        <a href={link}>{text}</a>
      </PlainText>
    </StyledTextCell>
  );
};

export default NavigationCell;
