import { yupResolver } from "@hookform/resolvers/yup";
import BlockIcon from "@mui/icons-material/Block";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import SaveIcon from "@mui/icons-material/Save";
import { Stack, Typography } from "@mui/material";
import ButtonCancel from "components/Button/ButtonCancel";
import ButtonSave from "components/Button/ButtonSave";
import InputCommon from "components/Input";
import ModalCreate from "components/Modal/ModalCreate";
import TinyMceCommon from "components/TinyMceCommon";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import ReadingService from "services/ReadingService";
import * as yup from "yup";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import ButtonUpload from "components/Button/ButtonUpload";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import speakingService from "services/speakingService";
import audioService from "services/audioService";
import useGetDetailQuestion from "hooks/QuestionBank/Speaking/useGetDetailQuestion";
import { AUDIO_URL, IMAGE_URL } from "constants/constants";
import CommonStyles from "components/CommonStyles";

export interface Props {
  openModal: any;
  onCloseModal?: () => void;
  id: number | string;
  fetchData: any;
}

const validationSchema = yup.object().shape({
  // questionBox: yup.string().required("This is field required"),
  // questionType: yup.mixed().required("This is field required"),
  // questions: yup.array(
  //   yup.object({
  //     questionText: yup.string().required("This is field required"),
  //     answer: yup.string().required("This is field required"),
  //     options: yup.array(yup.string().required("mmm")),
  //   })
  // ),
});

const ModalCreateQuestion = (props: Props) => {
  const editorRef = useRef<any>();
  const usefulGrammarRef = useRef<any>();
  const ideaSuggestionRef = useRef<any>();
  const fileRef = useRef<any>({
    questionAudio: [],
    modelAnswerAudio: [],
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectFile, setSelectFile] = useState<any>({});
  const { openModal, onCloseModal = () => {}, id, fetchData } = props;
  const [dataQuestionDetail, loading, error, refetchData] = useGetDetailQuestion(openModal.id);

  const { register, control, handleSubmit, reset, watch, setValue, getValues, formState, getFieldState } = useForm<any>(
    {
      mode: "onChange",
      resolver: yupResolver(validationSchema),
      shouldUnregister: false,
      defaultValues: {
        questions: dataQuestionDetail?.questions?.map((el: any) => ({
          questionAudio: "uploads/2022/01/01/pepe.mp3",
          questionText: "<p>Text</p>",
          modelAnswerAudio: "uploads/2022/01/01/pepe.mp3",
          modelAnswer: "<p>Text</p>",
        })),
      },
    }
  );

  const { fields, append, prepend, remove, swap, move, insert, update } = useFieldArray({
    control,
    name: "questions",
  });
  const onAddQuestion = () => {
    append({ questionText: "" });
  };

  const onFileChange = async (event: any, key: string) => {
    setIsLoading(true);
    const object = { ...selectFile };
    object[key] = event.target.files[0];
    setSelectFile(object);
    const formData = new FormData();
    formData.append("file", event.target.files[0]);
    try {
      const responseAudio = await audioService.postAudioListening(formData);

      if (responseAudio?.data?.statusCode === 200) {
        setValue(key, responseAudio?.data?.data?.uri);
        setIsLoading(false);
      }
    } catch (error: any) {
      toast.error(error);
      setIsLoading(false);
    }
  };

  const resetAsyncForm = useCallback(
    async (data: any) => {
      reset({
        title: data?.title,
        questions: data?.questions,
      });
    },
    [reset]
  );

  useEffect(() => {
    if (dataQuestionDetail?.id) {
      resetAsyncForm(dataQuestionDetail);
    }
  }, [dataQuestionDetail?.id]);

  const onSubmit = async (data: any) => {
    if (openModal.type === "createQuestion") {
      const body = {
        explanationText: editorRef.current.getContent(),
        usefulGrammarNVocab: usefulGrammarRef.current.getContent(),
        ideaSuggestion: ideaSuggestionRef.current.getContent(),
        title: data.title,
        questions: data?.questions,
        partId: id,
      };

      try {
        const response = await speakingService.postCreateQuestionGroupSpeaking(body);
        if (response.data.statusCode === 200) {
          toast.success("Create question group success!");
          fetchData();
          onCloseModal();
        }
      } catch (error) {
        console.log("error", error, fetchData);
      }
    }
    if (openModal.type === "updateQuestion") {
      const body = {
        explanationText: editorRef.current.getContent(),
        usefulGrammarNVocab: usefulGrammarRef.current.getContent(),
        ideaSuggestion: ideaSuggestionRef.current.getContent(),
        title: data.title,
        questions: data?.questions,
        partId: id,
      };

      try {
        const response = await speakingService.patchUpdateQuestionGroup(dataQuestionDetail?.id, body);
        if (response.data.statusCode === 200) {
          toast.success("Update question group success!");
          fetchData();
          onCloseModal();
        }
      } catch (error) {
        console.log("error", error, fetchData);
      }
    }
  };

  const onSaveModal = (e: any) => {
    e.preventDefault();
    handleSubmit(onSubmit)();
  };

  const renderButton = () => {
    return (
      <Stack spacing={2} direction="row" className="justify-center mt-[40px]">
        <ButtonSave icon={<SaveIcon sx={{ fontSize: "20px" }} />} onClick={onSaveModal} />
        <ButtonCancel icon={<BlockIcon sx={{ fontSize: "20px" }} />} onClick={onCloseModal} />
      </Stack>
    );
  };

  const onRemoveQuestion = (index: number) => {
    remove(index);
  };

  return (
    <ModalCreate
      open={openModal}
      onClose={onCloseModal}
      titleModal={
        dataQuestionDetail?.title && openModal.type === "detailQuestion" ? (
          <Typography style={{ fontWeight: "bold" }}>{dataQuestionDetail?.title}</Typography>
        ) : (
          <InputCommon
            id="standard-basic"
            label={!dataQuestionDetail?.title ? "Question group" : ""}
            variant="standard"
            name="title"
            control={control}
            required
            fullWidth
          />
        )
      }
    >
      <form noValidate onSubmit={handleSubmit((data) => onSubmit(data))} autoComplete="off">
        {openModal.type !== "detailQuestion" && (
          <div className="text-end">
            <AddCircleOutlineIcon className="text-[#9155FF] cursor-grab mt-[20px]" onClick={onAddQuestion} />
          </div>
        )}
        {fields.map((field, index) => {
          return (
            <div className="flex items-center mb-5">
              <div key={field.id} className="flex-1">
                <div style={{ border: "1px solid #bcbcbc", marginTop: 10, padding: 20, borderRadius: 6, flex: 1 }}>
                  <InputCommon
                    id="standard-basic"
                    label="Question"
                    variant="standard"
                    name={`questions[${index}].questionText`}
                    control={control}
                    required
                    fullWidth
                    disabled={openModal.type === "detailQuestion"}
                  />
                  {(!!selectFile?.[`questions[${index}].questionAudio`] || dataQuestionDetail?.questions) && (
                    <AudioPlayer
                      preload="none"
                      style={{ borderRadius: "1rem", textAlign: "center", marginTop: 20 }}
                      src={
                        !!selectFile?.[`questions[${index}].questionAudio`]
                          ? URL.createObjectURL(selectFile?.[`questions[${index}].questionAudio`])
                          : AUDIO_URL + dataQuestionDetail?.[`questions[${index}].questionAudio`]
                      }
                      onPlay={(e) => console.log("onPlay")}
                      showJumpControls={false}
                      autoPlayAfterSrcChange={false}
                      loop={false}
                    />
                  )}
                  <input
                    ref={(ref) => (fileRef.current.questionAudio[index] = ref)}
                    className="hidden"
                    type="file"
                    name={`questions[${index}].questionAudio`}
                    onChange={(e) => onFileChange(e, `questions[${index}].questionAudio`)}
                  />
                  {openModal.type !== "detailQuestion" && (
                    <div className="text-end my-3">
                      <ButtonUpload
                        style={{ display: "flex", height: 40 }}
                        titleButton="Upload audio"
                        onClick={() => fileRef.current?.questionAudio[index].click()}
                      />
                    </div>
                  )}
                  <InputCommon
                    id="standard-basic"
                    label="Model answer"
                    variant="standard"
                    name={`questions[${index}].modelAnswer`}
                    control={control}
                    required
                    fullWidth
                    disabled={openModal.type === "detailQuestion"}
                  />
                  {(!!selectFile?.[`questions[${index}].modelAnswerAudio`] || dataQuestionDetail?.questions) && (
                    <AudioPlayer
                      preload="none"
                      style={{ borderRadius: "1rem", textAlign: "center", marginTop: 20, marginBottom: 20 }}
                      src={
                        !!selectFile?.[`questions[${index}].modelAnswerAudio`]
                          ? URL.createObjectURL(selectFile?.[`questions[${index}].modelAnswerAudio`])
                          : AUDIO_URL + dataQuestionDetail?.[`questions[${index}].modelAnswerAudio`]
                      }
                      onPlay={(e) => console.log("onPlay")}
                      showJumpControls={false}
                      autoPlayAfterSrcChange={false}
                      loop={false}
                    />
                  )}
                  <input
                    ref={(ref) => (fileRef.current.modelAnswerAudio[index] = ref)}
                    className="hidden"
                    type="file"
                    name={`questions[${index}].modelAnswerAudio`}
                    onChange={(e) => onFileChange(e, `questions[${index}].modelAnswerAudio`)}
                  />
                  {openModal.type !== "detailQuestion" && (
                    <div className="text-end my-3">
                      <CommonStyles.Button
                        loading={isLoading}
                        sx={{ display: "flex", height: 40 }}
                        onClick={() => fileRef.current?.modelAnswerAudio[index]?.click()}
                      >
                        Upload audio
                      </CommonStyles.Button>
                    </div>
                  )}
                </div>
              </div>
              <div>
                {fields.length > 1 && openModal.type !== "detailQuestion" && (
                  <RemoveCircleOutlineIcon
                    className="text-[#F44335] cursor-grab ml-[20px]"
                    onClick={() => onRemoveQuestion(index)}
                  />
                )}
              </div>
            </div>
          );
        })}
        <TinyMceCommon
          ref={editorRef}
          initialValue={dataQuestionDetail?.explanationText ? dataQuestionDetail?.explanationText : "Explanation text"}
          disabled={openModal.type === "detailQuestion"}
        />
        <div className="my-[15px]">
          <TinyMceCommon
            ref={usefulGrammarRef}
            initialValue={
              dataQuestionDetail?.usefulGrammarNVocab ? dataQuestionDetail?.usefulGrammarNVocab : "Useful grammar"
            }
            disabled={openModal.type === "detailQuestion"}
          />
        </div>
        <TinyMceCommon
          ref={ideaSuggestionRef}
          initialValue={dataQuestionDetail?.ideaSuggestion ? dataQuestionDetail?.ideaSuggestion : "Idea suggestion"}
          disabled={openModal.type === "detailQuestion"}
        />

        {openModal.type !== "detailQuestion" && renderButton()}
      </form>
    </ModalCreate>
  );
};

export default ModalCreateQuestion;
