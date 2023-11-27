import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Text from "components/Typography/index";
import { makeStyles } from "@mui/styles";
import CommonStyles from "components/CommonStyles";
// ! type
interface Data {
  content?: string;
}

const useStyles = makeStyles((theme) => {
  return {
    card: {
      padding: "12px 10px",
      boxShadow: theme.custom?.boxShadow.exercises,
      background: theme.custom?.background.white,
    },
    title: {
      color: theme.palette.text.primary,
      fontWeight: "bold !important",
    },
  };
});

const TypeQuestions = ({ content }: Data) => {
  const classes = useStyles();
  //! Render
  return (
    <>
      {/* <Box className={classes.card}>
      <Stack direction="row" spacing={4} sx={{ alignItems: "center" }}>
        <CommonStyles.Typography component="p" variant="desc16" className={classes.title}>
          {content}
        </CommonStyles.Typography>
      </Stack>
    </Box> */}
    </>
  );
};

export default TypeQuestions;
