import React from "react";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import Slider from "@mui/material/Slider";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/material";

//! type
interface VolumI {
  handleChangeValueVolum?: any;
}
const useStyles = makeStyles((theme) => {
  return {
    sliderVolum: {
      marginTop: "10px",
      color: "#f5f5f5 !important",
    },
    icon: {
      color: theme.palette.primary.contrastText,
      marginRight: "5px",
    },
    container: {
      ...theme.custom?.flexBox.flexAlignItemsCenter,
      marginRight: "10px",
    },
  };
});
const Volum = (props: VolumI) => {
  const [valueVolum, setValueVolum] = React.useState<number>(50);
  const { handleChangeValueVolum } = props;
  const classes = useStyles();
  //
  const handleChangeVolum = (event: any) => {
    setValueVolum(event.target.value);
  };
  return (
    <>
      <div className={classes.container}>
        <VolumeUpIcon className={classes.icon} />
        <Box width={80}>
          <Slider
            className={classes.sliderVolum}
            defaultValue={50}
            aria-label="Default"
            valueLabelDisplay="auto"
            size="medium"
            onChange={handleChangeVolum}
          />
        </Box>
      </div>
      {handleChangeValueVolum(valueVolum)}
    </>
  );
};

export default Volum;
