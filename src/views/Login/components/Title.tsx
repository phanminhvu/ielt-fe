import Text from "components/Typography/index";
import CommonStyles from "components/CommonStyles";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => {
  return {
    textLogin: {
      color: theme.custom?.text.titleLogin,
      marginBottom: "24px !important",
    },
  };
});
const Title = (props: any) => {
  //! State
  const classes = useStyles();

  //! Render
  return (
    <CommonStyles.Typography className={classes.textLogin} component="p" variant="sub20Bold">
      {props.children}
    </CommonStyles.Typography>
  );
};

export default Title;
