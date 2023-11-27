import { useMemo, useRef, useState } from "react";
import ReactDOM from "react-dom";

interface Props {
  text: string;
  values: any;
  onChangeInput: any;
  tagName: string;
}

export const useHightLightText = ({ text, values, onChangeInput, tagName }: Props) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHightLight, setIsHightLight] = useState(false);
  const [textScanner, setTextScanner] = useState("");
  const [textHightlighted, setTextHightlighted] = useState({});
  const [isNoted, setIsNoted] = useState(false);
  const [markTagId, setMarkTagId] = useState("");
  //-----clear-----
  const [isOpenOptionClear, setIsOpenOptionClear] = useState(false);
  const [clearItem, setClearItem] = useState("");

  const idMark = useRef(0);

  const passageTextWithHighlightTexted = useMemo(() => {
    if (text) {
      let tempPassageText: any = text;
      //* Add highlight text to passageText
      Object.entries(textHightlighted).forEach(([raw, changed]) => {
        tempPassageText = tempPassageText.replace(raw, changed);
      });

      return tempPassageText;
    }

    return "";
  }, [textHightlighted, text]);

  const handleRightClick = (e: any) => {
    const domNode: any = ReactDOM.findDOMNode(e.target);
    const tagName = domNode?.tagName;
    if (tagName === "MARK") {
      const valueInnerTag = domNode.innerHTML.split("<")[0];
      setClearItem(valueInnerTag);
      setIsOpenOptionClear(true);
    }
    if (tagName === tagName && tagName != "MARK") {
      setIsHightLight(true);
    }
    e?.preventDefault();

    const x = e.pageX;
    const y = e.pageY;

    setPosition({ x, y });
  };

  const onScannerText = (data: any) => {
    document.addEventListener("contextmenu", (e) => handleRightClick(e));
    const textScanned = data.view.getSelection().toString();

    setTextScanner(textScanned);

    const domNode: any = ReactDOM.findDOMNode(data.target);
    const tagName = domNode.tagName;
    if (tagName === "MARK") {
      const hightlightId = domNode.getAttribute("id");
      setMarkTagId(hightlightId);
      const textarea: any = document.getElementById("note");
      textarea.value = values[hightlightId] ? values[hightlightId] : "";
      setIsNoted(true);
      const x = data.pageX;
      const y = data.pageY;
      setPosition({ x, y });
    }
  };

  const newText = () => {
    idMark.current = idMark.current + 1;
    setMarkTagId(`mark-${idMark.current}`);
    setTextHightlighted((prevText) => {
      return {
        ...prevText,
        [textScanner]: `<mark id="mark-${idMark.current}" >${textScanner}</mark>`,
      };
    });
  };

  const onHightlight = () => {
    newText();
    setIsHightLight(false);
  };

  // ------clear-----

  const onClearHightLight = () => {
    setIsOpenOptionClear(false);
    setTextHightlighted((prevText: any) => {
      delete prevText[clearItem];
      const newTextHightlighted = { ...prevText };
      return newTextHightlighted;
    });

    onChangeInput((field: any) => {});

    delete values[markTagId];
  };

  const onClearHightLightAll = () => {
    setIsOpenOptionClear(false);
    setTextHightlighted({});
  };

  // -------note--------
  const onClickNote = () => {
    setIsNoted(true);
    onHightlight();
  };

  const onCloseNote = () => {
    setIsNoted(false);
    const textarea: any = document.getElementById("note");
    textarea.value = "";
  };

  const onInputChange = (e: any) => {
    onChangeInput(`${markTagId}`, e.target.value);
    // setFieldValue(`${markTagId}`, e.target.value);
  };

  return {
    onScannerText,
    onHightlight,
    passageTextWithHighlightTexted,
    position,
    isOpenOptionClear,
    clearItem,
    onCloseNote,
    onClearHightLightAll,
    onClickNote,
    onClearHightLight,
    markTagId,
    isNoted,
    isHightLight,
    onInputChange,
  };
};
