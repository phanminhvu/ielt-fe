import React from "react";
//
interface ButtonBuyNow {
  children?: string;
}
import ButtonCommon from "./index";
const ButtonBuyNow: React.FC<ButtonBuyNow> = ({ children }) => {
  const cssButton = {
    // padding: "10px 100px",
    width: "100%",
    borderRadius: "12px",
    color: "rgb(17, 74, 198)",
    fontWeight: 700,
    fontSize: "14px",
    textTransform: "uppercase",
    background: "rgb(214,227,254)",
    "&:hover": {
      background: "rgb(128,168,255)",
      color: "#fff",
    },
  };
  return <ButtonCommon styleButton={cssButton}>{children}</ButtonCommon>;
};

export default ButtonBuyNow;
