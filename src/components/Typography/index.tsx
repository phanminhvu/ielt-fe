import * as React from "react";
import { TypographyProps } from "@mui/system";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export interface Props extends TypographyProps {
  children: React.ReactNode;
  sx?: object;
  className?: string;
}

// tương ứng với Title

// tương ứng với TitleIntroPage
const TitleIntroPage = (props: Props) => {
  const { children, ...rest } = props;
  return (
    <Typography component="p" variant="titleIntroPage" {...rest}>
      {props.children}
    </Typography>
  );
};

// tương ứng với Title
const Title = (props: Props) => {
  const { children, ...rest } = props;

  return (
    <Typography component="p" variant="title" {...rest}>
      {props.children}
    </Typography>
  );
};
const Title32bold = (props: Props) => {
  const { children, ...rest } = props;

  return (
    <Typography {...rest} component="p" variant="title32bold">
      {props.children}
    </Typography>
  );
};
// Tương ứng với CardTitle
const CardTitle = (props: Props) => {
  const { children, ...rest } = props;
  return (
    <Typography component="p" variant="cardTitle" {...rest}>
      {props.children}
    </Typography>
  );
};

// tương ứng với TitleSecond
const SubTitle = (props: Props) => {
  const { children, ...rest } = props;

  return (
    <Typography component="p" variant="subtitle" {...rest}>
      {props.children}
    </Typography>
  );
};
const SubIntroPage = (props: Props) => {
  const { children, ...rest } = props;
  return (
    <Typography component="p" variant="subIntroPage" {...rest}>
      {props.children}
    </Typography>
  );
};
const DescSmallCard = (props: Props) => {
  const { children, ...rest } = props;
  return (
    <Typography component="p" variant="descSmallCard" {...rest}>
      {props.children}
    </Typography>
  );
};
const DescMedium = (props: Props) => {
  const { children, ...rest } = props;
  return (
    <Typography component="p" variant="descMedium" {...rest}>
      {props.children}
    </Typography>
  );
};
const Sub20Bold = (props: Props) => {
  const { children, ...rest } = props;
  return (
    <Typography component="p" variant="sub20Bold" {...rest}>
      {props.children}
    </Typography>
  );
};
const DescNormal = (props: Props) => {
  const { children, ...rest } = props;
  return (
    <Typography component="p" variant="descNormal" {...rest}>
      {props.children}
    </Typography>
  );
};
const Desc14medium = (props: Props) => {
  const { children, ...rest } = props;
  return (
    <Typography component="p" variant="desc14medium" {...rest}>
      {props.children}
    </Typography>
  );
};
// tương ứng với TextSubCard
const SubCardTitle = (props: Props) => {
  const { children, ...rest } = props;

  return (
    <Typography component="p" variant="subCardTitle" {...rest}>
      {props.children}
    </Typography>
  );
};
// font size 16px
const Desc16 = (props: Props) => {
  const { children, ...rest } = props;

  return (
    <Typography component="p" variant="desc16" {...rest}>
      {props.children}
    </Typography>
  );
};
// font size 14px
const DescSmall = (props: Props) => {
  const { children, ...rest } = props;
  return (
    <Typography component="p" variant="descSmall" {...rest}>
      {props.children}
    </Typography>
  );
};

const Text = {
  TitleIntroPage,
  Title,
  Title32bold,
  SubTitle,
  CardTitle,
  SubCardTitle,
  SubIntroPage,
  DescSmallCard,
  DescMedium,
  Sub20Bold,
  DescNormal,
  Desc14medium,
  Desc16,
  DescSmall,
};

export default Text;
