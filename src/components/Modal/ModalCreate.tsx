import * as React from "react";
import { Modal as ModalMui, Box, Button as ButtonMui, ButtonProps, Stack, StackProps } from "@mui/material";
import Text from "components/Typography";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

export interface Props {
  children?: React.ReactNode;
  sx?: object;
  onClose: () => void;
  open: boolean;
  titleModal?: string | React.ReactElement;
}

interface IProps {
  children?: React.ReactNode;
  sx?: object;
}

interface ButtonMuiProps extends ButtonProps {
  cancel: string;
  confirm: string;
  onCancel: () => void;
  onConfirm: () => void;
}

interface StackMuiProps extends StackProps {
  children: React.ReactNode;
  label?: string;
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60%",
  bgcolor: "background.paper",
  borderRadius: "5px",
  boxShadow: 24,
  px:4,
  py:2,
  overflow: "scroll",
  height: "100%",
  maxHeight: 700,
};

function ModalCreate(props: Props) {
  // !Destructure props
  const { children, onClose, open, titleModal } = props;

  // !State

  return (
    <ModalMui
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Stack spacing={1} sx={style}>
        <div className="flex items-center mb-[10px] justify-between">
          {titleModal}
          <div className="text-end cursor-grab">
            <CloseOutlinedIcon onClick={onClose} />
          </div>
        </div>
        {children}
      </Stack>
    </ModalMui>
  );
}

const Title = (props: IProps) => {
  return <Text.CardTitle>{props.children}</Text.CardTitle>;
};

const Content = (props: IProps) => {
  return <Text.SubCardTitle>{props.children}</Text.SubCardTitle>;
};

const Button: React.FC<ButtonMuiProps> = (props) => {
  const { children, cancel, confirm, onCancel, onConfirm, ...rest } = props;
  return (
    <Stack direction="row" spacing={1} sx={{ display: "flex", justifyContent: "flex-end" }}>
      <ButtonMui onClick={onCancel} variant="outlined" {...rest}>
        {cancel}
      </ButtonMui>
      <ButtonMui onClick={onConfirm} variant="contained" {...rest}>
        {confirm}
      </ButtonMui>
    </Stack>
  );
};

ModalCreate.Title = Title;
ModalCreate.Content = Content;
ModalCreate.Button = Button;

export default ModalCreate;
