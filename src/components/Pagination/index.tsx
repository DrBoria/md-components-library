import React, { FC } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import styled from 'styled-components';

import Button from 'components/Button';

import { TTheme } from 'styles/baseTheme';
import { withBasicElementOffsets, TWithBasicElementOffsets, TFullWidth } from 'styles/helpers';

type TPaginationProps = {
  pagesCount: number;
  currentPage: number;
  onChangePage: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, page: number) => void;
} & TWithBasicElementOffsets &
  TFullWidth;

const Container = styled.div`
  ${({ theme: { elements, offsets } }: { theme: TTheme }) => `
    height: ${elements.form.height};

    display: flex;
    justify-content: center;
    align-items: center;

    grid-gap: ${offsets.batweenElements}; 

    ${withBasicElementOffsets};
    ${({ fullWidth }: TFullWidth) => fullWidth && 'width: 100%;'};
  `}
`;

const Number = styled(Button)`
  ${({ active, theme: { colors } }: { theme: TTheme; active: boolean }) => `
    border: none;
    background: ${colors.overlay};
    
    font-weight: 700;

    ${active ? `background: ${colors.overlayActive};` : ''}
  `}
`;

const Pagination: FC<TPaginationProps> = ({ pagesCount, currentPage, onChangePage }) => (
  <Container>
    <IoIosArrowBack />
    {[...Array(pagesCount).keys()].map((pageNumber) => (
      <Number
        onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
          onChangePage(event, pageNumber);
        }}
        active={currentPage === pageNumber}
      >
        {pageNumber}
      </Number>
    ))}
    <IoIosArrowForward />
  </Container>
);

export default Pagination;
