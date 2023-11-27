import React from "react";
// ! type
interface Props {
  handleCloseModal?: () => void;
}
const BtnHelpOk = (props: Props) => {
  const { handleCloseModal } = props;
  const btnClose = {
    color: "#1e415b",
    fontSize: "15.4px",
    fontWeight: 700,
    margin: "0 auto 16px",
    padding: " 6px 16px",
    textShadow: " 0 1px 1px #fff ",
    boxShadow: "0 1px 1px rgb(0 0 0 / 50%) ",
    borderRadius: "5px",
    border: " none",
    background: "linear-gradient(180deg,#f6f6f6,#bebcbd)!important",
    cursor: "pointer",
  };
  return (
    <>
      <button onClick={handleCloseModal} style={btnClose}>
        OK
      </button>
      ;
    </>
  );
};

export default BtnHelpOk;
