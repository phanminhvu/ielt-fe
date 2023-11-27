import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import InputCommon from "components/Input";
import { Control } from "react-hook-form/dist/types";
import TinyMceCommon from "components/TinyMceCommon";
import { MutableRefObject } from "react";

const CommonReading = ({
  openModal,
  fields,
  control,
  onAddQuestion,
  onRemoveQuestion,
  blankInput,
  editorRef,
  dataQuestionDetail,
  textType,
  label,
}: {
  openModal: any;
  fields: Record<"id", string>[];
  control: Control<any, any>;
  onAddQuestion: () => void;
  onRemoveQuestion: (index: number) => void;
  blankInput?: Boolean;
  editorRef?: MutableRefObject<any>;
  dataQuestionDetail?: any;
  textType?: string;
  label?: Boolean;
}) => {
  return (
    <>
      {blankInput ? (
        <div className="mt-5">
          <TinyMceCommon
            ref={editorRef}
            initialValue={dataQuestionDetail?.questionBox ? dataQuestionDetail?.questionBox : textType}
            disabled={openModal.type === "detailQuestion"}
          />
          {openModal.type !== "detailQuestion" && (
            <div className="text-end">
              <AddCircleOutlineIcon className="text-[#9155FF] cursor-grab mt-[20px]" onClick={onAddQuestion} />
            </div>
          )}
          {fields.map((field, index) => {
            return (
              <div className="flex items-end justify-between mt-2 gap-2">
                {label ? (
                  <InputCommon
                    control={control}
                    id="standard-basic"
                    label="Section"
                    variant="standard"
                    name={`questions[${index}].questionText`}
                    disabled={openModal.type === "detailQuestion"}
                  />
                ) : (
                  <div style={{ marginRight: 20 }}>
                    <InputCommon
                      control={control}
                      id="standard-basic"
                      label="Blank number"
                      variant="standard"
                      name={`questions[${index}].blankNumber`}
                      disabled={openModal.type === "detailQuestion"}
                    />
                  </div>
                )}

                <InputCommon
                  control={control}
                  id="standard-basic"
                  label="Answer"
                  variant="standard"
                  name={`questions[${index}].answer`}
                  disabled={openModal.type === "detailQuestion"}
                />
                {fields.length > 1 && openModal.type !== "detailQuestion" && (
                  <RemoveCircleOutlineIcon
                    className="text-[#F44335] cursor-grab ml-[20px]"
                    onClick={() => onRemoveQuestion(index)}
                  />
                )}
              </div>
            );
          })}
        </div>
      ) : (
        <>
          {openModal.type !== "detailQuestion" && (
            <div className="text-end">
              <AddCircleOutlineIcon className="text-[#9155FF] cursor-grab mt-2" onClick={onAddQuestion} />
            </div>
          )}
          {fields.map((field, index) => {
            return (
              <div className="flex items-center justify-between mt-2">
                <div style={{ border: "1px solid #bcbcbc", marginTop: 10, padding: 20, borderRadius: 6, flex: 1 }}>
                  <InputCommon
                    control={control}
                    id="standard-basic"
                    label="Question"
                    variant="standard"
                    name={`questions[${index}].questionText`}
                    disabled={openModal.type === "detailQuestion"}
                    style={{ marginRight: 20 }}
                  />
                  <InputCommon
                    control={control}
                    id="standard-basic"
                    label="Correct answer"
                    variant="standard"
                    name={`questions[${index}].answer`}
                    disabled={openModal.type === "detailQuestion"}
                    style={{ marginTop: 10 }}
                  />
                </div>
                {fields.length > 1 && openModal.type !== "detailQuestion" && (
                  <RemoveCircleOutlineIcon
                    className="text-[#F44335] cursor-grab ml-[20px]"
                    onClick={() => onRemoveQuestion(index)}
                  />
                )}
              </div>
            );
          })}
        </>
      )}
    </>
  );
};

export default CommonReading;
