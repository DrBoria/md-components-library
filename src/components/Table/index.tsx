import React, { FC } from 'react';

import { SubTitle } from 'components/Typography';
import Pagination from 'components/Pagination';
import { Select, TOption } from 'components/Form';

import { Grid, PaginationContainer } from './styles';
import { StyledHeaderCell } from './TableCels/styles';

type ITableContainerProps = {
  pagination?: {
    current: number;
    totalPages: number;
    changePage: (newPage: number) => void;
  };
  rowsPerPage?: {
    options: TOption[];
    current: number;
    changeElementsPerPage: (elementsPerPage: number) => void;
  };
  headerCols?: {
    text: string;
    align?: string;
    sort?: () => any;
    isSortable?: boolean;
  }[];
  colsTemplate: string;
};

const TableContainer: FC<ITableContainerProps> = ({ children, headerCols, colsTemplate, pagination, rowsPerPage }) => {
  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    rowsPerPage?.changeElementsPerPage(parseInt(event.target.value, 10));
  };
  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, newPage: number) => {
    pagination?.changePage(newPage);
  };

  return (
    <div>
      <Grid colsTemplate={colsTemplate}>
        {/* Table Head */}
        {headerCols?.map(({ text, sort = () => {}, isSortable, align }) => (
          <StyledHeaderCell key={text} onClick={sort} align={align}>
            <SubTitle>{text}</SubTitle>
            {isSortable && '⟠'}
          </StyledHeaderCell>
        ))}

        {/* Table Content (table cells will be here) */}
        {children}
      </Grid>

      <PaginationContainer>
        {/* Pagination with arrows */}
        {pagination && (
          <Pagination
            pagesCount={pagination.totalPages}
            currentPage={pagination.current}
            onChangePage={handleChangePage}
          />
        )}

        {/* Dropdawn for selction rows per page */}
        {rowsPerPage && (
          <Select
            name="rowsPerPage"
            id="rowsPerPage"
            value={rowsPerPage.options[0]}
            options={rowsPerPage.options}
            onChange={handleChangeRowsPerPage}
          />
        )}
      </PaginationContainer>
    </div>
  );
};

export default TableContainer;
