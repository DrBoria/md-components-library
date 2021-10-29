import styled from 'styled-components';
import { Backdrop as DefaultBackdrop } from '@material-ui/core';
import { FiX } from 'react-icons/fi';
import { Theme } from 'styles/baseTheme';

// TODO: TFR-46 remove imports in styled.ts if you do not add styles to component
export const Backdrop = styled(DefaultBackdrop)``;

// TODO: TFR-49 look similar to other content in modals. Could be easier to make helper for modals
export const ModalContent = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 26.75rem;
  height: auto;
  left: calc(50% - 26.75rem / 2);
  top: calc(50% - 14.625rem / 2);
  background: ${({ theme: { colors } }: { theme: Theme }) => colors.background.section};
  box-shadow: 0rem 0.5rem 1rem rgba(53, 53, 53, 0.1), 0rem 0.5rem 2rem rgba(53, 53, 53, 0.1);
  border-radius: 1.5rem;
  padding: 2.5rem 2rem;

  :focus {
    outline: none;
  }
`;

// TODO: TFR-45:Button make unique name or do not export
export const Button = styled.button`
  color: ${({ theme: { colors } }: { theme: Theme }) => colors.typography.title};
  width: 1.5rem;
  height: 1.5rem;
  margin: 0;
  border: 0;
  padding: 0;
  background-color: transparent;
  cursor: pointer;
  outline: none;
`;

// TODO: TFR-44 move to icons group
export const CloseIcon = styled(FiX)`
  color: ${({ theme: { colors } }: { theme: Theme }) => colors.typography.title};
  width: 1.5rem;
  height: 1.5rem;
`;
