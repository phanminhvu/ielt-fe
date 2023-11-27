import * as React from "react";
import { Modal as ModalMui, Box, Button as ButtonMui, ButtonProps, Stack, StackProps } from "@mui/material";
import Text from "components/Typography";

export interface ModalI {
  children?: React.ReactNode;
  sx?: object;
  onClose?: () => void;
  open: boolean;
  width?: string;
  styleModal?: object;
  backdrop?: string;
}

function Modal(props: ModalI) {
  //! Destructure props
  const { children, onClose, open, width, styleModal, backdrop } = props;

  // !State
  const styleCss = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: width,
    bgcolor: "background.paper",
    borderRadius: "16px",
    boxShadow: 24,
    border: "none",
    zIndex: 999,
  };
  const handleBackdrop = () => {
    if (backdrop) {
      return { background: `${backdrop}` };
    }
    return { background: "rgba(0,0,0,0.2)" };
  };
  return (
    <ModalMui
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={handleBackdrop()}
    >
      <Stack spacing={1} sx={styleCss} style={styleModal}>
        {children}
      </Stack>
    </ModalMui>
  );
}
export default Modal;
