import { useFormikContext } from "formik";
import Handlebars from "handlebars";
import { useCallback, useEffect, useMemo } from "react";
import { QuestionItemI } from "../../../constants/typeData.types";
interface SentenceCompletionI {
  questionItem: QuestionItemI;
  displayNumber: number;
  onClickPage?: (option: object) => void;
  isView?: boolean;
}

const SentenceCompletetion = (props: SentenceCompletionI) => {
  //! State
  const { questionItem, displayNumber, onClickPage, isView } = props;

  const displayNumberI = Number(questionItem.question.displayNumber);
  // console.log("displayNumberI", displayNumberI);

  const text = questionItem.question.questionText;

  const { handleChange, values, setFieldValue }: any = useFormikContext() ?? {};
  // console.log("values", values);

  useEffect(() => {
    let input = document.getElementsByClassName(`${displayNumber}`) as Element | any;
    if (input) {
      input[0]?.focus();
    }
  }, [displayNumber]);

  let inputIndex = 0;

  Handlebars.registerHelper("blank", function (blankId: number, option) {
    // console.log("blankId", blankId);

    const questionId = option.data.root;
    inputIndex++;
    const input: any = document.getElementById(`${blankId}`);

    if (input) {
      input.value = isView ? "" : values.answers?.[displayNumberI - 1]?.studentAnswer;

      values?.answers?.[displayNumberI - 1]?.questionId === questionId;
    }

    return new Handlebars.SafeString(
      `<span class="noselect"><strong>${questionItem?.question?.displayNumber}</strong> <input ${
        isView ? "disabled" : ""
      } class="${displayNumberI}" name='answers.[${
        displayNumberI - 1
      }].studentAnswer' style={{border:"1px solid #ccc"}} id="${blankId}" type="text" value="" maxlength="30"></span>`
    );
  });
  const test: any = Handlebars.compile(text || "");

  const onClickInput = (data: any) => {
    const inputIdx: number = data.target.getAttribute("id") - 1;

    onClickPage && onClickPage({ question: inputIdx });
    setFieldValue(`answers[${displayNumberI - 1}].questionId`, questionItem.questionId);
  };

  //! Render
  return (
    <div
      key={questionItem.questionId}
      onClick={(data) => onClickInput(data)}
      dangerouslySetInnerHTML={{
        __html: test(questionItem.questionId),
      }}
      onInput={handleChange}
    />
  );
};

export default SentenceCompletetion;
