import { ResponsiveContainer } from 'recharts';
import styled, { css } from 'styled-components';

import { basicFont } from 'components/Typography';

import { TComponentProps } from './types';

const Wrapper = styled(ResponsiveContainer)<TComponentProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: ${({ theme }) => theme.border.radius};
  background-color: ${({ theme: { colors } }) => colors.section};

  .recharts-surface {
    padding: ${({ theme }) => theme.offsets.batweenElements};
  }

  .recharts-cartesian-axis-line {
    stroke: ${({ theme: { colors } }) => colors.sectionContent};
  }

  .recharts-text {
    color: ${({ theme: { colors } }) => colors.sectionContent};
    font: ${basicFont};
  }

  .recharts-cartesian-axis-tick-line {
    display: none;
  }

  .recharts-reference-line {
    stroke-dasharray: 10 10;
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

      stroke: ${({ theme: { colors } }) => colors.section};
    }
  }

  .recharts-layer path {
    stroke-width: 0.25rem;
  }

  ${({ variant }) => {
    switch (variant) {
      case 'green':
        return css`
          ${({ theme: { colors } }) => `
          .recharts-reference-line line {
            stroke: ${colors.sectionContent};
          }
          circle {
            :first-child,
            :last-child {
              fill:  ${colors.sectionContent};
            }
          }
          .recharts-layer path {
            :last-child {
              stroke:  ${colors.sectionContent};
            }
            :first-child {
              fill:  ${colors.sectionContent};
            }
          }
          `}
        `;
      case 'red':
        return css`
          ${({ theme: { colors } }) => `

          .recharts-reference-line line {
            stroke: ${colors.sectionContent};
          }
          circle {
            :first-child,
            :last-child {
              fill: ${colors.sectionContent};
            }
          }
          .recharts-layer path {
            :last-child {
              stroke: ${colors.sectionContent};
            }
            :first-child {
              fill: ${colors.sectionContent};
            }
          }
          `}
        `;
      case 'yellow':
      default:
        return css`
          ${({ theme: { colors } }) => `

        .recharts-reference-line line {
          stroke: ${colors.highlighted};
        }
        circle {
          :first-child,
          :last-child {
            fill: ${colors.highlighted};
          }
        }
        .recharts-layer path {
          :last-child {
            stroke: ${colors.highlighted};
          }
          :first-child {
            fill: ${colors.highlighted};
          }
        }
        }
        `}
        `;
    }
  }}
`;

export default Wrapper;
