import styled, { css } from 'styled-components';
import { ResponsiveContainer } from 'recharts';

import { Theme } from 'styles/baseTheme';

import { ComponentProps } from './types';

const Wrapper = styled(ResponsiveContainer)<ComponentProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  background-color: ${({ theme: { colors } }: { theme: Theme }) => colors.background.section};

  .recharts-surface {
    padding: 2rem 0rem 1rem 1rem;
  }

  .recharts-cartesian-axis-line {
    stroke: ${({ theme: { colors } }: { theme: Theme }) => colors.decoration.border};
  }

  .recharts-text {
    color: ${({ theme: { colors } }: { theme: Theme }) => colors.typography.navigationText};
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
      stroke: ${({ theme: { colors } }: { theme: Theme }) => colors.background.section};
    }
  }

  .recharts-layer path {
    stroke-width: 0.25rem;
  }

  ${({ $variant }) => {
    switch ($variant) {
      case 'green':
        return css`
          ${({ theme: { colors } }: { theme: Theme }) => `
          .recharts-reference-line line {
            stroke: ${colors.typography.navigationText};
          }
          circle {
            :first-child,
            :last-child {
              fill:  ${colors.typography.navigationText};
            }
          }
          .recharts-layer path {
            :last-child {
              stroke:  ${colors.typography.navigationText};
            }
            :first-child {
              fill:  ${colors.typography.navigationText};
            }
          }
          `}
        `;
      case 'red':
        return css`
          ${({ theme: { colors } }: { theme: Theme }) => `

          .recharts-reference-line line {
            stroke: ${colors.typography.navigationText};
          }
          circle {
            :first-child,
            :last-child {
              fill: ${colors.typography.navigationText};
            }
          }
          .recharts-layer path {
            :last-child {
              stroke: ${colors.typography.navigationText};
            }
            :first-child {
              fill: ${colors.typography.navigationText};
            }
          }
          `}
        `;
      case 'yellow':
      default:
        return css`
          ${({ theme: { colors } }: { theme: Theme }) => `

        .recharts-reference-line line {
          stroke: ${colors.decoration.highliter};
        }
        circle {
          :first-child,
          :last-child {
            fill: ${colors.decoration.highliter};
          }
        }
        .recharts-layer path {
          :last-child {
            stroke: ${colors.decoration.highliter};
          }
          :first-child {
            fill: ${colors.decoration.highliter};
          }
        }
        }
        `}
        `;
    }
  }}
`;

export default Wrapper;
