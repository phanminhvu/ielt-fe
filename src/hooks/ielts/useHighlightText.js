import $ from "jquery";
import { useEffect, useRef } from "react";

export const useHightLightText = () => {
  const highlight = useRef(0);

  const onHighlightText = (selectioned) => {
    function clearSelection() {
      if (document.selection && document.selection.empty) {
        document.selection.empty();
      } else if (window.getSelection) {
        var sel = window.getSelection();
        sel.removeAllRanges();
      }
    }

    // $(".exam").mouseup(function (event) {
    let selection_text = selectioned.toString();

    let range = selectioned.getRangeAt(0);
    // disable highligh inside input
    // const noselect = selection.anchorNode?.className === "noselect";
    const docFragment = range.cloneContents();
    const input = docFragment.querySelector("input");
    const textarea = docFragment.querySelector("textarea");
    const p = docFragment.querySelector("p");
    const span = docFragment.querySelector("span");
    const clickNumber = event.detail;

    // $("input,textarea").bind("cut copy paste", function (e) {
    //   e.preventDefault(); //disable cut,copy,paste
    // });
    // if (clickNumber < 2 && !input && !textarea && !p && !span && !noselect) {
    if (selection_text && !input && !textarea && !p && !span) {
      highlight.current = highlight.current + 1;

      let mark = document.createElement("MARK");
      mark.textContent = selection_text;
      mark.className = `mark-${highlight.current}`;
      mark.ref = highlight;
      mark.setAttribute("style", "font-size:inherit");
      saveHighlightState(mark);

      range.deleteContents();
      range.insertNode(mark);

      // mark.onclick = () => {
      //   let text = mark.textContent || mark.innerText;
      //   let node = document.createTextNode(text);
      //   mark.parentNode.replaceChild(node, mark);
      // };
    }
    // } else {
    //   // clearSelection();
    // }
    // });
  };

  const saveHighlightState = (mark) => {
    const range = window.getSelection().getRangeAt(0);
    const storableObject = rangeToStorableObject(range);
    storableObject.className = mark.className;
    storableObject.textContent = mark.textContent;

    var highlightStateLocal = localStorage.getItem("highlightState");
    var highlightStateList = [];
    if (highlightStateLocal) {
      highlightStateList = JSON.parse(highlightStateLocal);
    }
    highlightStateList.push(storableObject);

    localStorage.setItem("highlightState", JSON.stringify(highlightStateList));
  };

  const restoreHighlightState = () => {
    let highlightState = localStorage.getItem("highlightState");

    if (highlightState) {
      let highlightData = JSON.parse(highlightState);

      highlightData.forEach((data) => {
        storableObjectToRange(data);
      });
    }
  };

  // Hàm để chuyển đổi Range thành một đối tượng có thể lưu trữ được
  function rangeToStorableObject(range) {
    return {
      startContainer: range.startContainer.textContent,
      startOffset: range.startOffset,
      endContainer: range.endContainer.textContent,
      endOffset: range.endOffset,
    };
  }

  // Hàm để chuyển đổi đối tượng có thể lưu trữ được thành Range
  function storableObjectToRange(storableObj) {
    try {
      const range = document.createRange();
      const {
        startContainer,
        startOffset,
        endContainer,
        endOffset,
        className,
        textContent,
      } = storableObj;
      const startTextNode = findTextNodeWithContent(
        document.body,
        startContainer
      );
      const endTextNode = findTextNodeWithContent(document.body, endContainer);

      range.setStart(startTextNode, startOffset);
      range.setEnd(endTextNode, endOffset);

      // Áp dụng Range đã khôi phục
      const selection = window.getSelection();
      selection.removeAllRanges();
      let mark = document.createElement("MARK");
      mark.textContent = textContent;
      mark.className = className;
      mark.ref = highlight;
      mark.setAttribute("style", "font-size:inherit");

      range.deleteContents();
      range.insertNode(mark);
    } catch (error) {
      console.log(error);
    }
  }

  function findTextNodeWithContent(node, targetValue) {
    if (node.nodeType === Node.TEXT_NODE && node.textContent === targetValue) {
      return node;
    } else if (node.hasChildNodes()) {
      for (const childNode of node.childNodes) {
        const foundNode = findTextNodeWithContent(childNode, targetValue);
        if (foundNode) {
          return foundNode;
        }
      }
    }
    return null;
  }

  function findTextNodeFuzzy(node, targetValue) {
    const textNodeRegex = new RegExp(targetValue, "i");

    if (
      node.nodeType === Node.TEXT_NODE &&
      textNodeRegex.test(node.textContent)
    ) {
      return node;
    } else if (node.hasChildNodes()) {
      for (const childNode of node.childNodes) {
        const foundNode = findTextNodeFuzzy(childNode, targetValue);
        if (foundNode) {
          return foundNode;
        }
      }
    }
    return null;
  }
  return {
    onHighlightText,
    restoreHighlightState,
  };
};
