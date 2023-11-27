import { useEffect, useMemo } from "react";
import { useFormikContext } from "formik";
import Handlebars from "handlebars";
import { QuestionItemI } from "../../../constants/typeData.types";
interface NoteCompletionI {
  questionBox: string;
  displayNumber: number;
  questions: QuestionItemI[];
  onClickPage?: (option: object) => void;
  isView?: boolean;
  getTextEachPart?: (text: string) => void;
  passageTextWithHighlightTexted?: string;
}

const CODE = "-@X$";

const convertBlankIdToQuestionId = (questionBox = "", blankId: number, questionId: number) => {
  questionBox = questionBox.replace(`{{blank ${blankId}}}`, `{{blank ${questionId}${CODE}}}`);
  return questionBox;
};

const QuestionBox = (props: NoteCompletionI) => {
  const {
    questionBox,
    questions,
    displayNumber,
    onClickPage,
    isView,
    getTextEachPart,
    passageTextWithHighlightTexted,
  } = props;
  const { handleChange, values, setFieldValue }: any = useFormikContext();
  const newQuestionBoxParsed = useMemo(() => {
    let tempQuestionBox = questionBox;
    questions?.forEach((el) => {
      const { blankNumber, displayNumber } = el.question;
      setFieldValue(`answers[${displayNumber - 1}].questionId`, el.questionId);
      tempQuestionBox = convertBlankIdToQuestionId(tempQuestionBox, Number(blankNumber), Number(displayNumber));
    });

    tempQuestionBox = tempQuestionBox.replaceAll(CODE, "");
    return tempQuestionBox;
  }, [questions, questionBox]);

  useEffect(() => {
    const input: Element | any = document.querySelector(`[id=input-${displayNumber}]`);
    if (input) {
      input?.focus();
    }
  }, [displayNumber]);

  useEffect(() => {
    getTextEachPart && getTextEachPart(newQuestionBoxParsed);
  }, []);

  let inputIndex = 0;
  Handlebars.registerHelper("blank", function (blankId: number) {
    inputIndex++;
    const input: any = document.querySelector(`[id=input-${blankId}]`);
    if (input) {
      input.value = isView ? "" : values.answers[blankId - 1].studentAnswer;
    }
    return new Handlebars.SafeString(
      `<span class="noselect">
      <strong>${blankId}</strong> <input class="${inputIndex}" ${isView ? "disabled" : ""}  name="answers.[${
        blankId - 1
      }].studentAnswer"
       id="input-${blankId}" type="text" maxlength="30">
      </span>`
    );
  });

  const onClickInput = (data: Event | any) => {
    const inputIdx: number = data.target.getAttribute("class") - 1;
    onClickPage && onClickPage({ question: inputIdx });
    // onScannerText(data);
  };
  const onFocusInput = (event: Event | any) => {
    const inputIdx: number = event.target.getAttribute("class") - 1;
    onClickPage && onClickPage({ question: inputIdx });
  };

  const textRender = passageTextWithHighlightTexted ? passageTextWithHighlightTexted : newQuestionBoxParsed;
  const test: any = Handlebars.compile(textRender);

  return (
    <>
      <div
        onClick={(data) => onClickInput(data)}
        onFocus={(event) => onFocusInput(event)}
        dangerouslySetInnerHTML={{ __html: test() }}
        onInput={handleChange}
      />
    </>
  );
};

export default QuestionBox;
