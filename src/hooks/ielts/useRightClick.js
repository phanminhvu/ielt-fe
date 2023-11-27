import { useEffect, useState } from "react";
import ReactDOM from "react-dom";

export const useRightClick = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isAction, setIsAction] = useState(false);
  const [className, setClassName] = useState("");
  const [selectioned, setSelectioned] = useState("");

  const handleRightClick = (e) => {
    console.log("run when click");

    const domNode = ReactDOM.findDOMNode(e.target);
    const tagName = domNode?.tagName;
    const className = domNode.getAttribute("class");

    function getSelectedText() {
      let t = document.all
        ? document?.selection.createRange().text
        : document.getSelection();
      return t;
    }
    let selection = getSelectedText();
    let selection_text = selection.toString();

    if (selection_text || tagName === "MARK") {
      setSelectioned(selection);
      setIsAction(true);
      setClassName(className);
      e?.preventDefault();

      const x = e.pageX;
      const y = e.pageY;

      setPosition({ x, y });
    }
  };

  const toggleAction = () => {
    setIsAction((prev) => !prev);
  };

  useEffect(() => {
    document.addEventListener("contextmenu", (e) => handleRightClick(e));
  }, []);

  return { isAction, position, toggleAction, className, selectioned };
};
