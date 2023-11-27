import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import MPagination from "models/Pagination.model";
import { PAGE_SIZE } from "constants/constants";

interface ICommonDataGrid {
  columns: GridColDef[];
  loading?: boolean;
  pagination?: MPagination | null;
  rows: Array<any>;
  onPageChange?: (page: number) => void;
  onPageSizeChange?: (pageSize: number) => void;
  getRowId?: any;
  checkboxSelection?: boolean;
  hideFooterPagination?: boolean;
  hideFooter?: boolean;
}

export default function CommonDataGrid({
  columns,
  loading,
  pagination,
  rows,
  getRowId,
  onPageChange = () => null,
  onPageSizeChange = () => null,
  checkboxSelection,
  hideFooterPagination,
  hideFooter,
}: ICommonDataGrid) {
  const [pageSize, setPageSize] = React.useState<number>(PAGE_SIZE[0]);
  const [page, setPage] = React.useState(0);
  return (
    <DataGrid
      getRowId={getRowId}
      loading={loading}
      rows={rows}
      columns={columns}
      rowCount={pagination?.totalRow || 0}
      pageSize={pagination?.pageSize || 2}
      page={pagination?.page || 0}
      rowsPerPageOptions={PAGE_SIZE}
      checkboxSelection={false}
      disableSelectionOnClick
      keepNonExistentRowsSelected
      onPageChange={(newPage) => setPage(newPage)}
      onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
      pagination
      paginationMode="server"
      autoHeight
      hideFooterPagination={hideFooterPagination}
      hideFooter={hideFooter}
    />
  );
}
