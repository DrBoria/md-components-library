import styled from 'styled-components';
import { FiX, FiSearch } from 'react-icons/fi';

import Button from 'components/Button';
import { Theme } from 'styles/baseTheme';
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
  ${({ isOpen, theme: { colors, border, elements, offsets } }: { theme: Theme; isOpen: boolean }) => `
  position: relative;

  box-sizing: border-box;
  width: ${elements.form.height};
  height: ${elements.form.height};
  padding: ${offsets.elementContent};

  background-color: ${colors.overlay};
  border-radius: ${border.radius};
  transition: all 0.5s ease;

  display: flex;
  justify-content: center;
  align-items: center;

  ${
    isOpen &&
    `
      width: 100%;

      ${CrossIcon} {
        display: block;
      }
      ${SearchIcon} {
        visibility: hidden;
        opacity: 0;
        display: none;
      }
    `
  }
  `}

  ${withBasicElementOffsets}

  ${({ fullWidth }: TFullWidth) => fullWidth && 'width: 100%;'}
`;
