import React from "react";
import Box from "@mui/material/Box";
import { themeCssSx } from "../../../../ThemeCssSx/ThemeCssSx";
//
interface Props {
  children: React.ReactNode;
  handleOpenAnswer?: any;
  event?: any;
  contentRender?: any;
}
const container = {
  padding: "16px 32px",
  border: "1px solid #ccc",
  borderRadius: "16px",
  color: themeCssSx.color.title,
  fontSize: themeCssSx.fontSize.desc,
  fontWeight: "bold",
  cursor: "pointer",
};

const ContentOption = (props: Props) => {
  const { children, handleOpenAnswer, event, contentRender } = props;

  const hanldeEventClick = () => {
    handleOpenAnswer();
    event(contentRender);
  };
  return (
    <Box onClick={hanldeEventClick} sx={container}>
      {props.children}
    </Box>
  );
};

export default ContentOption;
