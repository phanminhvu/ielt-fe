import React, { useEffect, useMemo } from "react";
import Handlebars from "handlebars";
import { useFormikContext } from "formik";
import Timer from "helpers/timer";
import { QuestionItemI } from "../../../../../constants/typeData.types";
interface NoteCompletionI {
  questionBox: string;
  questions: QuestionItemI[];
  displayNumber: number;
  onClickPage: (options: object) => void;
  isView?: boolean;
}

const CODE = "-@X$";

const convertBlankIdToQuestionId = (questionBox = "", blankId: number, questionId: number) => {
  questionBox = questionBox.replace(`{{blank ${blankId}}}`, `{{blank ${questionId}${CODE}}}`);
  return questionBox;
};

const NoteCompletion = (props: NoteCompletionI) => {
  //! State
  const inputDebounce = React.useRef(new Timer());
  const queueAnswers = React.useRef<any>({});
  const { questionBox, questions, displayNumber, onClickPage, isView } = props;
  const { setFieldValue, values }: any = useFormikContext();

  const newQuestionBoxParsed = useMemo(() => {
    let tempQuestionBox = questionBox;
    questions.forEach((el: QuestionItemI) => {
      const { blankNumber, displayNumber } = el.question;
      setFieldValue(`answers[${displayNumber - 1}].questionId`, el.questionId);
      tempQuestionBox = convertBlankIdToQuestionId(tempQuestionBox, Number(blankNumber), Number(displayNumber));
    });

    tempQuestionBox = tempQuestionBox.replaceAll(CODE, "");
    return tempQuestionBox;
  }, [questions, questionBox]);

  useEffect(() => {
    const input = document.querySelector(`[id=input-${displayNumber}]`) as any;
    if (input) {
      input?.focus();
    }
  }, [displayNumber]);

  const questionBoxHTML: any = Handlebars.compile(newQuestionBoxParsed);

  let inputIndex = 0;
  Handlebars.registerHelper("blank", function (blankId: number) {
    inputIndex++;
    const input: Element | any = document.querySelector(`[id=input-${blankId}]`);
    if (input) {
      input.value = isView ? "" : values.answers[blankId - 1].studentAnswer;
    }
    return new Handlebars.SafeString(
      `<span class="noselect"><strong>${blankId}</strong>
      <input class="${inputIndex}" ${isView ? "disabled" : ""}
          key="input-${blankId}"
          value=""
          name="answers[${blankId - 1}].studentAnswer"
          id="input-${blankId}"
          type="text"
          class='${inputIndex}'
        /></span>
      `
    );
  });

  //! Function
  const onChangeInputHandleBars = (e: Event | any) => {
    queueAnswers.current = {
      ...queueAnswers.current,
      [e.target.name]: e.target.value,
    };

    inputDebounce.current.debounce(() => {
      Object.entries(queueAnswers.current).forEach(([question, value]) => {
        setFieldValue(question, value);
      });
    }, 0);
  };

  const onClickInput = (data: any) => {
    const InputClass = data.target.classList[0] - 1;

    onClickPage && onClickPage({ question: InputClass });
  };

  //! Render
  return (
    <>
      <div
        // onClick={(data) => onClickInput(data)}
        onFocus={(event) => onClickInput(event)}
        dangerouslySetInnerHTML={{ __html: questionBoxHTML() }}
        onInput={onChangeInputHandleBars}
      />
    </>
  );
};

export default NoteCompletion;
