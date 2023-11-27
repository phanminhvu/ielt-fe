import React from "react";
//
import Modal from "@mui/material/Modal";
import { Box } from "@mui/system";

// !type
interface Props {
  openModal?: any;
  handleClose?: any;
  image?: any;
}
const modal = {
  width: "100vw",
  position: "absolute",
  height: "100vh",
  top: 0,
  zIndex: 9999,
  background: "rgba(0,0,0,0.5)",
};
const container = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  zIndex: 9999,
  height: "500px",
};
const imageCss = {
  width: "100%",
  height: "100%",
};
const ModalImage = ({ openModal, handleClose, image }: Props) => {
  return (
    <Box sx={modal} onClick={() => handleClose()}>
      <Box sx={container}>
        <img style={imageCss} src={image} alt="anh dau roi" />
      </Box>
    </Box>
  );
};

export default ModalImage;
