import styled from 'styled-components';
import { ResponsiveContainer } from 'recharts';

import { Theme } from 'styles/baseTheme';

import { ComponentProps } from './types';

export const Wrapper = styled(ResponsiveContainer)<ComponentProps>`
  ${({ theme: { colors } }: { theme: Theme }) => `
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  background: ${colors.background.section};

  .recharts-surface {
    padding: 2rem 0rem 1rem 1rem;
  }

  .recharts-cartesian-axis-line {
    stroke: ${colors.decoration.border}};
  }

  .recharts-text {
    color: ${colors.typography.title};
    font-size: 1.0625rem;
    line-height: 1.5rem;
  }

  .recharts-cartesian-axis-tick-line {
    display: none;
  }

  .recharts-reference-line {
    stroke-dasharray: 10 10;
  }

  .recharts-reference-line text {
    font-size: 1.0625rem;
    line-height: 1.5rem;
    font-weight: 600;
    text-align: right;
  }

  .recharts-reference-line line {
    stroke-width: 0.125rem;
  }

  circle {
    visibility: hidden;
    :first-child,
    :last-child {
      visibility: visible;
      r: 0.45rem;
      fill-opacity: 1;
      stroke-width: 2;
      stroke: ${colors.background.section};
    }
  }

  .recharts-layer path {
    stroke-width: 0.25rem;
  }
  `}
`;

export default Wrapper;
