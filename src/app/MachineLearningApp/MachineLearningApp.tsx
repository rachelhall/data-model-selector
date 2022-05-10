import React, { useCallback, useEffect, useState } from "react";
import SelectedOutput from "../../components/SelectedOutput";
import Instructions from "../../Instructions";
import Button from "../../styleComponents/Button";
import Modal from "../../styleComponents/Modal";
import { useModal } from "../../utils/useModal";
import { ISelectedModel, ModalContext } from "../../utils/useModalContext";

import "./MachineLearningApp.scss";

interface IProps {}

export const MachineLearningApp: React.FC<IProps> = (props) => {
  const [selected, setSelected] = useState<ISelectedModel | undefined>(
    undefined
  );

  const { modalOpen, toggleModal } = useModal();

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.metaKey) {
        if (e.key === "k") {
          e.preventDefault();
          toggleModal();
        }
      } else if (e.key === ("Escape" || "Esc")) {
        if (modalOpen) {
          toggleModal();
        }
      }
    },
    [modalOpen, toggleModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown, false);
    return () => {
      document.removeEventListener("keydown", handleKeyDown, false);
    };
  }, [handleKeyDown]);

  return (
    <div className="App">
      <ModalContext.Provider
        value={{ modalOpen, toggleModal, selected, setSelected }}
      >
        <div className="App--implementation">
          <Instructions />
          <p className="App--heading">Search for your data model</p>
          <Button onClick={toggleModal}>Search</Button>

          {modalOpen && <Modal />}
          {selected && <SelectedOutput item={selected} />}
        </div>
      </ModalContext.Provider>
    </div>
  );
};

export default MachineLearningApp;
