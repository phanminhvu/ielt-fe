import React from "react";
interface ButtonCancel {
  title?: string;
  icon?: any;
  onClick?: () => void;
}
import ButtonCommon from "./index";
const ButtonCancel: React.FC<ButtonCancel> = ({ title, icon, onClick }) => {
  const cssButton = {
    borderRadius: "8px",
    color: "#ffff",
    fontWeight: 700,
    fontSize: "14px",
    background: "#f44336",
    "&:hover": {
      background: "#fff",
      color: "#f44336",
      border: "1px solid #f44336",
    },
  };
  return (
    <ButtonCommon styleButton={cssButton} onClick={onClick}>
      {icon} &nbsp;
      {title || "Cancel"}
    </ButtonCommon>
  );
};

export default ButtonCancel;
