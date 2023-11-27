import React from "react";
import { Box, Stack } from "@mui/system";
// ! type
interface Props {
  children?: React.ReactNode;
}
const Container = (props: Props) => {
  const containerContent = {
    padding: "12px",
    border: "1px solid #fff",
    minHeight: "150px",
    bordeRadius: "0 0 12px 12px",
    width: "750px",
  };
  return <Box sx={containerContent}>{props.children}</Box>;
};

export default Container;
