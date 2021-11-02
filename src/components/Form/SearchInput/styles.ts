import styled, { css } from 'styled-components';
import { FiX, FiSearch } from 'react-icons/fi';
import SearchToInput from 'components/Inputs/SearchToInput';

// TODO: TFR-44 move to icons group
export const SearchIcon = styled(FiSearch)`
  visibility: visible;
  opacity: 1;
  transition: visibility 0s, opacity 0.2s linear;
`;

// TODO: TFR-44 move to icons group
export const CrossIcon = styled(FiX)`
  display: none;
`;

// TODO: TFR-44 move to container group or do not export
export const Container = styled.div<{ $isOpen: boolean }>`
  background-color: ${({ theme }) => theme.colors.navyGreen};
  position: relative;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 1rem;
  transition: all 0.5s ease;
  display: flex;
  justify-content: center;
  ${({ $isOpen }) =>
    $isOpen &&
    css`
      width: 26.25rem;
      ${SearchToInput} {
        padding: 0.875rem 3.5rem 0.875rem 1rem;
        width: 100%;
      }
      ${CrossIcon} {
        display: block;
      }
      ${SearchIcon} {
        visibility: hidden;
        opacity: 0;
      }
    `}
`;
