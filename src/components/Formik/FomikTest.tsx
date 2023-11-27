import * as React from "react";
import { Formik, Form, FormikProps } from "formik";
import { Box, Button, Grid, Card } from "@mui/material";
import { useHistory } from "react-router-dom";
//
export interface FormikWizadProps {
  initialValues: object;
  stepNumber: number;
  onStep: Function;
  onSubmit: Function;
  children: React.ReactNode;
  text?: string;
}

interface FormikComProps {
  initialValues: object;
  children: React.ReactNode;
  text?: string;
}

const card = {
  width: "99%",
  borderRadius: "16px",
  margin: "0 auto",
  boxShadow: "rgba(0, 0, 0, 0.30) 0px 5px 15px",
  padding: "50px 50px",
};
const cssButton = {
  padding: "10px 0px",
  width: { xs: "100%", sm: "70%", md: "50%", lg: "30%" },
  maxWidth: "400px",
  borderRadius: "10px",
  color: "#fff",
  fontWeight: 700,
  fontSize: "18px",
  textTransform: "uppercase",
  margin: "0 auto",
  background: "#333",
  "&:hover": {
    background: "#333",
  },
};

function FormikWizard(props: FormikWizadProps) {
  // !State
  const { initialValues, children, stepNumber, onStep, text, onSubmit, ...rest } = props;
  const [open, setOpen] = React.useState<boolean>(false);

  // !Hook
  const history = useHistory();

  // !Variable
  const steps = React.Children.toArray(children);
  const step = steps[stepNumber];
  const totalSteps = steps.length;
  const isLastStep = stepNumber === totalSteps - 1;

  // !Function

  const nextStep = () => {
    onStep(Math.min(stepNumber + 1, totalSteps - 1));
  };

  const preStep = () => {
    onStep(Math.max(0, stepNumber - 1));
  };

  const handleSubmit = async (values: object, bag: any) => {
    if (isLastStep) {
      return onSubmit(values, bag);
    } else {
      bag.setTouched({});
      nextStep();
    }
  };

  // Back ielts page

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} onClick={nextStep}>
      {(formik: FormikProps<any>) => (
        <Form style={{ height: "100vh", overflow: "hidden" }}>
          <Grid container>
            <Grid item lg={12} md={12}>
              {step}

              <Box sx={{ display: "flex", justifyContent: "center", mt: "50px" }}>
                <Button sx={cssButton} onClick={nextStep}>
                  +
                </Button>
                <Button sx={cssButton} onClick={preStep}>
                  -
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
}

const FormikCom = (props: FormikComProps) => {
  // !Destructure Props
  const { initialValues, children, text, ...rest } = props;

  // !State
  const [stepNumber, setStepNumber] = React.useState(0);

  return (
    <FormikWizard
      initialValues={initialValues}
      stepNumber={stepNumber}
      onStep={setStepNumber}
      onSubmit={async (values: object) => {}}
      text={text}
    >
      {children}
    </FormikWizard>
  );
};

export default FormikCom;
