// import TableCommon from "./TableCommon";
import { Card, Typography } from "@mui/material";
import ButtonUpload from "components/Button/ButtonUpload";
import CommonActionMenu from "components/CommonActionMenu";
import CommonDataGrid from "components/CommonDataGrid";
import { RouteBase } from "constants/routeUrl";
import useGetListStudents from "hooks/UserManagement/students/useGetListStudents";
// import ListStudentId from "models/Exam/ListUserContest";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import studentService from "services/studentService";
import AddIcon from "@mui/icons-material/Add";

const styles = {
  titleTable: {
    fontSize: 14,
    fontWeight: "bold",
  },
};

const ListStudentId = ({ studentIds, studentDetails }: any) => {
  //! State
  // const {
  //   data: dataFileExcel,
  //   loading,
  //   error,
  //   refetchDataTable,
  //   meta: metaPart,
  //   onPageChange,
  //   onPageSizeChange,
  // } = useGetListStudents();

  const history = useHistory();

  const onDeletePart = async (item: any) => {
    try {
      await studentService.deletePart(item?.row?._id);
      //   await refetchDataTable();
      await toast.success("Delete success!");
    } catch (error) {
      toast.error("Error!");
    }
  };

  //! Render
  return (
    <div>
      <div style={{ textAlign: "end", marginBottom: 10 }}>
        <Link to={RouteBase.CreateUserTesting}>
          <ButtonUpload
            titleButton="Create User Testing"
            icon={<AddIcon />}
            onClick={() => {}}
            style={{ background: "#9155FE" }}
          />
        </Link>
      </div>

      <Card>
        <CommonDataGrid
          columns={[
            {
              flex: 1,
              field: "studentCode",
              renderHeader: () => <Typography style={styles.titleTable}>Student Code</Typography>,
            },

            {
              flex: 1,
              field: "fullname",
              renderHeader: () => <Typography style={styles.titleTable}>Fullname</Typography>,
            },
            {
              flex: 0.3,
              field: "orderNumber",
              renderHeader: () => <Typography style={styles.titleTable}>Order Number</Typography>,
            },
            {
              flex: 0.3,
              field: "action",
              filterable: false,
              hideSortIcons: true,
              disableColumnMenu: true,
              renderHeader: () => <Typography style={styles.titleTable}>Action</Typography>,
              renderCell: (items: any) => {
                console.log("itemssa", items);

                return (
                  <CommonActionMenu
                    onEdit={() => {
                      history.push({
                        pathname: RouteBase.UpdateCreateUserTestingWId(items?.row?.studentCode),
                        search: `?id=${items?.id}`,
                      });
                    }}
                    onSubmitRemove={onDeletePart}
                    row={items}
                  />
                );
              },
            },
          ]}
          rows={studentDetails.map((e: any) => ({
            id: e._id,
            orderNumber: e.orderNumber,
            studentCode: e.studentCode,
            fullname: e.fullname,
          }))}
          // onPageChange={onPageChange}
          // onPageSizeChange={onPageSizeChange}
          getRowId={(row: any) => row.id}
          hideFooter={true}
        />
      </Card>
    </div>
  );
};

export default ListStudentId;
