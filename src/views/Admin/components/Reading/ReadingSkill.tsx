// import TableCommon from "./TableCommon";
import AddIcon from "@mui/icons-material/Add";
import { Card, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ButtonUpload from "components/Button/ButtonUpload";
import CommonActionMenu from "components/CommonActionMenu";
import CommonDataGrid from "components/CommonDataGrid";
import CommonStyles from "components/CommonStyles";
import LoadingCircular from "components/CommonStyles/LoadingCircular/LoadingCircular";
import LoadingPage from "components/Loading";
import { RouteBase } from "constants/routeUrl";
import useGetPartReading from "hooks/QuestionBank/Reading/useGetPartReading";
import { isEmpty } from "lodash";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import ReadingService from "services/ReadingService";

const useStyle = makeStyles((theme) => {
  return {
    titleTable: {
      fontSize: 14,
      fontWeight: "bold",
    },
  };
});
const ReadingSkill = () => {
  //!State

  const [dataParts, loading, error, refetchDataTable, metaPart, onPageChange, onPageSizeChange] = useGetPartReading();
  const history = useHistory();
  const classes = useStyle();
  const onDeletePart = async (item: any) => {
    try {
      await ReadingService.deletePart(item?.id);
      toast.success("Delete part success!");
      refetchDataTable();
    } catch (error) {
      toast.error("error");
    }
  };
  //! Function

  //! Render
  return (
    <div>
      <div style={{ textAlign: "end", marginBottom: 10 }}>
        <Link to={RouteBase.CreateReading}>
          <CommonStyles.Button loading={loading} style={{ background: "#9155FE" }} onClick={() => {}}>
            <AddIcon />
            Create reading
          </CommonStyles.Button>
        </Link>
      </div>

      {loading ? (
        <LoadingCircular />
      ) : (
        <Card>
          <CommonDataGrid
            columns={[
              {
                flex: 1,
                field: "passageTitle",
                renderHeader: () => <Typography className={classes.titleTable}>Reading title</Typography>,
              },
              {
                flex: 1,
                field: "partNumber",
                renderHeader: () => <Typography className={classes.titleTable}>Part</Typography>,
              },
              {
                flex: 1,
                field: "createdAt",
                renderHeader: () => <Typography className={classes.titleTable}>Create at</Typography>,
              },
              {
                flex: 1,
                field: "updatedAt",
                renderHeader: () => <Typography className={classes.titleTable}>Update at</Typography>,
              },
              {
                flex: 0.3,
                field: "action",
                filterable: false,
                hideSortIcons: true,
                // disableColumnMenu: true,
                renderHeader: () => <Typography className={classes.titleTable}>Action</Typography>,
                renderCell: (items: any) => {
                  return (
                    <CommonActionMenu
                      onEdit={() => {
                        history.push({
                          pathname: RouteBase.UpdateReadingWId(items?.row?.passageTitle),
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
            rows={dataParts}
            onPageChange={onPageChange}
            onPageSizeChange={onPageSizeChange}
          />
        </Card>
      )}
    </div>
  );
};

export default ReadingSkill;
