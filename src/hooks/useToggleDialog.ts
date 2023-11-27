import { useState, useCallback } from "react";

const useToggleDialog = () => {
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);

  const toggle = useCallback(() => {
    setOpen((prev) => !prev);
    setTimeout(() => {
      setClosing((prev) => !prev);
    }, 2000);
  }, []);

  const shouldRender = open || closing;

  return { open, toggle, shouldRender };
};

export default useToggleDialog;
