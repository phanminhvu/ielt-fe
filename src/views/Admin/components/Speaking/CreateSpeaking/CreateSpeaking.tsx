import { yupResolver } from "@hookform/resolvers/yup";
import AddIcon from "@mui/icons-material/Add";
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
import SelectField from "components/CustomField/SelectField";
import InputCommon from "components/Input";
import { AUDIO_URL, IMAGE_URL } from "constants/constants";
import { RouteBase } from "constants/routeUrl";
import useGetPartDetail from "hooks/QuestionBank/Reading/useGetPartDetail";
import useGetListSpeakingQuestion from "hooks/QuestionBank/Speaking/useGetListSpeakingQuestion";
import { ResponseParams } from "interfaces/questionInterface";
import { isEmpty } from "lodash";
import React, { useCallback, useEffect, useRef, useState } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { useForm } from "react-hook-form";
import { useHistory, useLocation, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import audioService from "services/audioService";
import ReadingService from "services/ReadingService";
import speakingService from "services/speakingService";
import * as yup from "yup";
import ModalCreateQuestion from "./ModalCreateQuestion";

export interface Props {
  openCreateScreen: {
    type: string;
  };
}

const CreateQuestionSpeaking = (props: Props) => {
  const [selectFile, setSelectFile] = useState<any>();
  const history = useHistory();
  //Get id from url
  const { search } = useLocation();
  const id = search.split("=")[1];
  const fileRef = useRef<any>();
  const { openCreateScreen } = props;
  const [openModal, setOpenModal] = useState({});
  const [dataPartDetail, , , refetchData] = useGetPartDetail(id);
  const [dataSpeaking, loading, error, refetchQuestionGroup] = useGetListSpeakingQuestion(id);
  const [isEdit, setIsEdit] = useState(false);

  const validationSchema = yup.object().shape({
    partNumber: yup.mixed().required("This is field required"),
  });

  const formController = useForm<ResponseParams>({
    mode: "onChange",
    resolver: yupResolver(validationSchema),
    defaultValues: { partNumber: dataPartDetail?.partNumber || "" },
  });

  const { control, handleSubmit, setValue, getValues, reset } = formController;

  const resetAsyncForm = useCallback(
    async (data: any) => {
      reset({
        partNumber: data?.partNumber,
        directionAudio: `http://103.226.250.81:8688/${data?.directionAudio}`,
        title: data?.title,
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
        <ButtonSave icon={<SaveIcon sx={{ fontSize: "20px" }} />} type="submit" />
        <ButtonCancel icon={<BlockIcon sx={{ fontSize: "20px" }} />} onClick={() => history.goBack()} />{" "}
      </Stack>
    );
  };

  const onSubmit = async (data: any) => {
    if (openCreateScreen.type === "create") {
      const formData = new FormData();
      formData.append("file", selectFile);
      try {
        const responseAudio = await audioService.postAudioListening(formData);

        if (responseAudio?.data?.statusCode === 200) {
          const body = {
            partNumber: data?.partNumber,
            directionAudio: responseAudio?.data?.data?.uri,
          };
          const response = await speakingService.postCreatePart(body);
          if (response.data.statusCode === 200) {
            toast.success("Create speaking success!");
            history.push({
              pathname: RouteBase.UpdateSpeakingWId(response?.data?.data?.partTitle),
              search: `?id=${response?.data?.data?.id}`,
            });
          }
        }
      } catch (error: any) {
        toast.error(error);
      }
    }
    if (openCreateScreen.type === "update") {
      try {
        let responseAudio = null;
        if (selectFile) {
          const formData = new FormData();
          formData.append("file", selectFile);
          responseAudio = await audioService.postAudioListening(formData);
        }

        const body = {
          partNumber: data?.partNumber,
          directionAudio: responseAudio?.data?.data?.uri
            ? responseAudio?.data?.data?.uri
            : dataPartDetail?.directionAudio,
        };
        const response = await speakingService.postCreatePart(body);
        if (response.data.statusCode === 200) {
          toast.success("Update speaking success!");
          // history.push(RouteBase.Speaking);
        }
      } catch (error: any) {
        toast.error(error);
      }
    }
  };

  const onDelete = async (id: number | string) => {
    try {
      await ReadingService.deleteQuestionGroup(id);
      alert("Delete question group success");
      refetchQuestionGroup();
    } catch (error) {
      console.log("error");
    }
  };

  const handleOpenFile = () => {
    fileRef.current.click();
  };

  const onFileChange = (event: any) => {
    setSelectFile(event.target.files[0]);
  };

  return (
    <form noValidate onSubmit={handleSubmit((data) => onSubmit(data))} autoComplete="off">
      {openCreateScreen.type === "update" && renderButtonUpdate()}

      <div style={styles.cardContainer}>
        <SelectField
          control={control}
          options={[
            { label: "Part 1", value: 1 },
            { label: "Part 2", value: 2 },
            { label: "Part 3", value: 3 },
          ]}
          label="Part"
          variant="standard"
          name="partNumber"
          setValue={setValue}
          disabled={openCreateScreen.type === "update" && !isEdit}
        />
      </div>
      {(selectFile || dataPartDetail?.directionAudio) && (
        <AudioPlayer
          preload="none"
          style={{ borderRadius: "1rem", textAlign: "center", marginTop: 20, marginBottom: 20 }}
          src={selectFile ? URL.createObjectURL(selectFile) : `${AUDIO_URL}${dataPartDetail?.directionAudio}`}
          onPlay={(e) => console.log("onPlay")}
          showJumpControls={false}
          loop={false}
          autoPlayAfterSrcChange={false}
        />
      )}
      <input ref={fileRef} className="hidden" type="file" name="directionAudio" onChange={onFileChange} />
      <div className="text-end mb-2">
        <ButtonUpload
          style={{ display: "flex", height: 40 }}
          titleButton="Upload direction audio"
          disabled={openCreateScreen.type === "update" && !isEdit}
          onClick={handleOpenFile}
        />
      </div>
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
            {(dataSpeaking || []).map((el: any, index: number) => {
              return (
                <Card style={{ marginBottom: "15px", padding: 20 }} key={index}>
                  <div style={{ display: "flex", justifyContent: "end" }}>
                    <InfoOutlinedIcon
                      style={styles.buttonDetail}
                      onClick={() => setOpenModal({ type: "detailQuestion", id: el.id })}
                    />
                    <EditIcon
                      style={styles.editIcon}
                      onClick={() => setOpenModal({ type: "updateQuestion", id: el.id })}
                    />
                    <HighlightOffOutlinedIcon style={styles.deleteIcon} onClick={() => onDelete(el.id)} />
                  </div>
                  <Typography style={{ fontWeight: "bold" }}>Question groups</Typography>
                  <InputCommon
                    id="standard-basic"
                    variant="standard"
                    name="title"
                    control={control}
                    required
                    fullWidth
                    value={el.title}
                    disabled
                    style={{ marginTop: el.title ? "10px" : 0 }}
                  />
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

export default CreateQuestionSpeaking;

const styles = {
  buttonDetail: {
    color: "#5048E5",
    fontSize: "20px",
    cursor: "grab",
  },
  editIcon: {
    color: "#15B8A6",
    fontSize: "20px",
    cursor: "grab",
    marginLeft: 10,
    marginRight: 10,
  },
  deleteIcon: {
    color: "#f44336",
    fontSize: "20px",
    cursor: "grab",
  },
  cardContainer: {
    background: "#FFFFFF",
    borderRadius: 8,
    padding: 20,
    boxShadow: "0px 1px 1px rgb(100 116 139 / 6%), 0px 1px 2px rgb(100 116 139 / 10%)",
    marginBottom: 20,
  },
};
