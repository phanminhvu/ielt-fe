import React from "react";
import Box from "@mui/material/Box";
//
interface Props {
  children?: React.ReactNode;
}
const container = {
  width: "100%",
  padding: "28px 32px",
  background: "#f6475a",
  borderRadius: "16px",
  fontSize: "24px",
  fontWeight: "bold",
  color: "#fff",
};
const TitleRight = (props: Props) => {
  return <Box sx={container}>{props.children}</Box>;
};

export default TitleRight;
