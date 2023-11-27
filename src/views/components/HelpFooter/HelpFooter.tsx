import React from "react";
import { Box, Stack } from "@mui/system";
import { themeCssSx } from "../../../ThemeCssSx/ThemeCssSx";
import Text from "../../../components/Typography/index";

// ! type
interface Props {
  textHelp?: string;
  image?: string;
}
const warningUser = {
  ...themeCssSx.flexBox.flexAlignCenter,
  mt: "15px",
};
const HelpFooter = (props: Props) => {
  const { image, textHelp } = props;
  return (
    <>
      <Stack direction="row" spacing={1} sx={warningUser}>
        <img src={image} alt="" style={{ width: "20px" }} />
        <Text.Desc16>{textHelp}</Text.Desc16>
      </Stack>
    </>
  );
};

export default HelpFooter;
