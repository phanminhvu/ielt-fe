import { TabContext, TabList } from "@mui/lab";
import { Button, Stack, Tab } from "@mui/material";
import { Box } from "@mui/system";
import ButtonCommon from "components/Button";
import Modal from "components/Modal";
import React, { useState } from "react";
import "./Admin.scss";

const AdminScreen = () => {
  const [open, setIsOpen] = useState(false);
  const [tab, setTab] = useState<string>("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setTab(newValue);
  };

  const renderButton = () => {
    return (
      <Stack spacing={2} direction="row" style={{ justifyContent: "end" }}>
        <Button variant="contained" style={{ background: "#9155FE" }}>
          Save
        </Button>
        <Button variant="contained" style={{ background: "#f44336" }} onClick={() => setIsOpen(false)}>
          Cancel
        </Button>
      </Stack>
    );
  };

  return (
    <div>
      <ButtonCommon
        styleButton={{ background: "blue", color: "white" }}
        children={"Create Question"}
        onClick={() => setIsOpen(true)}
      />

      {open && (
        <Modal
          open={open}
          onClose={() => setIsOpen(false)}
          children={
            <Box sx={{ width: "100%", typography: "body1" }}>
              <TabContext value={tab}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <TabList onChange={handleChange} aria-label="lab API tabs example">
                    <Tab label="Listening" value="1" />
                    <Tab label="Speaking" value="2" />
                    <Tab label="Reading" value="3" />
                    <Tab label="Writing" value="4" />
                  </TabList>
                </Box>
              </TabContext>
              {renderButton()}
            </Box>
          }
        />
      )}
    </div>
  );
};
export default AdminScreen;
