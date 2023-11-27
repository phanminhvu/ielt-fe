import React from "react";
import { Box, Stack } from "@mui/system";
import Text from "components/Typography/index";
import { themeCssSx } from "ThemeCssSx/ThemeCssSx";
interface Props {
  image?: any;
  text?: string;
}
const Title = (props: Props) => {
  const { image, text } = props;
  const containerConfirm = {
    ...themeCssSx.flexBox.flexAlignCenter,
  };
  const textConfirm = {
    color: "#fff",
    textShadow: "0 1px 2px rgb(0 0 0 / 75%)",
    fontWeight: 700,
  };
  return (
    <>
      <Stack direction="row" spacing={2} sx={containerConfirm}>
        <img src={image} alt="" style={{ marginLeft: "10px" }} />
        <Text.Desc16 sx={textConfirm}>{text}</Text.Desc16>
      </Stack>
    </>
  );
};

export default Title;
