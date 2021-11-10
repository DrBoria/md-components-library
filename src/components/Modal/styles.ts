import styled from 'styled-components';
import { FiX } from 'react-icons/fi';
import { Theme } from 'styles/baseTheme';

type TOverlayProps = {
  open: boolean;
};

export const Overlay = styled.div<TOverlayProps>`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  background: #00000080;

  display: ${({ open }) => (open ? 'block' : 'none')};
`;

export const ModalContent = styled.div`
  ${({ theme: { colors, offsets, screens, border, zIndex } }: { theme: Theme }) => `
    position: absolute;
    margin: 0 auto;
    top: 50%;
    left: 0;
    right: 0;
    transform: translateY(-50%);
    z-index: ${zIndex.alert};
  
    height: auto;
    width: calc(${screens.mobile.width} - ${offsets.section});
    padding: ${offsets.section};

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    background: ${colors.section};
    border-radius: ${border.radius};
    border: ${border.size} solid ${colors.sectionContent};

    :focus {
      outline: none;
    }
  `};
`;

export const CloseIcon = styled(FiX)`
  ${({ theme: { colors, elements } }: { theme: Theme }) => `
    cursor: pointer;
    
    color: ${colors.sectionContent};
    width: ${elements.icons.width};
    height: ${elements.icons.height};
  `};
`;
