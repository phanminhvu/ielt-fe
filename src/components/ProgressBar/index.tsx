import * as React from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import { makeStyles } from "@mui/styles";
// import { makeStyles } from "@mui/material";

export interface Props {
  isVisible: boolean;
}

// const useStyles = makeStyles((theme: any) => {
//   return {
const customLoading = {
  //   width: "100%",
  //   height: "100vh !important",
  //   zIndex: "10000 !important",
  //   position: "fixed !important",
  //   top: "0px !important",
  //   left: "0 !important",
  //   overflow: "hidden !important",
  //   display: "flex !important",
  //   justifyContent: "center !important",
  //   alignItems: "center !important",
  //   backgroundColor: "#fff !important",
  //   opacity: "0.5 !important",
};
//   };
// });

const ProgressBar = (props: Props) => {
  const { isVisible } = props;

  //   const classes = useStyles();

  return (
    <>
      {isVisible && (
        <Box sx={{ marginBottom: "20px" }}>
          <LinearProgress />
        </Box>
      )}
    </>
  );
};
export default ProgressBar;
