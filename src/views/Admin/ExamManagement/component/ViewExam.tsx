import { TabList, TabPanel } from "@mui/lab";
import TabContext from "@mui/lab/TabContext";
import { Box, Button, Stack } from "@mui/material";
import Tab from "@mui/material/Tab";
import useViewExam from "hooks/examManagement/useViewExam";
import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import Listening from "./Listening";
import Reading from "./Reading";
import Speaking from "./Speaking";
import Writing from "./Writing";
import UndoIcon from "@mui/icons-material/Undo";
export interface Props {
  open: any;
  onCloseModal: () => void;
}

const ViewExam = (props: Props) => {
  const { search } = useLocation();
  const id = search.split("=")[1];

  const [value, setValue] = useState<any>("LISTENING");
  const [skill, setSkill] = useState<string>("");
  const [dataDetailExam, loading, error, refetchData] = useViewExam(id);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  const history = useHistory();
  const renderButtonBack = () => {
    return (
      <Stack spacing={2} direction="row" className="justify-end mb-[10px]">
        <Button component="a" href="#as-link" startIcon={<UndoIcon />} onClick={() => history.goBack()}>
          Back
        </Button>
      </Stack>
    );
  };
  const renderViewExam = (type: string) => {
    switch (type) {
      case "LISTENING":
        return <Listening dataListening={dataDetailExam} />;
      case "READING":
        return <Reading dataReading={dataDetailExam} />;
      // case "WRITING":
      //   return <Writing dataWriting={dataDetailExam} idGrade={id} refetchData={refetchData} />;
      // case "SPEAKING":
      //   return <Speaking dataSpeaking={dataDetailExam} idGrade={id} refetchData={refetchData} />;
      default:
        <Listening />;
        break;
    }
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <div>{renderButtonBack()}</div>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Listening" value="LISTENING" />
            {/* <Tab label="Writing" value="WRITING" /> */}
            <Tab label="Reading" value="READING" />
            {/* <Tab label="Speaking" value="SPEAKING" /> */}
          </TabList>
        </Box>
        <TabPanel sx={{ p: 0 }} value="LISTENING">
          {renderViewExam("LISTENING")}
        </TabPanel>
        {/* <TabPanel sx={{ p: 0 }} value="WRITING">
          {renderViewExam("WRITING")}
        </TabPanel> */}
        <TabPanel sx={{ p: 0 }} value="READING">
          {renderViewExam("READING")}
        </TabPanel>
        {/* <TabPanel sx={{ p: 0 }} value="SPEAKING">
          {renderViewExam("SPEAKING")}
        </TabPanel> */}
      </TabContext>
    </Box>
    // </Card>
  );
};

export default ViewExam;
