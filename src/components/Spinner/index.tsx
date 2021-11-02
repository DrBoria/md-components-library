import React, { FC } from 'react';

import SpinnerLoader from './styles';
import { Props } from './types';

const Spinner: FC<Props> = ({ variant, ...props }) => {
  return <SpinnerLoader $variant={variant} {...props} />;
};

export default Spinner;
