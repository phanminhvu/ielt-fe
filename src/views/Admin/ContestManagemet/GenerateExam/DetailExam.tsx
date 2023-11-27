import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Button, Stack, Tab } from "@mui/material";
import { Box } from "@mui/system";
import useGetExamDetail from "hooks/ContestManagemet/useGetExamDetail";
import { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import Listening from "./component/Listening";
import Reading from "./component/Reading";
import "./style.scss";
import UndoIcon from "@mui/icons-material/Undo";

const DetailExam = () => {
  //!State
  const { search } = useLocation<any>();
  const [tab, setTab] = useState<string>("LISTENING");
  const urlId = search.split("=")[1];

  const id = urlId.split("?")[1];
  const idExam = urlId.split("?")[0];
  const [examDetail, loading, error, refetchData] = useGetExamDetail(id, idExam);

  //!Function
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setTab(newValue);
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
  return (
    <div className="examContainer">
      <Box sx={{ width: "100%", typography: "body1" }}>
        <div>{renderButtonBack()}</div>
        <TabContext value={tab}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Listening" value="LISTENING" />
              <Tab label="Reading" value="READING" />
            </TabList>
            <TabPanel sx={{ p: 0 }} value="LISTENING">
              <Listening dataListening={examDetail?.listening} />
            </TabPanel>
            <TabPanel sx={{ p: 0 }} value="READING">
              <Reading dataReading={examDetail?.reading} />
            </TabPanel>
          </Box>
        </TabContext>
      </Box>
    </div>
  );
};

export default DetailExam;
