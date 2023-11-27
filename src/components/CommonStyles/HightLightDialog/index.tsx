import React from "react";
import imgHightLight from "assets/image/exam/hight-light-note.png";
import imgNote from "assets/image/exam/note.png";
import { makeStyles } from "@mui/styles";
import imgCloseNote from "assets/image/exam/test-help/img-close.png";
import clearItem from "assets/image/exam/clear-item.png";
import clearAll from "assets/image/exam/clear-all.png";

const useStyle = makeStyles((theme) => ({
  option: {
    background: theme.custom?.background.noteReading.optionNote,
    width: "150px",
    padding: "5px",
    boxShadow: theme.custom?.boxShadow.optionNote,
    border: `1px solid ${theme.custom?.border.noteReading.optionItem}`,
    transform: (position: any) => `translate(${position.x}px,${position.y}px)`,
    position: "fixed",
    top: "10px",
    left: 0,
    zIndex: 999,
  },
  imgNote: {
    width: "16px",
    height: "16px",
    marginRight: "5px",
    fontWeight: 700,
  },
  noteItem: {
    ...theme.custom?.flexBox.flexAlignItemsCenter,
    fontSize: "12px",
    marginTop: "10px",
    cursor: "pointer",
  },
  noteHeader: {
    background: theme.custom?.background.noteReading.header,
    borderBottom: "1px solid",
    padding: "5px 5px",
  },
  imgClose: {
    marginLeft: "auto",
    display: "flex",
    cursor: "pointer",
  },
}));

type Props = {
  onClickHighlight?: () => void;
  onClickNote?: () => void;
  position: any;
  onCloseAction: () => void;
  clearAll: () => void;
  clearMarkItem: () => void;
  highlightText?: (e: React.MouseEvent<HTMLElement>) => void;
};

const HightLightDialog = (props: Props) => {
  // !State
  const { onClickHighlight, onClickNote, position, onCloseAction, clearAll, clearMarkItem, highlightText } = props;
  const classes = useStyle(position);

  const onClearAllMark = () => {
    clearAll();
    onCloseAction();
  };

  const onClearMark = () => {
    clearMarkItem();
    onCloseAction();
  };

  // !Render
  return (
    <div className={classes.option}>
      <div className={classes.noteHeader}>
        <img src={imgCloseNote} alt="" onClick={onCloseAction} className={classes.imgClose} />
      </div>
      <div
        className={classes.noteItem}
        onMouseDown={(e) => {
          highlightText && highlightText(e);
        }}
      >
        <img className={classes.imgNote} src={imgHightLight} alt="" />
        <p>Highlight</p>
      </div>
      <div onClick={onClickNote} id="note" className={classes.noteItem}>
        <img className={classes.imgNote} src={imgNote} alt="" />
        <p>Note</p>
      </div>
      <div id="clear-all" onClick={onClearMark} className={classes.noteItem}>
        <img className={classes.imgNote} src={clearItem} alt="" />
        <p>Clear</p>
      </div>
      <div id="clear-all" onClick={onClearAllMark} className={classes.noteItem}>
        <img className={classes.imgNote} src={clearItem} alt="" />
        <p>Clear all</p>
      </div>
    </div>
  );
};

export default HightLightDialog;
