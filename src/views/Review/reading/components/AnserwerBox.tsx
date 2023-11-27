import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  answer: {
    border: "1px solid green",
    padding: "8px 16px",
    borderRadius: "5px",
    minWidth: "100px",
    height: "35px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));
type Props = {
  children: React.ReactNode;
};

const AnserwerBox = (props: Props) => {
  const classes = useStyles();
  const { children } = props;
  return <div className={classes.answer}>{children}</div>;
};

export default AnserwerBox;
