import { makeStyles } from "@mui/styles";
import { TextField, Textarea } from "components/Textfield";
import { FastField, useFormikContext } from "formik";
import React from "react";
import Text from "components/Typography/index";

const useStyles = makeStyles((theme) => ({
  container: {
    border: "1px solid #ccc",
    borderRadius: 5,
    width: "100%",
    height: "100%",
    padding: 8,
  },
}));
type Props = {
  groupSelected?: any;
  partRenderSelected: any;
};

const Writing = (props: Props) => {
  const classes = useStyles();
  const { groupSelected, partRenderSelected } = props;

  return (
    <>
      {groupSelected === 0 && (
        <div className={classes.container}>
          <Text.CardTitle sx={{ pb: "20px" }}>My answer</Text.CardTitle>
          <p>{partRenderSelected?.studentAnswer}</p>
        </div>
      )}
      {groupSelected === 1 && (
        <div className={classes.container}>
          <Text.CardTitle sx={{ pb: "20px" }}>My answer</Text.CardTitle>
          <p>{partRenderSelected?.studentAnswer}</p>
        </div>
      )}
    </>
  );
};

export default Writing;
