import { useReactMediaRecorder } from "react-media-recorder";
import React, { useEffect, useState } from "react";
import { Box, Stack, Button } from "@mui/material";

import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import StopIcon from "@mui/icons-material/Stop";
//

const startBtn = {
  background: "#f6475a",
  p: "12px 70px",
  borderRadius: "16px",
  mb: "10px",
  "&:hover": {
    background: "#f6475a",
  },
};
const Record = (props) => {
  const [second, setSecond] = useState("00");
  const [minute, setMinute] = useState("00");
  const [isActive, setIsActive] = useState(false);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    let intervalId;

    if (isActive) {
      intervalId = setInterval(() => {
        const secondCounter = counter % 60;
        const minuteCounter = Math.floor(counter / 60);

        let computedSecond =
          String(secondCounter).length === 1
            ? `0${secondCounter}`
            : secondCounter;
        let computedMinute =
          String(minuteCounter).length === 1
            ? `0${minuteCounter}`
            : minuteCounter;

        setSecond(computedSecond);
        setMinute(computedMinute);

        setCounter((counter) => counter + 1);
      }, 650);
    }

    return () => clearInterval(intervalId);
  }, [isActive, counter]);

  function stopTimer() {
    setIsActive(false);
    setCounter(0);
    setSecond("00");
    setMinute("00");
  }

  const {
    status,
    startRecording,
    stopRecording,
    pauseRecording,
    mediaBlobUrl,
  } = useReactMediaRecorder({
    video: false,
    audio: true,
    echoCancellation: true,
  });
  const convertFileToBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file.mediaBlobUrl);

      reader.onload = () =>
        resolve({
          fileName: file.title,
          base64: reader.result,
        });
      reader.onerror = reject;
    });

  return (
    <div
      className=""
      style={{
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: "40px",
      }}
    >
      {!isActive ? (
        <Button
          sx={startBtn}
          variant="contained"
          startIcon={<KeyboardVoiceIcon />}
          onClick={() => {
            startRecording();
            setIsActive(!isActive);
          }}
        >
          START RECORDING
        </Button>
      ) : (
        <Button
          sx={startBtn}
          variant="contained"
          startIcon={<StopIcon />}
          onClick={() => {
            stopRecording();
            setIsActive(!isActive);
          }}
        >
          STOP RECORDING
        </Button>
      )}

      <div style={{ fontSize: "30px", color: "red" }}>
        <span className="minute">{minute}</span>
        <span>:</span>
        <span className="second">{second}</span>
      </div>

      <div style={{ display: "flex" }}>
        <label
          style={{
            fontSize: "15px",
            fontWeight: "Normal",
            // marginTop: "20px"
          }}
          htmlFor="icon-button-file"
        >
          {/* <div>
            <button
              style={{
                padding: "0.8rem 2rem",
                border: "none",
                marginLeft: "15px",
                fontSize: "1rem",
                cursor: "pointer",
                borderRadius: "5px",
                fontWeight: "bold",
                backgroundColor: "#42b72a",
                color: "white",
                transition: "all 300ms ease-in-out",
                transform: "translateY(0)",
              }}
              onClick={() => {
                if (!isActive) {
                  startRecording();
                } else {
                  pauseRecording();
                }

                setIsActive(!isActive);
              }}
            >
              {isActive ? "Pause" : "Start"}
            </button>
            <button
              style={{
                padding: "0.8rem 2rem",
                border: "none",
                backgroundColor: "#df3636",
                marginLeft: "15px",
                fontSize: "1rem",
                cursor: "pointer",
                color: "white",
                borderRadius: "5px",
                fontWeight: "bold",
                transition: "all 300ms ease-in-out",
                transform: "translateY(0)",
              }}
              onClick={() => {
                pauseRecording();
                stopRecording();
                setIsActive(!isActive);
              }}
            >
              Stop
            </button>
          </div> */}
        </label>
      </div>
      <b></b>
    </div>
  );
};
export default Record;
