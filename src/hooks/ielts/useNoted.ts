import { todoActions } from "redux/creators/modules/todos";
import { useState } from "react";

interface Props {
  todoActions: () => void;
}
export const useNoted = ({ toggleAction, className }: any) => {
  const [isNoted, setIsNoted] = useState<boolean>(false);
  const [noted, setNoted] = useState({});
  const onClickNote = () => {
    toggleAction();
    setIsNoted(true);
  };

  const toggleNote = () => {
    setIsNoted((prev) => !prev);
  };

  const onChangeInput = (e: any) => {
    setNoted((prev) => {
      return { ...prev, [className]: e.target.value };
    });
  };

  return { onClickNote, onChangeInput, isNoted, noted, toggleNote };
};
