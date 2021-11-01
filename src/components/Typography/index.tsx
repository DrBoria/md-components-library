import styled, { css } from 'styled-components';
import { Theme } from 'styles/baseTheme';
import { TWithBasicElementOffsets, withBasicElementOffsets } from 'styles/helpers';

export const basicFont = css`
  ${({ theme: { font } }: { theme: Theme }) => `
    font-family: ${font.family.text};
    font-size: ${font.size};
  `}

  font-style: normal;
  font-weight: 500;

  margin: 0;
`;

/**
 * @visibleName Typography
 */

export const PageTitle = styled.h1<TWithBasicElementOffsets>`
  ${basicFont}
  ${withBasicElementOffsets}

  font-weight: 700;
  text-transform: capitalize;

  ${({ theme: { colors, font } }: { theme: Theme }) => `
    color: ${colors.sectionContent};
    font-family: ${font.family.title};
  `}
`;

export const SubTitle = styled.h2<TWithBasicElementOffsets>`
  ${basicFont}
  ${withBasicElementOffsets}
  
  font-size: 1.3125rem;
  line-height: 1.8125rem;

  ${({ theme: { colors, font } }: { theme: Theme }) => `
    color:  ${colors.sectionContent};
    font-family: ${font.family.title};
  `}
`;

export const SectionTitle = styled.h3<TWithBasicElementOffsets>`
  ${basicFont}
  ${withBasicElementOffsets}

  font-weight: 700;
  text-transform: capitalize;

  ${({ theme: { colors, font } }: { theme: Theme }) => `
    color: ${colors.sectionContent};
    font-family: ${font.family.title};
  `}
`;

export const PlainText = styled.p<TWithBasicElementOffsets>`
  ${basicFont}
  ${withBasicElementOffsets}
  
  font-size: 1.1875rem;
  line-height: 1.6875rem;

  ${({ theme: { colors } }: { theme: Theme }) => `
    color: ${colors.sectionContent}
  `}
`;

export const Highlighted = styled.span<TWithBasicElementOffsets>`
  ${({ theme: { colors } }: { theme: Theme }) => `
    color: ${colors.highlighted}
  `}
`;

export const Label = styled.span<TWithBasicElementOffsets>`
  display: inline-block;

  ${({ theme: { colors, border, offsets } }: { theme: Theme }) => `
    background-color: ${colors.label};
    color:  ${colors.sectionContent};
    border-radius: ${border.radius};
    
    padding: calc(${offsets.elementContent} / 2);
  `}
`;
