import React, { FC } from 'react';
import styled, { keyframes } from 'styled-components';

import { TTheme } from 'styles/baseTheme';

import { ReactComponent as DefaultSpinnerLoader } from './spinner-loader.svg';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const SpinnerLoader = styled(DefaultSpinnerLoader)`
  animation: ${rotate} 3s linear infinite;

  color: ${({ theme: { colors } }: { theme: TTheme }) => `${colors.sectionContent}`};
`;

export const Spinner: FC<any> = () => {
  return <SpinnerLoader />;
};

export default Spinner;
