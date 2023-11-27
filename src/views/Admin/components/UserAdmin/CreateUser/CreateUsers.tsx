import { yupResolver } from "@hookform/resolvers/yup";
import BlockIcon from "@mui/icons-material/Block";
import SaveIcon from "@mui/icons-material/Save";
import UndoIcon from "@mui/icons-material/Undo";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import { Button, Stack } from "@mui/material";
import ButtonCancel from "components/Button/ButtonCancel";
import ButtonSave from "components/Button/ButtonSave";
import ButtonUpload from "components/Button/ButtonUpload";
import useGetPartDetail from "hooks/ContestManagemet/useGetPartDetail";
import { ResponseParams } from "interfaces/questionInterface";
import { isArray } from "lodash";
import { useCallback, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import contestService from "services/contestService";
import fileService from "services/fileService";
import * as yup from "yup";
import "../../../ContestManagemet/GenerateExam/style.scss";
import ListUserContest from "views/Admin/ContestManagemet/CreateContest/ListUserContest";
import ListStudentId from "views/Admin/ContestManagemet/CreateContest/ListStudentId";

export interface Props {
  openCreateScreen: {
    type: string;
  };
}

const CreateUsers = (props: Props) => {
  //! State
  const fileRef = useRef<any>();
  const { openCreateScreen } = props;
  const { search } = useLocation();
  const id = search.split("=")[1];
  const [isEdit, setIsEdit] = useState(false);
  const history = useHistory();
  const [valueUserId, setValueUserId] = useState<string[]>([]);

  const validationSchema = yup.object().shape({
    name: yup.string().required("This field is required!"),
    active: yup.string().required("This field is required!"),
  });
  const [selectFile, setSelectFile] = useState<any>("");
  const [file, setFile] = useState<any>();

  const [dataPartDetail, , , refetchData] = useGetPartDetail(id);
  const [dataFileExcel, setDataFileExcel] = useState([]);
  console.log("dataFileExcel", dataFileExcel);

  const formController = useForm<ResponseParams>({
    mode: "onChange",
    resolver: yupResolver(validationSchema),
    defaultValues: { name: dataPartDetail?.name || "" },
  });

  const { control, handleSubmit, setValue, getValues, reset } = formController;
  const handlePickImage = () => {
    fileRef.current.click();
  };

  const onFileChange = async (event: any) => {
    if (event.target && event.target.files[0]) {
      const formData = new FormData();
      formData.append("file", event.target.files[0]);
      formData.append("name", "fileUser");
      setSelectFile(event.target.files[0]);
      try {
        const responseFile = await fileService.postFileExcel(formData);
        if (responseFile?.data?.statusCode === 200) {
          setFile(responseFile?.data?.data?.uri);
          toast.success("Upload file success");
          setValueUserId(responseFile?.data?.data?.map((el: any) => el?._id));
          setDataFileExcel(responseFile?.data?.data);
        }
      } catch (error) {
        console.log("error", error);
      }
    }
  };
  //! Effect
  useEffect(() => {
    if (dataPartDetail?.id) {
      resetAsyncForm(dataPartDetail);
    }
  }, [dataPartDetail?.id]);
  useEffect(() => {
    if (isArray(dataPartDetail?.userIds)) {
      setValueUserId(dataPartDetail?.userIds);
    }
  }, [dataPartDetail?.userIds]);

  //! Function
  const resetAsyncForm = useCallback(
    async (data: any) => {
      reset({
        name: data?.name,
        active: data?.active,
        // dataFileExcel: data?.dataFileExcel,
      });
    },
    [reset]
  );

  const renderButtonCreate = () => {
    return (
      <Stack spacing={2} direction="row" className="justify-center mt-[14px]">
        <ButtonSave icon={<SaveIcon sx={{ fontSize: "20px" }} />} type="submit" title="Save" />
        <ButtonCancel icon={<BlockIcon sx={{ fontSize: "20px" }} />} onClick={() => history.goBack()} />{" "}
      </Stack>
    );
  };
  const renderButtonUpdate = () => {
    return (
      <Stack spacing={2} direction="row" className="justify-end mb-[10px]">
        <Button component="a" href="#as-link" startIcon={<UndoIcon />} onClick={() => history.goBack()}>
          Back
        </Button>
        {!isEdit ? (
          <Button variant="contained" onClick={() => setIsEdit(true)}>
            <BorderColorOutlinedIcon style={{ fontSize: 16, cursor: "grab", marginRight: 10 }} />
            Edit
          </Button>
        ) : (
          <>
            <ButtonSave icon={<SaveIcon sx={{ fontSize: "20px" }} />} type="submit" />
            <ButtonCancel icon={<BlockIcon sx={{ fontSize: "20px" }} />} onClick={() => setIsEdit(false)} />{" "}
          </>
        )}
      </Stack>
    );
  };

  const onSubmit = async (data: any) => {
    if (openCreateScreen.type === "create") {
      const body = {
        name: data.name,
        active: data.active,
        studentIds: valueUserId,
      };

      //   try {
      //     const response = await contestService.postCreateExamination(body);

      //     if (response.data.statusCode === 200) {
      //       toast.success("Create part success!");
      //       history.goBack();
      //     }
      //   } catch (error: any) {
      //     toast.error("Max student of examination is 40!");
      //   }
    }
    if (openCreateScreen.type === "update") {
      const body: any = {
        name: data.name,
        active: data.active,
        // studentIds: valueUserId,
      };
      if (valueUserId.length) {
        body.studentIds = valueUserId;
      }

      try {
        const response = await contestService.putUpdateExamination(id, body);
        if (response.data.statusCode === 200) {
          refetchData();
          toast.success("Update part success!");
          setIsEdit(false);
        }
      } catch (error: any) {
        toast.error(error);
      }
    }
  };
  //! Render

  return (
    <form noValidate onSubmit={handleSubmit((data) => onSubmit(data))} autoComplete="off">
      {openCreateScreen.type === "update" && renderButtonUpdate()}
      <div className="flex justify-end mb-2">
        <input ref={fileRef} className="hidden" type="file" name="file" onChange={onFileChange} />
        <ButtonUpload
          style={{ display: "flex", height: 40, marginBottom: 10, marginTop: 10 }}
          titleButton="Import file user"
          onClick={handlePickImage}
          disabled={openCreateScreen.type === "update" && !isEdit}
        />
      </div>
      {openCreateScreen.type === "create" && renderButtonCreate()}
      <div className="mt-10">
        {openCreateScreen.type === "create" && <ListUserContest dataFileExcel={dataFileExcel} />}
        {openCreateScreen.type === "update" && (
          <ListStudentId
            studentIds={dataPartDetail?.studentIds || []}
            studentDetails={dataPartDetail?.studentDetails || []}
          />
        )}
      </div>
    </form>
  );
};

export default CreateUsers;
