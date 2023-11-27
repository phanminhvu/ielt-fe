import AddIcon from "@mui/icons-material/Add";
import { Button, Card, Typography } from "@mui/material";
import ButtonUpload from "components/Button/ButtonUpload";
import CommonActionMenu from "components/CommonActionMenu";
import CommonDataGrid from "components/CommonDataGrid";
import CommonStyles from "components/CommonStyles";
import { RouteBase } from "constants/routeUrl";
import useContestManagemet from "hooks/ContestManagemet/useContestManagemet";
import moment from "moment";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { default as contestService } from "services/contestService";
import * as XLSX from "xlsx";
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

const ContestManagement = () => {
  //! State
  const [dataContest, loading, error, refetchDataTable, metaPart, onPageChange, onPageSizeChange, refresh] =
    useContestManagemet();

  const [canStartStatus, setCanStartStatus] = useState<boolean>(false);
  const canStartList = dataContest.reduce((returnObjCanStart: any, currentValueCanStart: any) => {
    returnObjCanStart[currentValueCanStart.id] = currentValueCanStart.canStart;
    return returnObjCanStart;
  }, {});

  const [startActiveStatus, setStartActiveStatus] = useState<boolean>(false);
  const activeList = dataContest.reduce((returnObjStartActive: any, currentValueStartActive: any) => {
    returnObjStartActive[currentValueStartActive.id] = currentValueStartActive.active;
    return returnObjStartActive;
  }, {});

  // const [dataItemId, setDataItemId] = useState<null | number>(null);
  // const [dataItemIds, setDataItemIds] = useState<null | number>(null);
  // console.log("dataItemIds", dataItemIds);

  // const refetchDataCanStart = async () => {
  //   dataContest?.canStart;
  // };
  const history = useHistory();
  const onDeletePart = async (item: any) => {
    try {
      const response = await contestService.deleteExamination(item?.id);
      if (response.data.statusCode === 200) {
        toast.success("Exam has been delete!");
        refetchDataTable();
      }
    } catch (error: any) {
      toast.error(error);
    }
  };
  const onChangeStatus = async (item: any) => {
    setCanStartStatus(!canStartStatus);
    canStartList[item?.id] = !canStartList[item?.id];
    const body = {
      canStart: canStartList[item?.id],
    };
    try {
      const response = await contestService.putUpdateExamination(item?.id, body);

      if (response.data.statusCode === 200) {
        toast.success("Status has been changed!");
        // setDataItemId(item?.id);
        refresh();
      }
    } catch (error: any) {
      toast.error(error);
    }
  };

  const exportExcel = async (item: any) => {
    const result = await contestService.getDataExportExcel(item.id);
    console.log("result", result?.data?.data)
    // debugger;
    const ws = XLSX.utils.json_to_sheet(result?.data?.data, {
      skipHeader: true,
    });

    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Ket_qua");
    XLSX.writeFile(wb, `Ket_qua_${moment().valueOf()}.xlsx`);
  };

  const onChangeStatusActive = async (item: any) => {
    setStartActiveStatus(!startActiveStatus);

    activeList[item?.id] = !activeList[item?.id];
    const body = {
      active: activeList[item?.id],
    };
    try {
      const response = await contestService.putUpdateExamination(item?.id, body);

      if (response.data.statusCode === 200) {
        toast.success("Status has been changed!");
        // setDataItemIds(item?.row?._id);
        refresh();
      }
    } catch (error: any) {
      toast.error(error);
    }
  };
  const [modal, setModal] = useState(false);
  //!Function
  const handleOpen = () => {
    setModal(true);
  };
  //! Render
  return (
    <>
      {/* {modal === false ? (
        [1, 2, 3, 4].map((item, index) => {
          return (
            <div className="flex justify-between items-center hover:bg-slate-100 m-5 px-4 ease-in-out">
              <button
                onClick={handleOpen}
                className="text-sm font-medium w-full bg-transparent text-start py-4 border-none cursor-pointer"
              >
                Examinations {index}
              </button>
              <InfoOutlinedIcon
                sx={{ color: "#5048E5", cursor: "pointer" }}
                onClick={() => {
                  history.push({
                    pathname: RouteBase.Scores,
                    // search: `?id=${index}`,
                  });
                }}
              />
            </div>
          );
        })
      ) : */}
      {/* ( */}
      <div>
        <div style={{ textAlign: "end", marginBottom: 10 }}>
          <Link to={RouteBase.CreateContestManagement}>
            <ButtonUpload
              titleButton="Create examination"
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
                field: "name",
                renderHeader: () => <Typography style={styles.titleTable}>Examination name</Typography>,
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

              // {
              //   flex: 1,
              //   field: "active",
              //   renderHeader: () => <Typography style={styles.titleTable}>Active</Typography>,
              // },
              {
                flex: 1,
                field: "generate",
                renderHeader: () => <Typography style={styles.titleTable}>Generate exam</Typography>,
                renderCell: (items: any) => {
                  return (
                    <Button
                      variant="contained"
                      style={styles.buttonOpenModal}
                      onClick={() => history.push({ pathname: RouteBase.GenerateExam, search: `?id=${items?.id}` })}
                    >
                      Generate exam
                    </Button>
                  );
                },
              },
              {
                flex: 0.7,
                field: "active",
                renderHeader: () => <Typography style={styles.titleTable}>Active</Typography>,
                renderCell: (items: any) => {
                  return items?.row?.active === true ? (
                    <CommonStyles.Button
                      variant="contained"
                      style={{ borderRadius: 20 }}
                      // disabled={items?.row?.active || items?.row?._id === dataItemIds}
                      onClick={() => onChangeStatusActive(items)}
                    >
                      Actived
                    </CommonStyles.Button>
                  ) : (
                    <CommonStyles.Button
                      variant="contained"
                      style={styles.buttonOpenModal}
                      onClick={() => onChangeStatusActive(items)}
                    >
                      Start Active
                    </CommonStyles.Button>
                  );
                },
              },
              {
                flex: 0.7,
                field: "canStart",
                renderHeader: () => <Typography style={styles.titleTable}>Can Start</Typography>,
                renderCell: (items: any) => {
                  return items?.row?.canStart === true ? (
                    <CommonStyles.Button
                      variant="contained"
                      style={{ borderRadius: 20 }}
                      // disabled={items?.row?.canStart || items?.row?.id === dataItemId}
                      onClick={() => onChangeStatus(items)}
                    >
                      Testing
                    </CommonStyles.Button>
                  ) : (
                    <CommonStyles.Button
                      variant="contained"
                      style={styles.buttonOpenModal}
                      onClick={() => onChangeStatus(items)}
                    >
                      Start exam
                    </CommonStyles.Button>
                  );
                },
              },
              {
                flex: 0.7,
                field: "exportExcel",
                renderHeader: () => <Typography style={styles.titleTable}>Export Excel</Typography>,
                renderCell: (items: any) => {
                  return (
                    <CommonStyles.Button
                      variant="contained"
                      style={{ borderRadius: 20 }}
                      // disabled={items?.row?.canStart || items?.row?.id === dataItemId}
                      onClick={() => exportExcel(items)}
                    >
                      Export
                    </CommonStyles.Button>
                  );
                },
              },
              {
                flex: 0.4,
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
                          pathname: RouteBase.UpdateContestManagementWId(items?.row?.name),
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
            pagination={{
              page: metaPart?.page,
              pageSize: metaPart?.pageSize,
              totalRow: metaPart?.totalRow,
            }}
            loading={loading}
            checkboxSelection
            rows={dataContest}
            onPageChange={onPageChange}
            onPageSizeChange={onPageSizeChange}
          />
        </Card>
      </div>
      {/* )} */}
    </>
  );
};

export default ContestManagement;
