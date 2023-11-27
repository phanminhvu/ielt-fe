import { useEffect } from "react";
export const useConfirmCloseBrowser = () => {
  useEffect(() => {
    const unloadCallback = (event: any) => {
      event.preventDefault();
      event.returnValue = "Are you sure you want to close?";
      return "Are you sure you want to close?";
    };

    window.addEventListener("beforeunload", unloadCallback);
    return () => window.removeEventListener("beforeunload", unloadCallback);
  }, []);
};
