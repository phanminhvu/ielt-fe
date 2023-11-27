import * as React from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 200 },
  { field: "Name", headerName: "First name", width: 200 },
  { field: "StudentCode", headerName: "Student Code", width: 200 },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) => `${params.row.Name || ""} ${params.row.StudentCode || ""}`,
  },
  {
    field: "score",
    headerName: "Score",
    type: "number",
    width: 200,
  },
];

const rows = [
  { id: 1, StudentCode: 202020, Name: "Jon", score: 35 },
  { id: 2, StudentCode: 202020, Name: "Cersei", score: 42 },
  { id: 3, StudentCode: 202020, Name: "Jaime", score: 45 },
  { id: 4, StudentCode: 202020, Name: "Arya", score: 16 },
  { id: 5, StudentCode: 202020, Name: "Daenerys", score: null },
  { id: 6, StudentCode: 202020, Name: null, score: 150 },
  { id: 7, StudentCode: 202020, Name: "Ferrara", score: 44 },
  { id: 8, StudentCode: 202020, Name: "Rossini", score: 36 },
  { id: 9, StudentCode: 202020, Name: "Harvey", score: 65 },
];

export default function DataTable() {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid rows={rows} columns={columns} pageSize={5} rowsPerPageOptions={[5]} />
    </div>
  );
}
