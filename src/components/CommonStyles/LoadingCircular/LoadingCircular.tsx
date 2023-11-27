import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => {
  return {
    cirularIcon: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "500px",
    },
  };
});
export default function LoadingCircular() {
  const classes = useStyles();
  return (
    <Box className={classes.cirularIcon}>
      <CircularProgress size={40} color="primary" />
    </Box>
  );
}
