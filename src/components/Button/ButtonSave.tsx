import React from "react";
interface ButtonSave {
  sx?: any;
  title?: string;
  icon?: any;
  type?: "submit" | "button" | "reset";
  onClick?: (e?: any) => void;
}
import ButtonCommon from "./index";
const ButtonSave: React.FC<ButtonSave> = ({ title, icon, type, onClick }) => {
  const cssButton = {
    // padding: "10px 100px",
    borderRadius: "8px",
    color: "#ffff",
    fontWeight: 700,
    fontSize: "14px",
    background: "#9155FE",
    "&:hover": {
      background: "#fff",
      color: "#9155FE",
      border: "1px solid #9155FE",
    },
  };
  return (
    <ButtonCommon styleButton={cssButton} type={type} onClick={onClick}>
      {icon} &nbsp;
      {title || "Save"}
    </ButtonCommon>
  );
};

export default ButtonSave;
