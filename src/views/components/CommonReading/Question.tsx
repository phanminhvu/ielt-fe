import InputCommon from "components/Input";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { Control } from "react-hook-form/dist/types";

const Question = ({
  index,
  indexQuestion,
  control,
  openModal,
  field,
  fieldsAnswer,
  removeAnswer,
}: //   AddAnswer,
{
  index: number;
  indexQuestion: number;
  control: Control<any, any>;
  openModal: any;
  field: any;
  fieldsAnswer: any;
  removeAnswer: any;
  //   AddAnswer: any;
}) => {
  const onRemoveAnswer = (index: number) => {
    removeAnswer(index);
  };
  //   const onAddAnswer = () => {
  //     AddAnswer({ name: "" });
  //   };
  return (
    <div className="flex items-center" key={field?.id}>
      <InputCommon
        key={field.id}
        id="standard-basic"
        label="Question"
        variant="standard"
        name={`questions[${indexQuestion}].options[${index}]`}
        control={control}
        required
        fullWidth
        disabled={openModal.type === "detailQuestion"}
      />
      {fieldsAnswer.length > 1 && openModal.type !== "detailQuestion" && (
        <RemoveCircleOutlineIcon
          className="text-[#F44335] cursor-grab ml-[20px]"
          onClick={() => onRemoveAnswer(index)}
        />
      )}
    </div>
  );
};

export default Question;
