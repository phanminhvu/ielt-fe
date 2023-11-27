// import TableCommon from "./TableCommon";
import { Card, Tooltip, Typography } from "@mui/material";
import CommonDataGrid from "components/CommonDataGrid";
import useGetListStudents from "hooks/UserManagement/students/useGetListStudents";
// import ListUserContest from "models/Exam/ListUserContest";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import studentService from "services/studentService";
import moment from "moment";
import { GridValueGetterParams } from "@mui/x-data-grid";
import { getRowGrid } from "helpers";

const styles = {
  titleTable: {
    fontSize: 14,
    fontWeight: "bold",
  },
};

const ListUserContest = ({ dataFileExcel }: any) => {
  console.log("dataFileExcel", moment(dataFileExcel[0]?.dob).format("DD/MM/YYYY"));

  //! State
  const { data, loading, error, refetchDataTable, meta, onPageChange, onPageSizeChange } = useGetListStudents();

  const history = useHistory();

  // const onDeletePart = async (item: any) => {
  //   try {
  //     await studentService.deletePart(item?.row?._id);
  //     //   await refetchDataTable();
  //     await toast.success("Delete success!");
  //   } catch (error) {
  //     toast.error("Error!");
  //   }
  // };
  const rows = {};
  //! Render
  return (
    <div>
      <Card>
        <CommonDataGrid
          columns={[
            {
              flex: 0.8,
              field: "studentCode",
              renderHeader: () => <Typography style={styles.titleTable}>Student Code</Typography>,
            },
            {
              flex: 0.5,
              field: "gender",
              renderHeader: () => <Typography style={styles.titleTable}>Gender</Typography>,
            },
            {
              flex: 1,
              field: "fullname",
              renderHeader: () => <Typography style={styles.titleTable}>Fullname</Typography>,
            },
            {
              flex: 0.8,
              field: "birthday",
              renderHeader: () => <Typography style={styles.titleTable}>Date of birth</Typography>,
              valueGetter: (params: GridValueGetterParams) => {
                const { dob } = getRowGrid(params);
                if (!dob) {
                  return "-";
                }
                return moment(dob).format("DD/MM/YYYY");
              },
            },
           
            {
              flex: 1,
              field: "majors",
              renderHeader: () => <Typography style={styles.titleTable}>Speciality</Typography>,
            },
            {
              flex: 1,
              field: "classroom",
              renderHeader: () => <Typography style={styles.titleTable}>Class</Typography>,
            },
              {
                  flex: 1,
                  field: "examroom",
                  renderHeader: () => <Typography style={styles.titleTable}>Exam Room</Typography>,
              },
          ]}
          checkboxSelection
          rows={dataFileExcel}
          onPageChange={onPageChange}
          onPageSizeChange={onPageSizeChange}
          hideFooter={true}
          getRowId={(row: any) => row._id}
        />
      </Card>
    </div>
  );
};

export default ListUserContest;
