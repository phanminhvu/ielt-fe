import { useFormikContext } from "formik";
import Handlebars from "handlebars";
import { useRef } from "react";
type Props = {
  data?: any;
};

const SentenceCompletetion = (props: Props) => {
  const { data } = props;
  const inputRef = useRef<any>([]);

  const { handleChange }: any = useFormikContext();

  Handlebars.registerHelper("blank", function (blankId: any) {
    inputRef?.current[blankId]?.focus();
    return new Handlebars.SafeString(
      `<input ref='${(el: any) =>
        (inputRef.current[blankId] =
          el)}' name='answers.[${blankId}].studentAnswer' class="noselect" style={{border:"1px solid #ccc"}} id="input-${blankId}" type="text" value="" maxlength="30">`
    );
  });
  const test: any = Handlebars.compile(data?.question?.questionText || "");

  return (
    <div
      dangerouslySetInnerHTML={{
        __html: test(),
      }}
      onInput={handleChange}
    />
  );
};

export default SentenceCompletetion;
