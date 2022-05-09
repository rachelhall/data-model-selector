import { useCallback, useContext, useEffect, useState } from "react";
import { ModalContext } from "./useModalContext";

export const useChangeFocus = (size: number) => {
  const [currentFocus, setCurrentFocus] = useState(0);

  const { toggleModal } = useContext(ModalContext);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setCurrentFocus(currentFocus === size - 1 ? 0 : currentFocus + 1);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setCurrentFocus(currentFocus === 0 ? size - 1 : currentFocus - 1);
      } else if (e.key === "Enter") {
        toggleModal();
      }
    },
    [currentFocus, size, toggleModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown, false);
    return () => {
      document.removeEventListener("keydown", handleKeyDown, false);
    };
  }, [handleKeyDown]);

  return [currentFocus, setCurrentFocus] as const;
};
