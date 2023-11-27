import { Button } from "@mui/material";

export interface Props {
  titleButton: string;
  type?: "button" | "submit" | "reset" | undefined;
  className?: string;
  onClick?: () => any;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  icon?: any;
  disabled?: boolean;
}

const ButtonUpload = (props: Props) => {
  const { titleButton, type, className, onClick, style, icon, disabled, children } = props;
  return (
    <Button variant="contained" type={type} className={className} onClick={onClick} style={style} disabled={disabled}>
      {icon}
      <label htmlFor="image" style={{ cursor: "grab" }}>
        {titleButton}
      </label>
      {children}
    </Button>
  );
};

export default ButtonUpload;
