import styled, { css, keyframes } from 'styled-components';

import { ReactComponent as DefaultSpinnerLoader } from './spinner-loader.svg';

import { ComponentProps } from './types';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const SpinnerLoader = styled(DefaultSpinnerLoader)<ComponentProps>`
  animation: ${rotate} 3s linear infinite;

  ${({ $variant }) => {
    switch ($variant) {
      case 'white':
        return css`
          color: ${({ theme }) => theme.colors.white};
        `;
      case 'black':
      default:
        return css`
          color: ${({ theme }) => theme.colors.navyGreen};
        `;
    }
  }}
`;

export default SpinnerLoader;
