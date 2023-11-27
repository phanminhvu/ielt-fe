import { Button, Card, Typography } from "@mui/material";
import ButtonCommon from "components/Button/ButtonCommon";
import CommonDataGrid from "components/CommonDataGrid";
import useExamManagement from "hooks/examManagement/useExamManagement";
import { useState } from "react";
import CommonActionMenu from "components/CommonActionMenu";
import { Link } from "react-router-dom";
import ButtonUpload from "components/Button/ButtonUpload";
import AddIcon from "@mui/icons-material/Add";
import { RouteBase } from "constants/routeUrl";

const styles = {
  titleTable: {
    fontSize: 14,
    fontWeight: "bold",
  },
  buttonOpenModal: {
    borderRadius: 20,
    background: "#7C89CC",
  },
};

const DataFake = [
  {
    id: 1,
    content: "ielts test 1",
    code: "22072022",
  },
  {
    id: 2,
    content: "ielts test 2",
    code: "2202022",
  },
];
const StaticManagement = () => {
  // const [dataExam, loading, error, refetchDataTable, metaPart, onPageChange, onPageSizeChange] = useExamManagement();

  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      <div style={{ textAlign: "end", marginBottom: 10 }}>
        <Link to={RouteBase.CreateContestManagement}>
          <ButtonUpload
            titleButton="Create static"
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
              field: "content",
              renderHeader: () => <Typography style={styles.titleTable}>Content</Typography>,
            },
            {
              flex: 1,
              field: "code",
              renderHeader: () => <Typography style={styles.titleTable}>Code</Typography>,
            },
            {
              flex: 0.3,
              field: "action",
              filterable: false,
              hideSortIcons: true,
              disableColumnMenu: true,
              renderHeader: () => <Typography style={styles.titleTable}>Action</Typography>,
              renderCell: (items: any) => {
                return <CommonActionMenu onEdit={() => {}} onSubmitRemove={() => {}} row={items} />;
              },
            },
          ]}
          // pagination={{
          //   page: metaPart?.page,
          //   pageSize: metaPart?.pageSize,
          //   totalRow: metaPart?.totalRow,
          // }}
          // loading={loading}
          checkboxSelection
          rows={DataFake}
          // onPageChange={onPageChange}
          // onPageSizeChange={onPageSizeChange}
        />
      </Card>
    </div>
  );
};

export default StaticManagement;
