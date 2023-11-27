import React from "react";
import { Box } from "@mui/material";
import Title from "views/components/Title/Title";
import imgClose from "assets/image/exam/test-help/img-close.png";
import { themeCssSx } from "ThemeCssSx/ThemeCssSx";
import { makeStyles } from "@mui/styles";
// ! type
interface Props {
  handleCloseModal?: () => void;
  textTitle: string;
  imageTitle: string;
}

const useStyles = makeStyles((theme) => {
  return {
    container: {
      background: theme.palette.text.primary,
      borderRadius: "12px 12px 0px 0px",
      ...theme.custom?.flexBox.flexBetweenCenter,
      position: "relative",
    },
    title: {
      position: "absolute",
      top: "-7px",
    },
    close: {
      padding: "8px 20px",
      cursor: "pointer",
      ...theme.custom?.flexBox.flexAlignItemsCenter,
    },
    imgEventClose: {
      width: "20px",
    },
  };
});

const HeaderModalHelp = ({ handleCloseModal, textTitle, imageTitle }: Props) => {
  //! State
  const classes = useStyles();

  //! Render
  return (
    <>
      <Box className={classes.container}>
        <Box className={classes.title}>
          <Title image={imageTitle} text={textTitle} />
        </Box>
        <Box></Box>
        <Box onClick={handleCloseModal} className={classes.close}>
          <img className={classes.imgEventClose} src={imgClose} alt="" />
        </Box>
      </Box>
    </>
  );
};

export default HeaderModalHelp;
