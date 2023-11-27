import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
    width: "500px",
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

const BootstrapDialogTitle = (props: DialogTitleProps) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle
      sx={{
        m: 0,
        p: 2,
        background: "#9155FF",
        color: "white",
        fontWeight: "bold",
      }}
      {...other}
    >
      {children}
    </DialogTitle>
  );
};

interface ModalI {
  open: boolean;
  toggle: () => void;
  header?: React.ReactNode | string;
  content?: React.ReactNode | string;
  footer?: React.ReactNode | string;
}
export default function Modal({ open, toggle, header, content, footer }: ModalI) {
  return (
    <BootstrapDialog onClose={toggle} aria-labelledby="customized-dialog-title" open={open}>
      <BootstrapDialogTitle id="customized-dialog-title" onClose={toggle}>
        {header}
      </BootstrapDialogTitle>
      <DialogContent dividers>{content}</DialogContent>
      <DialogActions>{footer}</DialogActions>
    </BootstrapDialog>
  );
}
