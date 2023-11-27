import Modal from "./index";
import HeaderModalHelp from "../../views/Exam/HeaderModalHelp/HeaderModalHelp";
import Navigate from "../../views/Exam/HeaderModalHelp/ContentNavigate/Navigate";
import { Box } from "@mui/material";
import imgPeople from "assets/image/exam/test-help/people-logo.png";
import { makeStyles } from "@mui/styles";
import { textHeaderModal } from "../../constants/constants";

// !type
interface ModalHelpExamI {
  open: boolean;
  styleModal?: object;
  handleCloseModal?: () => void;
  typeExam?: string;
}

const useStyles = makeStyles((theme) => {
  return {
    containerContent: {
      background: theme.custom?.background.exam,
      padding: "12px",
      marginTop: "0 !important",
      borderRadius: "0px 0px 12px 12px",
    },
  };
});

const ModalHelpExam = (props: ModalHelpExamI) => {
  //! State

  const { open, styleModal, handleCloseModal, typeExam } = props;
  const classes = useStyles();

  //! Render
  return (
    <>
      <Modal open={open} styleModal={styleModal}>
        <HeaderModalHelp handleCloseModal={handleCloseModal} imageTitle={imgPeople} textTitle={textHeaderModal.help} />
        <Box className={classes.containerContent}>
          <Navigate handleCloseModal={handleCloseModal} typeExam={typeExam} />
        </Box>
      </Modal>
    </>
  );
};

export default ModalHelpExam;
