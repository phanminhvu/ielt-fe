import React from "react";
import ReactHtmlParser from "react-html-parser";
import Handlebars from "handlebars";
type Props = {
  data?: any;
  question: any;
};

const SentenceCompletetion = (props: Props) => {
  const { data, question } = props;
  Handlebars.registerHelper("blank", function (blankId: any) {
    return new Handlebars.SafeString(
      `<input style={{border:"1px solid #ccc"}} id="input-${blankId}" type="text" value="" maxlength="30">`
    );
  });
  const test: any = Handlebars.compile(data?.question?.questionText);
  return (
    <div>
      <div
        dangerouslySetInnerHTML={{
          __html: test(),
        }}
      ></div>
    </div>
  );
};

export default SentenceCompletetion;
