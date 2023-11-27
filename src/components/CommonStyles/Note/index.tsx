import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import imgCloseNote from "assets/image/exam/test-help/img-close.png";
import classnames from "classnames";

const useStyle = makeStyles((theme) => ({
  noteContainer: {
    width: "220px",
    background: theme.custom?.background.noteReading.content,
    borderRadius: "6px",
    transform: (position: any) => `translate(${position.x}px,${position.y}px)`,
    position: "fixed",
    top: "10px",
    left: 0,
    zIndex: 999,
  },
  noteHeader: {
    background: theme.custom?.background.noteReading.header,
    borderRadius: "6px 6px 0px 0px",
    borderBottom: "1px solid",
    padding: "5px 5px",
  },
  imgClose: {
    marginLeft: "auto",
    display: "flex",
    cursor: "pointer",
  },
  noteContent: {},
  contentNote: {
    width: "100%",
    border: "none",
    background: theme.custom?.background.noteReading.content,
    outline: "none",
    padding: "10px 10px 200px 10px",
  },
}));
type Props = {
  isOpenNote?: boolean;
  onCloseNote?: () => void;
  onChangeTextNote?: (e: any) => void;
  position: any;
  noted: any;
  className: string;
};

const Note = (props: Props) => {
  // !State

  useEffect(() => {
    const input: any = document.getElementById("textarea");
    if (input) {
      const end = input.value.length;

      // ✅ Move focus to END of input field
      input.setSelectionRange(end, end);
      input.focus();
    }
  }, []);

  const { isOpenNote, onCloseNote, onChangeTextNote, position, className, noted } = props;
  const classes = useStyle(position);
  return (
    <div className={classes.noteContainer}>
      <div className={classnames(classes.noteHeader, "noselect")}>
        <img src={imgCloseNote} alt="" onClick={onCloseNote} className={classes.imgClose} />
      </div>
      <div className={classes.noteContent}>
        <textarea
          className={classnames(classes.contentNote, "noselect")}
          value={noted[className] ? noted[className] : ""}
          autoFocus
          onChange={onChangeTextNote}
          id="textarea"
        />
      </div>
    </div>
  );
};

export default Note;
