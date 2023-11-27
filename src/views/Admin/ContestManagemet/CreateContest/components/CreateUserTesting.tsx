import { yupResolver } from "@hookform/resolvers/yup";
import AddIcon from "@mui/icons-material/Add";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import BlockIcon from "@mui/icons-material/Block";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import SaveIcon from "@mui/icons-material/Save";
import UndoIcon from "@mui/icons-material/Undo";
import { Button, Stack, Typography } from "@mui/material";
import ButtonCancel from "components/Button/ButtonCancel";
import ButtonSave from "components/Button/ButtonSave";
import ButtonUpload from "components/Button/ButtonUpload";
import CommonStyles from "components/CommonStyles";
import InputCommon from "components/Input";
import useGetPartDetail from "hooks/UserManagement/useGetPartDetail";
import { ResponseParams } from "interfaces/questionInterface";
import { useCallback, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import studentService from "services/studentService";
import * as yup from "yup";

export interface Props {
  openCreateScreen: {
    type: string;
  };
}
const validationSchema = yup.object().shape({
  fullname: yup.string().required("This field is required!"),
  dob: yup
    .string()
    .typeError("This field is required!")
    .required("Required")
    .test("dob", "Date of birth is invalid!", (val) => Boolean(val)),
  studentCode: yup.string().required("This field is required!"),
});
const CreateUserTesting = (props: Props) => {
  //! State
  const { openCreateScreen } = props;
  //Get id from url
  const { search } = useLocation();
  const id = search.split("=")[1];
  const history = useHistory();

  const [dataPartDetail, , , refetchData] = useGetPartDetail(id);
  const [isEdit, setIsEdit] = useState(false);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const formController = useForm<ResponseParams>({
    mode: "onChange",
    resolver: yupResolver(validationSchema),
    defaultValues: {
      studentCode: dataPartDetail?.studentCode || "",
      fullname: dataPartDetail?.fullname || "",
      dob: dataPartDetail?.dob || new Date(),
    },
  });

  const { control, handleSubmit, setValue, getValues, reset } = formController;

  //! Effect
  useEffect(() => {
    if (dataPartDetail?._id) {
      resetAsyncForm(dataPartDetail);
      refetchData();
    }
  }, [dataPartDetail?._id]);

  //! Function
  const resetAsyncForm = useCallback(
    async (data: any) => {
      reset({
        studentCode: data?.studentCode,
        fullname: data?.fullname,
        dob: data?.dob,
      });
    },
    [reset]
  );

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

  const renderButtonCreate = () => {
    return (
      <Stack spacing={2} direction="row" className="justify-center mt-[14px]">
        <CommonStyles.Button
          loading={isLoading}
          icon={<ArrowCircleRightIcon sx={{ fontSize: "20px" }} />}
          type="submit"
        >
          Save
        </CommonStyles.Button>
        {/* <ButtonSave type="submit" icon={<ArrowCircleRightIcon sx={{ fontSize: "20px" }} />} title="Save" /> */}
        <ButtonCancel icon={<BlockIcon sx={{ fontSize: "20px" }} />} onClick={() => history.goBack()} />{" "}
      </Stack>
    );
  };

  const onSubmit = async (data: any) => {
    if (openCreateScreen.type === "create") {
      const body = {
        studentCode: data.studentCode,
        fullname: data.fullname,
        dob: data.dob,
      };
      try {
        const response = await studentService.postCreatePart(body);
        if (response.data.statusCode === 200) {
          toast.success("Create part success!");
          history.goBack();
        }
      } catch (error: any) {
        toast.error(error?.response?.data?.message);
      }
    }
    if (openCreateScreen.type === "update") {
      const body = {
        studentCode: data.studentCode,
        fullname: data.fullname,
        dob: data.dob,
      };

      try {
        const response = await studentService.patchUpdatePart(id, body);
        if (response.data.statusCode === 200) {
          toast.success("Update part success!");
          setIsEdit(false);
        }
      } catch (error: any) {
        toast.error(error?.response?.data?.message);
      }
    }
  };

  return (
    <form noValidate onSubmit={handleSubmit((data) => onSubmit(data))} autoComplete="off">
      {openCreateScreen.type === "update" && renderButtonUpdate()}
      <div style={styles.cardTitle}>
        <div className="flex-1">
          <Typography style={{ fontWeight: "bold", marginBottom: "10px" }}>User Detail</Typography>
          <InputCommon
            id="standard-basic"
            variant="standard"
            name="studentCode"
            label="Student Id"
            control={control}
            required
            fullWidth
            disabled={openCreateScreen.type === "update" && dataPartDetail?.studentCode}
          />
          <InputCommon
            id="standard-basic"
            variant="standard"
            name="fullname"
            label="Fullname"
            control={control}
            required
            fullWidth
            disabled={openCreateScreen.type === "update" && !isEdit}
            sx={{ marginTop: "20px" }}
          />
        </div>
      </div>
      {openCreateScreen.type === "create" && renderButtonCreate()}
    </form>
  );
};

export default CreateUserTesting;

const styles = {
  buttonDetail: {
    color: "#5048E5",
    fontSize: "20px",
    cursor: "grab",
  },
  cardTitle: {
    marginBottom: "15px",
    padding: "20px",
    display: "flex",
    background: "white",
    boxShadow: "0px 1px 1px rgb(100 116 139 / 6%), 0px 1px 2px rgb(100 116 139 / 10%",
    borderRadius: "8px",
    alignItems: "end",
  },
};
