import { Typography as TypographyMUI, TypographyProps } from "@mui/material";

interface TypographyI extends TypographyProps {
  children: React.ReactNode;
  component?: any;
}

const Typography = ({ children, ...restProps }: TypographyI) => {
  return <TypographyMUI {...restProps}>{children}</TypographyMUI>;
};

export default Typography;
