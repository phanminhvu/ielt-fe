import React from "react";
import imgClear from "assets/image/exam/clear-item.png";
import imgClearAll from "assets/image/exam/clear-all.png";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles((theme) => ({
  option: {
    background: theme.custom?.background.noteReading.optionNote,
    width: "150px",
    padding: "0px 0px 10px 10px",
    boxShadow: theme.custom?.boxShadow.optionNote,
    border: `1px solid ${theme.custom?.border.noteReading.optionItem}`,
    transform: (position: any) => `translate(${position.x}px,${position.y}px)`,
    position: "fixed",
    top: "10px",
    left: 0,
    zIndex: 999,
  },
  noteItem: {
    ...theme.custom?.flexBox.flexAlignItemsCenter,
    fontSize: "12px",
    marginTop: "10px",
    cursor: "pointer",
  },
  imageNote: {
    // marginLeft: "auto",
    display: "flex",
    cursor: "pointer",
  },
}));
type Props = {
  onClearHightlight: () => void;
  onClearHightlightAll: () => void;
  position: any;
};

const ClearDialog = (props: Props) => {
  // !State
  const { onClearHightlight, onClearHightlightAll, position } = props;
  const classes = useStyle(position);

  // !Render
  return (
    <div className={classes.option}>
      <div onClick={onClearHightlight} className={classes.noteItem}>
        <img className={classes.imageNote} src={imgClear} alt="" />
        <div>Clear</div>
      </div>
      <div onClick={onClearHightlightAll} className={classes.noteItem}>
        <img className={classes.imageNote} src={imgClearAll} alt="" />
        <div>Clear all</div>
      </div>
    </div>
  );
};

export default ClearDialog;
