import React from "react";
import { Pagination as PaginationMui, PaginationProps } from "@mui/material";

interface Props extends PaginationProps {
  onChangePage: (e: React.ChangeEvent<unknown>, value: number) => void;
  totalPage: number;
}

const Pagination = (props: Props) => {
  const { page, onChangePage, totalPage } = props;
  return (
    <div>
      <PaginationMui count={totalPage} page={page} onChange={onChangePage} variant="outlined" shape="rounded" />
    </div>
  );
};

export default Pagination;
