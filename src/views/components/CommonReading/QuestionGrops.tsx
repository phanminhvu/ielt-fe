import InputCommon from "components/Input";
import { Control } from "react-hook-form/dist/types";
import { Box } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useFieldArray } from "react-hook-form";
import Question from "./Question";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

const QuestionGrops = ({
  fieldQuestion,
  indexQuestion,
  control,
  openModal,
  questionType,
  onRemoveQuestion,
  fields,
}: {
  fieldQuestion: Record<"id", string>;
  indexQuestion: number;
  control: Control<any, any>;
  openModal: any;
  questionType: string;
  onRemoveQuestion: (index: number) => void;
  fields: Record<"id", string>[];
}) => {
  const { append: AddAnswer, fields: fieldsAnswer, remove: removeAnswer } = useFieldArray({ control, name: "answer" });
  const onAddAnswer = () => {
    AddAnswer({ name: "" });
  };
  return (
    <div key={fieldQuestion.id} className="flex items-center">
      <div style={{ border: "1px solid #bcbcbc", marginTop: 10, padding: 20, borderRadius: 6, flex: 1 }}>
        {fieldsAnswer.length === 0 ? (
          <InputCommon
            id="standard-basic"
            label="Question"
            variant="standard"
            name={`questions.questionText`}
            control={control}
            required
            fullWidth
            disabled={openModal.type === "detailQuestion"}
          />
        ) : (
          fieldsAnswer.map((field: any, index: number) => {
            return (
              <Question
                indexQuestion={indexQuestion}
                control={control}
                openModal={openModal}
                field={field}
                index={index}
                fieldsAnswer={fieldsAnswer}
                removeAnswer={removeAnswer}
              />
            );
          })
        )}
        <div className="text-end">
          <AddCircleOutlineIcon className="text-[#9155FF] cursor-grab mt-[20px]" onClick={onAddAnswer} />
        </div>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { width: "25ch", marginRight: 1 },
          }}
          noValidate
          autoComplete="off"
        >
          <InputCommon
            control={control}
            id="standard-basic"
            label="Correct answer"
            variant="standard"
            name={`questions[0].answer`}
            disabled={openModal.type === "detailQuestion"}
          />
        </Box>
      </div>
      {fields.length > 1 && openModal.type !== "detailQuestion" && (
        <RemoveCircleOutlineIcon
          className="text-[#F44335] cursor-grab ml-[20px]"
          onClick={() => onRemoveQuestion(indexQuestion)}
        />
      )}
    </div>
  );
};

export default QuestionGrops;
