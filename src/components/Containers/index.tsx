import styled from 'styled-components';

import { TTheme } from 'styles/baseTheme';
import { TWithBasicElementOffsets, withBasicElementOffsets, TFullWidth, withFullWidth } from 'styles/helpers';

type TContainersProps = {
  className?: string;
  style?: any;
};

type TSectionProps = {
  noHeightLimit?: boolean;
} & TContainersProps & { theme: TTheme };

/**
 * @visibleName Containers
 */

// Use this conteiner for wrapping any section on page
// No usage restrictions
export const BasicSection = styled.div<TSectionProps>`
  ${({ noHeightLimit, theme: { screens, elements, colors, offsets } }: TSectionProps) => `
    padding: ${offsets.section};

    background-color: ${colors.section};

    max-height: calc(${screens.desktop.height} - ${elements.header.height});
    height: calc(${screens.mobile.height}px - ${elements.header.height});

    @media (min-width: ${screens.tablet.width}px) {
      height: calc(${screens.tablet.height} - ${elements.header.height});
    }
    @media (min-width: ${screens.desktop.width}px) {
      height: calc(${screens.desktop.height} - ${elements.header.height});
      padding: ${offsets.section} ${offsets.container};
    }

    ${
      noHeightLimit
        ? `
          height: auto;
          min-height: calc(${screens.tablet.height} - ${elements.header.height});
          max-height: unset;
        `
        : ''
    }
  `}
`;

// Use this container for wrapping all page content
// Should be used only once per page
export const PageContainer = styled.div`
  ${({ theme: { elements, offsets } }: { theme: TTheme }) =>
    `
      padding: ${offsets.container};
      padding-top: ${elements.header.height};
      min-height: 100vh;
    `}
`;

export const HeadingContainer = styled.div<TWithBasicElementOffsets & TFullWidth>`
  width: 40%;
  text-align: left;

  ${withFullWidth}
  ${withBasicElementOffsets}
`;
