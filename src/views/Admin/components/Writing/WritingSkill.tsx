import AddIcon from "@mui/icons-material/Add";
import { Card, Typography } from "@mui/material";
import ButtonUpload from "components/Button/ButtonUpload";
import CommonActionMenu from "components/CommonActionMenu";
import CommonDataGrid from "components/CommonDataGrid";
import { RouteBase } from "constants/routeUrl";
import useGetQuestion from "hooks/QuestionBank/Writing/useGetQuestion";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import writingServices from "services/writingServices";
// import CreateQuestionWriting from "./CreateQuestionWriting";

const WritingSkill = () => {
  const history = useHistory();
  const [dataQuestion, loading, error, refetchDataTable, metaPart, onPageChange, onPageSizeChange] = useGetQuestion();

  const onDeletePart = async (item: any) => {
    try {
      await writingServices.deleteQuestion(item?.id);
      toast.success("Delete part success!");
      refetchDataTable();
    } catch (error) {
      console.log("error");
    }
  };

  return (
    <div>
      <div style={{ textAlign: "end", marginBottom: 10 }}>
        <Link to={RouteBase.CreateWriting}>
          <ButtonUpload titleButton="Create writing" icon={<AddIcon />} style={{ background: "#9155FE" }} />
        </Link>
      </div>

      <Card>
        <CommonDataGrid
          columns={[
            {
              flex: 1,
              field: "title",
              renderHeader: () => <Typography style={styles.titleTable}>Writing title</Typography>,
            },
            {
              flex: 0.5,
              field: "questionPartNumber",
              renderHeader: () => <Typography style={styles.titleTable}>Part</Typography>,
            },
            {
              flex: 1,
              field: "createdAt",
              renderHeader: () => <Typography style={styles.titleTable}>Create at</Typography>,
            },
            {
              flex: 1,
              field: "updatedAt",
              renderHeader: () => <Typography style={styles.titleTable}>Update at</Typography>,
            },
            {
              flex: 0.3,
              field: "action",
              renderHeader: () => <Typography style={styles.titleTable}>Action</Typography>,
              renderCell: (items: any) => {
                return (
                  <CommonActionMenu
                    onEdit={() => {
                      history.push({
                        pathname: RouteBase.UpdateWritingWId(items?.row?.title),
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
          checkboxSelection
          pagination={{
            page: metaPart?.page,
            pageSize: metaPart?.pageSize,
            totalRow: metaPart?.totalRow,
          }}
          loading={loading}
          rows={dataQuestion}
          onPageChange={onPageChange}
          onPageSizeChange={onPageSizeChange}
        />
      </Card>
    </div>
  );
};

export default WritingSkill;

const styles = {
  titleTable: {
    fontSize: 14,
    fontWeight: "bold",
  },
};
