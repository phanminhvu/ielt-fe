
import { makeStyles } from "@mui/styles";
import RecorderImageActive from "assets/image/speaking-exam/IST_icon_active.svg";
import RecorderImageDeactive from "assets/image/speaking-exam/IST_icon_deactive.svg";
import { CountDowns } from "components/Countdown";
import Text from "components/Typography";
import { part } from "interfaces/recorder";
import { useMemo } from "react";

const useStyles = makeStyles((theme)=>({
  container:{
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"column"
  },
  activeSpeaking:{
    display:"flex",
    flexDirection:'column',
    gap:32
  },
}))




const  Recorder =(props)=> {
  // !State
  const {isRecording,partAnswering}=props
  const classes = useStyles()

  const seconds = useMemo(()=>{
    if(partAnswering === part.part1){
      return 20000
    }
    if(partAnswering === part.part2){
      return 60000
    }
    if(partAnswering === part.part3){
      return 30000
    }

  },[isRecording])

    return (
      <div className={classes.container}>
          {isRecording ? <div className={classes.activeSpeaking}>
            <Text.Title>Recording ...</Text.Title>
            <img src={RecorderImageActive} alt=" Active Recorder Image  " />
            <CountDowns secondsPass={seconds}  />
          </div> : <img src={RecorderImageDeactive} alt="deactive Recorder Image" /> }
      </div>
    );
  }

export default Recorder;
