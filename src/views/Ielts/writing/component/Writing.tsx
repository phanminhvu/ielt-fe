import { makeStyles } from "@mui/styles";
import { TextField, Textarea } from "components/Textfield";
import { FastField, useFormikContext } from "formik";
import React from "react";

const useStyles = makeStyles((theme) => ({
  container: {
    borderRadius: 5,
    width: "100%",
    height: "100%",
    padding: 8,
  },
}));
type Props = {
  groupSelected?: any;
  questionId: string;
};

const Writing = (props: Props) => {
  const classes = useStyles();
  const { groupSelected, questionId } = props;

  const { values, setFieldValue } = useFormikContext();

  const handleFocus = () => {
    setFieldValue(`answers[${groupSelected}].questionId`, questionId);
  };

  return (
    <>
      {groupSelected === 0 && (
        <div className={classes.container}>
          <FastField
            onFocus={handleFocus}
            label="mot"
            name={`answers[${groupSelected}].studentAnswer`}
            component={Textarea}
          />
        </div>
      )}
      {groupSelected === 1 && (
        <div className={classes.container}>
          <FastField
            onFocus={handleFocus}
            label="hai"
            name={`answers[${groupSelected}].studentAnswer`}
            component={Textarea}
          />
        </div>
      )}
    </>
  );
};

export default Writing;
