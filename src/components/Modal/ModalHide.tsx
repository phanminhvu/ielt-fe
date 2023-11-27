import React from "react";
import Modal from "./index";
import HeaderModalHelp from "../../views/Exam/HeaderModalHelp/HeaderModalHelp";
import { Box } from "@mui/material";
import tivi from "assets/image/exam/tivi.png";
import Desc16My15 from "../FontText/Desc16My15";
import ButtonModalSubmit from "../Button/ButtonModalSubmit";
import { makeStyles } from "@mui/styles";
import { textHeaderModal } from "../../constants/constants";
// !type
interface ModalHideI {
  open: boolean;
  styleModal?: object;
  handleCloseModal?: () => void;
}

const useStyles = makeStyles((theme) => {
  return {
    containerContent: {
      background: theme.custom?.background.exam,
      padding: "12px",
      marginTop: "0 !important",
      borderRadius: "0px 0px 12px 12px",
    },
    footer: {
      ...theme.custom?.flexBox.flexJusCenter,
      marginBottom: "16px",
    },
  };
});
const ModalHide = (props: ModalHideI) => {
  const { open, styleModal, handleCloseModal } = props;
  const classes = useStyles();

  const backdrop = "#000000 !important";
  return (
    <>
      <Modal open={open} styleModal={styleModal} backdrop={backdrop}>
        <HeaderModalHelp
          handleCloseModal={handleCloseModal}
          imageTitle={tivi}
          textTitle={textHeaderModal.screenHidden}
        />
        <Box className={classes.containerContent}>
          <Desc16My15>Your answers have been stored.</Desc16My15>
          <Desc16My15>Please note that the clock is still running. The time has not been paused.</Desc16My15>
          <Desc16My15>If you wish to leave the room, please tell your invigilator.</Desc16My15>
          <Desc16My15>Click the button below to go back to your test.</Desc16My15>
          <Box className={classes.footer}>
            <ButtonModalSubmit handleCloseModal={handleCloseModal}>Resume test</ButtonModalSubmit>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default ModalHide;
