import { LoadingButton as ButtonMUI, LoadingButtonProps } from "@mui/lab";
interface ButtonI extends LoadingButtonProps {
  children: React.ReactNode;

  icon?: any;
}

const Button = ({ children, icon, ...restProps }: ButtonI) => {
  //! State
  const variant = restProps.variant || "contained";

  //! Render
  return (
    <ButtonMUI variant={variant} {...restProps}>
      {icon}
      {children}
    </ButtonMUI>
  );
};

export default Button;
