import { yupResolver } from "@hookform/resolvers/yup";
import BlockIcon from "@mui/icons-material/Block";
import SaveIcon from "@mui/icons-material/Save";
import { Button } from "@mui/material";
import { Card, Stack, Typography } from "@mui/material";
import { Editor } from "@tinymce/tinymce-react";
import ButtonCancel from "components/Button/ButtonCancel";
import ButtonSave from "components/Button/ButtonSave";
import SelectField from "components/CustomField/SelectField";
import InputCommon from "components/Input";
import useGetDetailQuestion from "hooks/QuestionBank/Writing/useGetDetailQuestion";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import writingServices from "services/writingServices";
import * as yup from "yup";
import UndoIcon from "@mui/icons-material/Undo";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import { useHistory, useLocation, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import TinyMceCommon from "components/TinyMceCommon";
import audioService from "services/audioService";
import ButtonUpload from "components/Button/ButtonUpload";
import { IMAGE_URL } from "constants/constants";
import { RouteBase } from "constants/routeUrl";
export interface Props {
  openCreateScreen: {
    type: string;
  };
}
const CreateQuestionWriting = (props: Props) => {
  const history = useHistory();
  const editorRef = useRef<any>();
  const modelRef = useRef<any>();

  //Get id from url
  const { search } = useLocation();
  const id = search.split("=")[1];

  const usefulGrammarRef = useRef<any>();
  const ideaSuggestionRef = useRef<any>();
  const organizationRef = useRef<any>();
  const params = useParams<any>();
  const { openCreateScreen } = props;
  const [isEdit, setIsEdit] = useState(false);
  const [dataQuestionDetail, loading, error, refetchData] = useGetDetailQuestion(id);
  const fileRef = useRef<any>();
  const [selectFile, setSelectFile] = useState<any>("");
  const [image, setImage] = useState<any>();
  const validationSchema = yup.object().shape({
    title: yup.string().required("This is field required"),
    questionPartNumber: yup.string().required("This is field required"),
  });

  const { register, control, handleSubmit, reset, watch, setValue } = useForm<any>({
    mode: "onChange",
    resolver: yupResolver(validationSchema),
    defaultValues: validationSchema.getDefault({}),
  });
  const handleClick = () => {
    fileRef.current.click();
  };

  const onFileChange = async (event: any) => {
    if (event.target && event.target.files[0]) {
      const formData = new FormData();
      formData.append("file", event.target.files[0]);
      setSelectFile(event.target.files[0]);
      try {
        const responseImage = await audioService.postAudioListening(formData);
        if (responseImage?.data?.statusCode === 200) {
          setImage(responseImage?.data?.data?.uri);
        }
      } catch (error) {
        console.log("error", error);
      }
    }
  };

  const onSubmit = async (data: any) => {
    if (openCreateScreen.type === "create") {
      const body = {
        level: "A1",
        analysisType: "NONE",
        questionType: "LINE_GRAPH",
        image: image ? image : "",
        questionText: editorRef.current.getContent(),
        title: data.title,
        usefulGrammarNVocab: usefulGrammarRef.current.getContent(),
        ideaSuggestion: ideaSuggestionRef.current.getContent(),
        organization: organizationRef.current.getContent(),
        modelAnswer: modelRef.current.getContent(),
        questionPartNumber: data.questionPartNumber,
      };
      try {
        const response = await writingServices.postCreateQuestion(body);
        if (response?.data?.statusCode === 200) {
          toast.success("Create writing part success");
          history.push({
            pathname: RouteBase.UpdateWritingWId(response?.data?.data?.partTitle),
            search: `?id=${response?.data?.data?.id}`,
          });
        }
      } catch (error: any) {
        toast.error(error);
      }
    }
    if (openCreateScreen.type === "update") {
      const body = {
        level: "A1",
        analysisType: "NONE",
        questionType: "LINE_GRAPH",
        image: image ? image : "",
        questionText: editorRef.current.getContent(),
        title: data.title,
        usefulGrammarNVocab: usefulGrammarRef.current.getContent(),
        ideaSuggestion: ideaSuggestionRef.current.getContent(),
        organization: organizationRef.current.getContent(),
        modelAnswer: modelRef.current.getContent(),
        questionPartNumber: data.questionPartNumber,
      };
      try {
        const response = await writingServices.patchUpdateQuestion(id, body);
        if (response?.data?.statusCode === 200) {
          toast.success("Update writing part success");
          history.goBack();
        }
      } catch (error: any) {
        toast.error(error);
      }
    }
  };

  const resetAsyncForm = useCallback(
    async (data: any) => {
      reset({
        title: data?.title,
        questionText: data?.questionText,
        questionPartNumber: data?.questionPartNumber,
      });
    },
    [reset]
  );

  useEffect(() => {
    if (dataQuestionDetail?.id) {
      resetAsyncForm(dataQuestionDetail);
    }
  }, [dataQuestionDetail?.id]);

  return (
    <form noValidate onSubmit={handleSubmit((data) => onSubmit(data))} autoComplete="off">
      {!isEdit && openCreateScreen.type === "update" && (
        <Stack spacing={2} direction="row" className="justify-end mb-[10px]">
          <Button component="a" href="#as-link" startIcon={<UndoIcon />} onClick={() => history.goBack()}>
            Back
          </Button>
          <Button variant="contained" onClick={() => setIsEdit(true)}>
            <BorderColorOutlinedIcon style={{ fontSize: 16, cursor: "grab", marginRight: 10 }} />
            Edit
          </Button>
        </Stack>
      )}

      <div style={styles.questionGroup}>
        <div className="flex items-end">
          <div className="flex-1">
            <Typography style={{ fontWeight: "bold" }}>Writing title</Typography>
            <InputCommon
              id="standard-basic"
              variant="standard"
              name="title"
              control={control}
              required
              fullWidth
              disabled={openCreateScreen.type === "update" && !isEdit}
            />
          </div>
          <div className="flex-1 ml-[20px]">
            <SelectField
              control={control}
              options={[
                { label: "Part 1", value: 1 },
                { label: "Part 2", value: 2 },
              ]}
              label="Part"
              variant="standard"
              name="questionPartNumber"
              setValue={setValue}
              disabled={openCreateScreen.type === "update" && !isEdit}
            />
          </div>
        </div>
      </div>
      <div className="text-center">
        <input ref={fileRef} className="hidden" type="file" name="directionAudio" onChange={onFileChange} />
        {(selectFile || dataQuestionDetail?.image) && (
          <img
            id="blah"
            src={selectFile ? URL.createObjectURL(selectFile) : IMAGE_URL + dataQuestionDetail?.image}
            alt="image"
            style={{ width: "100%", maxHeight: 400, marginTop: 20, maxWidth: "700px" }}
          />
        )}
        <ButtonUpload
          style={{ display: "flex", height: 30, marginBottom: 10, marginTop: 20 }}
          titleButton="Upload image"
          onClick={handleClick}
          disabled={openCreateScreen.type === "update" && !isEdit}
        />
      </div>
      <Card sx={{ minWidth: 275 }} className="p-[20px] my-[20px] flex-1">
        <TinyMceCommon
          ref={editorRef}
          initialValue={dataQuestionDetail?.questionText ? dataQuestionDetail?.questionText : "Question"}
          disabled={openCreateScreen.type === "update" && !isEdit}
        />
      </Card>
      <Card sx={{ minWidth: 275 }} className="p-[20px] my-[20px] flex-1">
        <TinyMceCommon
          ref={modelRef}
          initialValue={dataQuestionDetail?.modelAnswer ? dataQuestionDetail?.modelAnswer : "Model answer"}
          disabled={openCreateScreen.type === "update" && !isEdit}
        />
      </Card>
      <Card sx={{ minWidth: 275 }} className="p-[20px] my-[20px] flex-1">
        <TinyMceCommon
          ref={usefulGrammarRef}
          initialValue={
            dataQuestionDetail?.usefulGrammarNVocab ? dataQuestionDetail?.usefulGrammarNVocab : "Useful grammar"
          }
          disabled={openCreateScreen.type === "update" && !isEdit}
        />
      </Card>
      <Card sx={{ minWidth: 275 }} className="p-[20px] my-[20px] flex-1">
        <TinyMceCommon
          ref={ideaSuggestionRef}
          initialValue={dataQuestionDetail?.ideaSuggestion ? dataQuestionDetail?.ideaSuggestion : "Idea suggestion"}
          disabled={openCreateScreen.type === "update" && !isEdit}
        />
      </Card>
      <Card sx={{ minWidth: 275 }} className="p-[20px] my-[20px] flex-1">
        <TinyMceCommon
          ref={organizationRef}
          initialValue={dataQuestionDetail?.organization ? dataQuestionDetail?.organization : "Organization"}
          disabled={openCreateScreen.type === "update" && !isEdit}
        />
      </Card>

      {(isEdit || openCreateScreen.type === "create") && (
        <Stack spacing={2} direction="row" className="justify-center mt-[40px]">
          <ButtonSave type="submit" icon={<SaveIcon />} title="Continue" />
          <ButtonCancel icon={<BlockIcon sx={{ fontSize: "20px" }} />} onClick={() => history.goBack()} />
        </Stack>
      )}
    </form>
  );
};

export default CreateQuestionWriting;

const styles = {
  questionGroup: {
    background: "#FFFFFF",
    borderRadius: 8,
    padding: 20,
    boxShadow: "0px 1px 1px rgb(100 116 139 / 6%), 0px 1px 2px rgb(100 116 139 / 10%)",
  },
};
