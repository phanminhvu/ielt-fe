import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import MHeaderTable from "models/HeaderTable.model";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import { Box, Button } from "@mui/material";
import useToggleDialog from "hooks/useToggleDialog";
import CommonStyles from "components/CommonStyles";

interface ITableCommon {
  count?: number;
  rowsPerPage?: number;
  page?: number;
  onChangePage?: (newPage: number) => void;
  onChangRowsPerPage?: (itemPerPage: number) => void;
  headerColumn: Array<MHeaderTable>;
  dataColumn: Array<any>;
  meta: any;
  customAction?: any;
  onEdit?: (row: any) => void;
  onDelete?: (row: any) => void;
  onSubmitRemove?: (row: any) => void;
}

interface TableCellActionsI {
  row: any;
  onSubmitRemove: (row: any) => void;
  onEdit: (row: any) => void;
}

const TableCellActions = ({ row, onSubmitRemove, onEdit }: TableCellActionsI) => {
  //! State
  const { open: openRemove, toggle: toggleRemove, shouldRender: shouldRenderRemove } = useToggleDialog();

  //! Render
  return (
    <TableCell align={"center"}>
      {/* Modal remove each row */}
      {shouldRenderRemove && (
        <CommonStyles.Modal
          open={openRemove}
          toggle={toggleRemove}
          header="Title"
          content={
            <React.Fragment>
              Are you sure you want to delete{" "}
              <span style={{ color: "red", fontStyle: "italic" }}>{row.passageTitle}</span>
            </React.Fragment>
          }
          footer={
            <React.Fragment>
              <Button variant="contained" color="error" onClick={() => onSubmitRemove(row)}>
                Yes
              </Button>
              <Button variant="outlined" color="error" onClick={toggleRemove}>
                No
              </Button>
            </React.Fragment>
          }
        />
      )}

      <BorderColorOutlinedIcon
        style={{ fontSize: 18, cursor: "grab", color: "#9155FF", marginRight: 10 }}
        onClick={() => onEdit(row)}
      />
      <DeleteForeverOutlinedIcon style={{ fontSize: 20, cursor: "grab", color: "#F44335" }} onClick={toggleRemove} />
    </TableCell>
  );
};

export default function TableCommon({
  count = 0,
  rowsPerPage = 10,
  page = 0,
  onChangePage = () => {},
  onChangRowsPerPage = () => {},
  headerColumn = [],
  dataColumn = [],
  meta = {},
  customAction,
  onEdit = () => {},
  onDelete = () => {},
  onSubmitRemove = () => {},
}: ITableCommon) {
  const [tableMeta, setTableMeta] = React.useState({
    page,
    rowsPerPage,
  });

  const handleChangePage = (event: unknown, newPage: number) => {
    onChangePage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTableMeta({ page: 0, rowsPerPage: +event.target.value });
    onChangRowsPerPage(+event.target.value);
  };

  const renderAction = (row: any, index: number) => {
    if (customAction) return customAction();
    return <TableCellActions key={index} row={row} onEdit={onEdit} onSubmitRemove={onSubmitRemove} />;
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <Box boxShadow={3}>
        <TableContainer sx={{ maxHeight: 440, boxShadow: "10px" }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {headerColumn.map((header) => (
                  <TableCell key={header.key} align={"center"} style={{ minWidth: 200, background: "#f2efef" }}>
                    {header.title}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {dataColumn.map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                    {headerColumn.map((header, index) => {
                      const key = header.key || "";
                      if (key === "action") return renderAction(row, index);
                      if (header.asHtml) {
                        return (
                          <TableCell key={`row?.[key]-${index}}`} align={"center"}>
                            <div dangerouslySetInnerHTML={{ __html: row?.[key] || "" }}></div>
                          </TableCell>
                        );
                      }
                      return (
                        <TableCell key={`row?.[key]-${index}}`} align={"center"}>
                          {row?.[key]}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={count}
          rowsPerPage={tableMeta.rowsPerPage}
          page={tableMeta.page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Box>
    </Paper>
  );
}
