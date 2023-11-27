import { makeStyles } from "@mui/styles";
import { AutoCompletedMui } from "components/Autocomplete";
import ButtonCommon from "components/Button/ButtonCommon";
import CommonStyles from "components/CommonStyles";
import { examSemester } from "constants/enum";
import { Formik, FormikHelpers, Form, FastField, Field } from "formik";
import * as Yup from "yup";
import Box from "@mui/material/Box";
import { useGetExamination } from "hooks/ielts/useIelts";
export interface InitialValueExam {
  exam: {
    id: string;
    name: string;
  };
}

interface DialogSelectExamI {
  open: boolean;
  toggle: () => void;
  onSubmit: (values: InitialValueExam, helpers: FormikHelpers<InitialValueExam>) => void;
}

const useStyles = makeStyles((theme) => {
  return {
    field: {
      width: "100%",
    },
  };
});

const validationSchemaSelectExam = Yup.object().shape({
  exam: Yup.object()
    .shape({
      id: Yup.string().required("Exam is required field!"),
      name: Yup.string().required("Exam is required field!"),
    })
    .required("Exam is required field!"),
});

const initialValues = {
  exam: {
    id: "",
    name: "",
  },
};
const initialFilter = {
  page: 1,
  pageSize: 20,
};

const DialogSelectExam = ({ open, toggle, onSubmit }: DialogSelectExamI) => {
  //! State
  const classes = useStyles();
  const { data, isLoading } = useGetExamination(initialFilter);
  const examinations = data?.data?.data?.data || [];

  //* md -> display: flex, flex-direction: column, flex-wrap: wrap, gap: 8px
  //* xs -> display: grid, gridTemplateColumns: '8px 8px 8px',

  //! Render
  return (
    <Formik initialValues={initialValues} validationSchema={validationSchemaSelectExam} onSubmit={onSubmit}>
      {(formik) => {
        return (
          <Box>
            <CommonStyles.Modal
              open={open}
              toggle={toggle}
              header="Select the exam"
              content={
                <Form>
                  <Field
                    component={AutoCompletedMui}
                    label="Select Exam"
                    name="exam"
                    className={classes.field}
                    options={examinations}
                    loading={isLoading}
                    fullWidth
                  />
                </Form>
              }
              footer={
                <ButtonCommon.ButtonFullBg onClick={() => formik.handleSubmit()}>Submit</ButtonCommon.ButtonFullBg>
              }
            />
          </Box>
        );
      }}
    </Formik>
  );
};

export default DialogSelectExam;
