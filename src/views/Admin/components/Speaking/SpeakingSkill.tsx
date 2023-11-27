import AddIcon from "@mui/icons-material/Add";
import { Card, Typography } from "@mui/material";
import ButtonUpload from "components/Button/ButtonUpload";
import CommonActionMenu from "components/CommonActionMenu";
import CommonDataGrid from "components/CommonDataGrid";
import { RouteBase } from "constants/routeUrl";
import useGetParts from "hooks/QuestionBank/Speaking/useGetParts";

import { Link, useHistory } from "react-router-dom";
import readingService from "services/ReadingService";

const styles = {
  titleTable: {
    fontSize: 14,
    fontWeight: "bold",
  },
};
const SpeakingSkill = () => {
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

  const onDeletePart = async (item: any) => {
    try {
      await readingService.deletePart(item?.id);
      refetchDataTable();
    } catch (error) {
      console.log("error");
    }
  };

  return (
    <div>
      <div style={{ textAlign: "end", marginBottom: 10 }}>
        <Link to={RouteBase.CreateSpeaking}>
          <ButtonUpload
            titleButton="Create speaking"
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
              flex: 0.5,
              field: "partNumber",
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
              filterable: false,
              hideSortIcons: true,
              disableColumnMenu: true,
              renderHeader: () => <Typography style={styles.titleTable}>Action</Typography>,
              renderCell: (items: any) => {
                return (
                  <CommonActionMenu
                    onEdit={() => {
                      history.push({
                        pathname: RouteBase.UpdateSpeakingWId(items?.row?.partNumber),
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
            totalRow: metaPart?.total,
          }}
          loading={loading}
          rows={dataParts}
          onPageChange={onPageChange}
          onPageSizeChange={onPageSizeChange}
        />
      </Card>
    </div>
  );
};

export default SpeakingSkill;
