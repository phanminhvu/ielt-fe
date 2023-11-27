import React from "react";
//
import Card from "@mui/material/Card";
// ! type
interface Props {
  children?: React.ReactNode;
}
const CardView = (props: Props) => {
  const card = {
    width: "440px",
    p: "40px 32px",
    borderRadius: "32px",
    boxShadow: "rgba(0, 0, 0, 0.10) 0px 5px 15px",
  };
  const { children } = props;
  return <Card sx={card}>{children}</Card>;
};

export default CardView;
