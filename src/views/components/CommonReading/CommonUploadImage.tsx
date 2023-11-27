import CommonStyles from "components/CommonStyles";
import InputCommon from "components/Input";
import { MutableRefObject, useRef } from "react";
import { Control } from "react-hook-form/dist/types";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { IMAGE_URL } from "constants/constants";

const CommonUploadImage = ({
  openModal,
  fields,
  control,
  onAddQuestion,
  onRemoveQuestion,
  dataQuestionDetail,
  isLoading,
  selectFile,
  onFileChange,
  ref,
}: {
  openModal: any;
  fields: Record<"id", string>[];
  control: Control<any, any>;
  onAddQuestion: () => void;
  onRemoveQuestion: (index: number) => void;
  dataQuestionDetail?: any;
  isLoading?: boolean;
  selectFile?: any;
  onFileChange: (event: any) => Promise<void>;
  ref?: MutableRefObject<any>;
}) => {
  const fileRef = useRef<any>();
  const handleClick = () => {
    fileRef.current.click();
  };
  return (
    <>
      <input ref={fileRef} className="hidden" type="file" name="directionAudio" onChange={onFileChange} />
      {(selectFile || dataQuestionDetail?.image) && (
        <img
          id="blah"
          src={selectFile ? URL.createObjectURL(selectFile) : `${IMAGE_URL}/${dataQuestionDetail?.image}`}
          alt="image"
          style={{ width: "100%", maxHeight: 400, marginTop: 20 }}
        />
      )}
      <CommonStyles.Button
        loading={isLoading}
        sx={{ display: "flex", height: 40 }}
        onClick={handleClick}
        style={{ display: "flex", height: 30, marginBottom: 10, marginTop: 10 }}
      >
        Upload image
      </CommonStyles.Button>
      {openModal.type !== "detailQuestion" && (
        <div className="text-end">
          <AddCircleOutlineIcon className="text-[#9155FF] cursor-grab mt-[20px]" onClick={onAddQuestion} />
        </div>
      )}
      {fields.map((field, index) => {
        return (
          <div className="flex items-end justify-between mt-2">
            <InputCommon
              control={control}
              id="standard-basic"
              label="Section"
              variant="standard"
              name={`questions[${index}].questionText`}
              disabled={openModal.type === "detailQuestion"}
            />
            <InputCommon
              control={control}
              id="standard-basic"
              label="Answer"
              variant="standard"
              name={`questions[${index}].answer`}
              disabled={openModal.type === "detailQuestion"}
              style={{ marginLeft: 20 }}
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
    </>
  );
};

export default CommonUploadImage;
