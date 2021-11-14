import { FiX, FiSearch } from 'react-icons/fi';
import styled, { css } from 'styled-components';

import Button from 'components/Button';

import { TTheme } from 'styles/baseTheme';
import { withBasicElementOffsets, TFullWidth } from 'styles/helpers';

export const ButtonWrapper = styled(Button)`
  border: none;
`;

export const SearchIcon = styled(FiSearch)`
  visibility: visible;
  opacity: 1;

  transition: visibility 0s, opacity 0.2s linear;
`;

export const CrossIcon = styled(FiX)`
  display: none;
`;

export const Container = styled.div<any>`
  ${({ isOpen, theme: { colors, border, elements, offsets } }: { theme: TTheme; isOpen: boolean }) => css`
    position: relative;

    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    width: ${elements.form.height};
    height: ${elements.form.height};
    padding: ${offsets.elementContent};
    display: flex;

    background-color: ${colors.overlay};
    border-radius: ${border.radius};

    transition: all 0.5s ease;

    ${isOpen &&
    css`
      width: 100%;

      ${CrossIcon} {
        display: block;
      }
      ${SearchIcon} {
        visibility: hidden;
        opacity: 0;
        display: none;
      }
    `}
  `}

  ${withBasicElementOffsets}

  ${({ fullWidth }: TFullWidth) => fullWidth && 'width: 100%;'}
`;
