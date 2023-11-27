// import TableCommon from "./TableCommon";
import AddIcon from "@mui/icons-material/Add";
import { Card, Stack, Typography } from "@mui/material";
import ButtonUpload from "components/Button/ButtonUpload";
import BlockIcon from "@mui/icons-material/Block";
import CommonDataGrid from "components/CommonDataGrid";
import useGetParts from "hooks/UserManagement/useGetParts";
import { Link, useHistory } from "react-router-dom";
import userService from "services/userService";
import { RouteBase } from "constants/routeUrl";
import ModalCreate from "components/Modal/ModalCreate";
import ButtonSave from "components/Button/ButtonSave";
import ButtonCancel from "components/Button/ButtonCancel";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import CheckboxField from "components/CustomField/CheckboxField";
import { isArray, isEmpty } from "lodash";
import { useMemo, useState } from "react";
import { QuestionUser } from "interfaces/user";
import contestService from "services/contestService";
import { toast } from "react-toastify";

const styles = {
  titleTable: {
    fontSize: 14,
    fontWeight: "bold",
  },
};
export interface Props {
  onCloseModal?: any;
  fetchData?: any;
  openModal?: any;
  onSave?: (value: Array<QuestionUser>) => void;
}
const ModalDataUserUpdate = ({ onCloseModal, fetchData, openModal, onSave = () => {} }: Props) => {
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

  const [valueUserId, setValueUserId] = useState<string[]>([]);
  const isCheckAll = useMemo(
    () => dataParts?.length > 0 && dataParts?.length === valueUserId?.length,
    [valueUserId?.length, dataParts?.length]
  );

  const handleChange = (event: any) => {
    console.log("event.target", event.target);
    if (isArray(valueUserId) && valueUserId?.includes(event.target.value)) {
      setValueUserId(valueUserId.filter((elm) => elm != event.target.value));
      return;
    }
    setValueUserId([...valueUserId, event.target.value]);
  };
  const handleSelectAll = (event: any) => {
    if (isCheckAll) {
      setValueUserId([]);
      return;
    }
    setValueUserId(dataParts.map((el) => el._id));
  };
  const handleClick = () => {
    onSave(dataParts.filter((e) => valueUserId.includes(e._id)).map((e) => ({ ...e, id: e._id })));
    onCloseModal();
  };

  const onSubmit = async (data: any) => {
    const body = {
      userIds: dataParts.filter((e) => valueUserId.includes(e._id)).map((e) => ({ ...e, id: e._id })),
    };

    try {
      const response = await contestService.postCreateExamination(body);

      if (response.data.statusCode === 200) {
        toast.success("Create part success!");
      }
    } catch (error: any) {
      toast.error(error);
    }
  };
  //! Render
  return (
    <div>
      <ModalCreate open={openModal} onClose={onCloseModal}>
        {/* <CommonDataGrid
          columns={[
            {
              flex: 1,
              field: "email",
              renderHeader: () => <Typography style={styles.titleTable}>Email</Typography>,
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
          getRowId={(row: any) => row._id}
        /> */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <CheckboxField
            label="Select All"
            value="Select All"
            handleChange={handleSelectAll}
            checked={dataParts?.length === valueUserId?.length}
          />
          {dataParts?.map((item: any) => {
            const isChecked = valueUserId?.includes(item._id);
            return (
              <CheckboxField
                key={item?._id}
                label={item?.email}
                value={item?._id}
                checked={isChecked}
                handleChange={handleChange}
              />
            );
          })}
          <Stack spacing={2} direction="row" className="justify-center mt-[14px]">
            <ButtonSave onClick={onSubmit} icon={<ArrowCircleRightIcon sx={{ fontSize: "20px" }} />} title="Save" />
            <ButtonCancel icon={<BlockIcon sx={{ fontSize: "20px" }} />} onClick={onCloseModal} />{" "}
          </Stack>
        </div>
      </ModalCreate>
    </div>
  );
};

export default ModalDataUserUpdate;
