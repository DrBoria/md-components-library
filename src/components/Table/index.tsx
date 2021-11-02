import React, { FC } from 'react';

import Loader from 'components/Loaders/TableLoader';
import { SubTitle } from 'components/Typography';

import { PageNavigationData } from './types';
import { StyledTablePagination, Grid } from './styles';
import { StyledHeaderCell } from './TableCels/styles';

type ITableContainerProps = {
  pagination?: {
    pageNavigationData: PageNavigationData;
    changePage: (newPage: number) => void;
    changeElementsPerPage: (elementsPerPage: number) => void;
  };
  isLoading?: boolean;
  headerCols?: {
    text: string;
    align?: string;
    sort?: () => any;
    isSortable?: boolean;
  }[];
  colsTemplate: string;
  children: any;
};

const TableContainer: FC<ITableContainerProps> = ({ children, headerCols, colsTemplate, isLoading, pagination }) => {
  // const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  //   pagination?.changeElementsPerPage(parseInt(event.target.value, 10));
  // };
  // const handleChangePage = (event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null, newPage: number) => {
  //   pagination?.changePage(newPage);
  // };

  return (
    <div>
      {isLoading ? (
        <>
          <Loader opacity={1} />
          <Loader opacity={0.8} />
          <Loader opacity={0.7} />
          <Loader opacity={0.5} />
          <Loader opacity={0.3} />
          <Loader opacity={0.1} />
        </>
      ) : (
        <>
          <Grid colsTemplate={colsTemplate}>
            {/* DISPLAY TABLE HEAD */}
            {headerCols?.map(({ text, sort = () => {}, isSortable, align }) => (
              <StyledHeaderCell key={text} onClick={sort} align={align}>
                <SubTitle>{text}</SubTitle>
                {isSortable && '⟠'}
              </StyledHeaderCell>
            ))}

            {/* DISPLAY TABLE CONTENT */}
            {children}
          </Grid>

          {pagination && (
            <StyledTablePagination />
            // rowsPerPageOptions={[10, 20, 50]}
            // count={pagination.pageNavigationData.totalElements}
            // rowsPerPage={pagination.pageNavigationData.elementsPerPage}
            // page={pagination.pageNavigationData.currentPage}
            // onChangePage={handleChangePage}
            // onChangeRowsPerPage={handleChangeRowsPerPage}
          )}
        </>
      )}
    </div>
  );
};

export default TableContainer;
