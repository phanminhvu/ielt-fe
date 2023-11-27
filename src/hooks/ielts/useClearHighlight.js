import $ from "jquery";
import { useEffect } from "react";

export const useClearHighlight = ({ className }) => {
  const clearAll = () => {
    const tags = document.querySelectorAll("mark");
    if (tags) {
      tags.forEach((mark) => {
        let text = mark.textContent || mark.innerText;
        let node = document.createTextNode(text);
        mark.parentNode.replaceChild(node, mark);
      });
    }
  };

  const clearMarkItem = () => {
    const tag = document.querySelector(`[class = ${className}]`);
    if (tag) {
      let text = tag.textContent || tag.innerText;
      let node = document.createTextNode(text);
      tag.parentNode.replaceChild(node, tag);
    }
  };
  return { clearAll, clearMarkItem };
};
