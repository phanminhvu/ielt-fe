import React from "react";
import { Box } from "@mui/material";
import { themeCssSx } from "ThemeCssSx/ThemeCssSx";
import BtnHelpOk from "../btnHelpOk/BtnHelpOk";
import RulesExam from "../RulesExam/RulesExam";
import TestHelp from "../TestHelp/TestHelp";
import TaskHelp from "../../TaskHelp/TaskHelp";
import { makeStyles } from "@mui/styles";

const data = [
  {
    id: 1,
    title: "Information",
  },
  {
    id: 2,
    title: "Test help",
  },
  {
    id: 3,
    title: "Task help",
  },
];
// !type
interface NavigateI {
  handleCloseModal?: () => void;
  typeExam?: string;
}
interface NavigateItemI {
  item: {
    id: number;
    title: string;
  };
  onHightLightNavigate: () => void;
}

const useStyles = makeStyles((theme) => {
  return {
    container: {
      display: "flex",
      borderBottom: "1px solid rgba(0,0,0,.2)",
      margin: "16px 0",
    },
    btn: {
      padding: "5px 20px",
      borderRadius: "6px 6px 0 0",
      background: "rgba(0, 0, 0, 0.1)",
      marginLeft: "10px",
      fontWeight: 700,
      cursor: "pointer",
      zIndex: 999,
      border: "1px solid rgba(0,0,0,.2)",
      borderBottom: "0",
    },
    btnHightLight: {
      background: theme.custom?.background.exam,
      marginBottom: "-2px",
      borderBottom: `1px solid ${theme.custom?.background.exam}`,
    },
    footer: {
      ...theme.custom?.flexBox.flexJusCenter,
    },
  };
});

const Navigate = (props: NavigateI) => {
  //! State

  const { handleCloseModal, typeExam } = props;
  const [panel, setPanel] = React.useState<number>(1);
  const classes = useStyles();

  const NavigateItem = ({ item, onHightLightNavigate }: NavigateItemI) => {
    const hightLightNavigate = () => {
      if (panel === item.id) {
        return classes.btnHightLight;
      }
      return;
    };

    return (
      <>
        <Box onClick={onHightLightNavigate} className={`${classes.btn} ${hightLightNavigate()}`}>
          {item.title}
        </Box>
      </>
    );
  };

  //! Render
  return (
    <>
      <Box className={classes.container}>
        {data.map((item) => {
          const handleSetPanel = () => {
            setPanel(item.id);
          };
          return <NavigateItem onHightLightNavigate={handleSetPanel} item={item} key={item.id} />;
        })}
      </Box>
      <Box sx={{ mb: "20px" }}>
        {panel === 1 && <RulesExam typeExam={typeExam} />}
        {panel === 2 && <TestHelp typeExam={typeExam} />}
        {panel === 3 && <TaskHelp />}
      </Box>
      <Box className={classes.footer}>
        <BtnHelpOk handleCloseModal={handleCloseModal} />
      </Box>
    </>
  );
};

export default Navigate;
