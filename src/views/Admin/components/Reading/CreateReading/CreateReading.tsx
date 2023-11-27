import { ErrorMessage } from "@hookform/error-message";
import { yupResolver } from "@hookform/resolvers/yup";
import AddIcon from "@mui/icons-material/Add";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import BlockIcon from "@mui/icons-material/Block";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import EditIcon from "@mui/icons-material/Edit";
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import SaveIcon from "@mui/icons-material/Save";
import UndoIcon from "@mui/icons-material/Undo";
import { Button, Card, Stack, Typography } from "@mui/material";
import ButtonCancel from "components/Button/ButtonCancel";
import ButtonSave from "components/Button/ButtonSave";
import ButtonUpload from "components/Button/ButtonUpload";
import CommonStyles from "components/CommonStyles";
import SelectField from "components/CustomField/SelectField";
import InputCommon from "components/Input";
import LoadingPage from "components/Loading";
import TinyMceCommon from "components/TinyMceCommon";
import { RouteBase } from "constants/routeUrl";
import useGetListReadingQuestion from "hooks/QuestionBank/Reading/useGetListReadingQuestion";
import useGetPartDetail from "hooks/QuestionBank/Reading/useGetPartDetail";
import { ResponseParams } from "interfaces/questionInterface";
import { isEmpty } from "lodash";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory, useLocation, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import ReadingService from "services/ReadingService";
import * as yup from "yup";
import ModalCreateQuestion from "./ModalCreateQuestion";

export interface Props {
  openCreateScreen: {
    type: string;
  };
}
const CreateQuestionReading = (props: Props) => {
  const { openCreateScreen } = props;
  const editorRef = useRef<any>();
  const [text, setText] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [openModal, setOpenModal] = useState({});
  const [err, setErr] = useState("");
  const history = useHistory();

  //Get id from url
  const { search } = useLocation();
  const id = search.split("=")[1];

  const validationSchema = yup.object().shape({
    partTitle: yup.string().required("This field is required!"),
    // textField: yup.string().required("This field is required!"),
    partNumber: yup.string().required("This field is required!"),
  });
  const [dataPartDetail, , , refetchData] = useGetPartDetail(id);
  const [dataReading, loading, error, refetchQuestionGroup] = useGetListReadingQuestion(id);
  const [isEdit, setIsEdit] = useState(false);

  if (loading) {
    return <LoadingPage />;
  }

  const formController = useForm<ResponseParams>({
    mode: "onChange",
    resolver: yupResolver(validationSchema),
    defaultValues: { partTitle: dataPartDetail?.passageTitle || "" },
  });

  const { control, handleSubmit, setValue, getValues, reset } = formController;

  const resetAsyncForm = useCallback(
    async (data: any) => {
      reset({
        partTitle: data?.passageTitle,
        partNumber: data?.partNumber,
      });
    },
    [reset]
  );

  useEffect(() => {
    if (dataPartDetail?.id) {
      resetAsyncForm(dataPartDetail);
    }
  }, [dataPartDetail?.id]);

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
            <CommonStyles.Button loading={isLoading} icon={<SaveIcon sx={{ fontSize: "20px" }} />} type="submit">
              Save
            </CommonStyles.Button>
            {/* <ButtonSave icon={<SaveIcon sx={{ fontSize: "20px" }} />} type="submit" /> */}
            <ButtonCancel icon={<BlockIcon sx={{ fontSize: "20px" }} />} onClick={() => setIsEdit(false)} />{" "}
          </>
        )}
      </Stack>
    );
  };

  const renderButtonCreate = () => {
    return (
      <Stack spacing={2} direction="row" className="justify-center mt-[14px]">
        <CommonStyles.Button loading={isLoading} icon={<SaveIcon sx={{ fontSize: "20px" }} />} type="submit">
          Continue
        </CommonStyles.Button>
        {/* <ButtonSave type="submit" icon={<ArrowCircleRightIcon sx={{ fontSize: "20px" }} />} title="Continue" /> */}
        <ButtonCancel icon={<BlockIcon sx={{ fontSize: "20px" }} />} onClick={() => history.goBack()} />{" "}
      </Stack>
    );
  };

  const onSubmit = async (data: any) => {
    setIsLoading(true);

    if (openCreateScreen.type === "create") {
      const body = {
        partNumber: data.partNumber,
        passageTitle: data.partTitle,
        passageText: editorRef.current.getContent(),
      };

      try {
        const response = await ReadingService.postCreatePart(body);

        if (response.data.statusCode === 200) {
          toast.success("Create part success!");
          history.push({
            pathname: RouteBase.UpdateReadingWId(response?.data?.data?.passageTitle),
            search: `?id=${response?.data?.data?.id}`,
          });
          setIsLoading(false);
        }
      } catch (error: any) {
        toast.error(error);
        setIsLoading(false);
      }
    }
    if (openCreateScreen.type === "update") {
      const body = {
        partNumber: data.partNumber,
        passageTitle: data.partTitle,
        passageText: editorRef.current.getContent(),
      };

      try {
        const response = await ReadingService.patchUpdatePart(id, body);
        if (response.data.statusCode === 200) {
          toast.success("Update part success!");
          setIsEdit(false);
        }
      } catch (error: any) {
        toast.error(error);
      }
    }
  };

  const onDelete = async (id: number | string) => {
    try {
      await ReadingService.deleteQuestionGroup(id);
      toast.success("Delete question group success");
      refetchQuestionGroup();
    } catch (error: any) {
      toast.error(error);
    }
  };

  return (
    <form noValidate onSubmit={handleSubmit((data) => onSubmit(data))} autoComplete="off">
      {openCreateScreen.type === "update" && renderButtonUpdate()}
      <div style={styles.cardTitle}>
        <div className="flex-1">
          <Typography style={{ fontWeight: "bold" }}>Reading title</Typography>
          <InputCommon
            id="standard-basic"
            variant="standard"
            name="partTitle"
            control={control}
            required
            fullWidth
            disabled={openCreateScreen.type === "update" && !isEdit}
          />
        </div>
        <div className="flex-1 ml-[20px]">
          <SelectField
            variant="standard"
            name="partNumber"
            label="Part"
            options={[
              { label: "Part 1", value: 1 },
              { label: "Part 2", value: 2 },
              { label: "Part 3", value: 3 },
            ]}
            control={control}
            setValue={setValue}
            disabled={openCreateScreen.type === "update" && !isEdit}
          />
        </div>
      </div>

      <Card sx={{ minWidth: 275 }} className="p-[20px] mb-[20px] flex-1">
        <TinyMceCommon
          ref={editorRef}
          initialValue={dataPartDetail ? dataPartDetail.passageText : "Passage text"}
          disabled={openCreateScreen.type === "update" && !isEdit}
        />
      </Card>
      {openCreateScreen.type === "create" && renderButtonCreate()}
      {openCreateScreen.type === "update" && (
        <>
          <div className="text-end mb-2">
            <ButtonUpload
              titleButton="Create question group"
              icon={<AddIcon />}
              onClick={() => setOpenModal({ type: "createQuestion" })}
              style={{ background: "#9155FE" }}
            />
          </div>
          <div>
            {(dataReading || []).map((el: any, index: number) => {
              return (
                <Card style={{ marginBottom: "15px", padding: 20 }} key={index}>
                  <div style={{ display: "flex", justifyContent: "end" }}>
                    <InfoOutlinedIcon
                      style={styles.buttonDetail}
                      onClick={() => setOpenModal({ type: "detailQuestion", id: el.id })}
                    />
                    <EditIcon
                      style={{ color: "#15B8A6", fontSize: "20px", cursor: "grab", marginLeft: 10, marginRight: 10 }}
                      onClick={() => setOpenModal({ type: "updateQuestion", id: el.id })}
                    />
                    <HighlightOffOutlinedIcon
                      style={{ color: "#f44336", fontSize: "20px", cursor: "grab" }}
                      onClick={() => onDelete(el.id)}
                    />
                  </div>
                  {/* <Typography style={{ fontWeight: "bold" }}>Question groups</Typography> */}
                  <div dangerouslySetInnerHTML={{ __html: el.questionBox }} style={{ fontWeight: "bold" }}></div>
                  {/* <InputCommon
                    id="standard-basic"
                    variant="standard"
                    name="question"
                    control={control}
                    required
                    fullWidth
                    value={<div dangerouslySetInnerHTML={{ __html: el.questionBox }}></div>}
                    disabled
                    style={{ marginTop: el.questionBox ? "10px" : 0 }}
                  /> */}
                </Card>
              );
            })}
          </div>
        </>
      )}
      {!isEmpty(openModal) && (
        <ModalCreateQuestion
          fetchData={refetchQuestionGroup}
          openModal={openModal}
          onCloseModal={() => setOpenModal({})}
          id={id}
        />
      )}
    </form>
  );
};

export default CreateQuestionReading;

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
