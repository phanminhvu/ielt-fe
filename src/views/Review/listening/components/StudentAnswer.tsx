import React from "react";
// ! type
interface Props {
  answer?: any;
  numberOrder?: any;
}
const StudentAnswer = (props: Props) => {
  const { answer, numberOrder } = props;
  const container = {
    display: "flex",
    marginBottom: "10px",
    alignItems: "center",
    width: "50%",
    gap: 8,
  };
  const numberOrderCss = {
    fontWeight: 700,
    marginRight: "10px",
  };
  const inputStyle = {
    width: "300px",
    height: "40px",
    paddingLeft: "10px",
  };
  return (
    <>
      <div style={container}>
        <div style={numberOrderCss} className="">
          {`${numberOrder}.`}
        </div>
        <input style={inputStyle} type="text" value={answer} />
      </div>
    </>
  );
};

export default StudentAnswer;
