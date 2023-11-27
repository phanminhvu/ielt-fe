import React from "react";
// ! type
interface Props {
  children?: string;
  handleCloseModal?: () => void;
}
const ButtonModalSubmit = (props: Props) => {
  const { children, handleCloseModal } = props;
  const btn = {
    color: "#1e415b",
    fonnSize: "15.4px",
    fontWeight: 700,
    margin: "0 auto 16px!important",
    padding: "6px 16px",
    background: "transparent",
    textShadow: "0 1px 1px #fff",
    boxShadow: "0 1px 1px rgb(0 0 0 / 50%)",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
  };
  return (
    <>
      <button onClick={handleCloseModal} style={btn}>
        {children}
      </button>
    </>
  );
};

export default ButtonModalSubmit;
