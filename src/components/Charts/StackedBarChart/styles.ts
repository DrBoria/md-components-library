import styled from 'styled-components';
import { ResponsiveContainer } from 'recharts';

import { Theme } from 'styles/baseTheme';

import { ComponentProps } from './types';

export const NameContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 1rem;
`;

export const ColoredDot = styled.div`
  background: ${({ theme: { colors } }: { theme: Theme }) => colors.section};
  border-radius: 50%;
  width: 0.75rem;
  height: 0.75rem;
  margin-right: 0.75rem;
`;

export const Wrapper = styled(ResponsiveContainer)<ComponentProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  background: ${({ theme: { colors } }: { theme: Theme }) => colors.section};

  .recharts-surface {
    padding: 2rem 0rem 1rem 1rem;
  }

  .recharts-cartesian-axis-line {
    stroke: ${({ theme: { colors } }: { theme: Theme }) => colors.sectionContent};
  }

  .recharts-text {
    color: ${({ theme: { colors } }: { theme: Theme }) => colors.sectionContent};
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
      stroke: ${({ theme: { colors } }: { theme: Theme }) => colors.section};
    }
  }

  .recharts-layer path {
    stroke-width: 0.25rem;
  }
`;
