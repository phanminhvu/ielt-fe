// import TableCommon from "./TableCommon";
import AddIcon from "@mui/icons-material/Add";
import { Card, Typography } from "@mui/material";
import ButtonUpload from "components/Button/ButtonUpload";
import CommonActionMenu from "components/CommonActionMenu";
import CommonDataGrid from "components/CommonDataGrid";
import useGetParts from "hooks/QuestionBank/Listening/useGetParts";
import { Link, useHistory } from "react-router-dom";
import listeningService from "services/listeningService";
import { RouteBase } from "constants/routeUrl";
import { makeStyles } from "@mui/styles";
import CommonStyles from "components/CommonStyles";
import LoadingCircular from "components/CommonStyles/LoadingCircular/LoadingCircular";
import moment from "moment";
import { toast } from "react-toastify";
import useInfoUser from "hooks/auth/useInfoUser";

const useStyle = makeStyles((theme) => {
  return {
    titleTable: {
      fontSize: 14,
      fontWeight: "bold",
    },
  };
});

const ListeningSkill = () => {
  //! State

  const {
    data: dataParts,
    loading,
    error,
    refetchDataTable,
    meta: metaPart,
    onPageChange,
    onPageSizeChange,
  } = useGetParts();

  const history = useHistory();
  const rows = dataParts?.map((el: any) => ({
    id: el?.id,
    partTitle: el?.partTitle,
    partNumber: el?.partNumber,
    studentCode: el?.studentCode,
    candidateCode: el?.candidateCode,
    updatedAt: moment(el?.updatedAt).format("DD-MM-YYYY HH:mm"),
    createdAt: moment(el?.createdAt).format("DD-MM-YYYY HH:mm"),
  }));
  const classes = useStyle();
  const onDeletePart = async (item: any) => {
    try {
      await listeningService.deletePart(item?.id);
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
        <Link to={RouteBase.CreateListening}>
          <CommonStyles.Button loading={loading} style={{ background: "#9155FE" }} onClick={() => {}}>
            <AddIcon />
            Create listening
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
                field: "partTitle",
                renderHeader: () => <Typography className={classes.titleTable}>Listening title</Typography>,
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
                disableColumnMenu: true,
                renderHeader: () => <Typography className={classes.titleTable}>Action</Typography>,
                renderCell: (items: any) => {
                  return (
                    <CommonActionMenu
                      onEdit={() => {
                        history.push({
                          pathname: RouteBase.UpdateListeningWId(items?.row?.partTitle),
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
              page: metaPart?.page ? metaPart?.page - 1 : 0,
              pageSize: metaPart?.pageSize,
              totalRow: metaPart?.total,
            }}
            loading={loading}
            rows={rows}
            onPageChange={onPageChange}
            onPageSizeChange={onPageSizeChange}
          />
        </Card>
      )}
    </div>
  );
};
export default ListeningSkill;
