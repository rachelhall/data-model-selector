import React, { useState } from "react";
import SelectedOutput from "../../components/SelectedOutput";
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

  return (
    <div className="App">
      <ModalContext.Provider
        value={{ modalOpen, toggleModal, selected, setSelected }}
      >
        <div className="Implementation">
          <Button onClick={toggleModal}>Search</Button>

          {modalOpen && <Modal />}
          {selected && <SelectedOutput item={selected} />}
        </div>
      </ModalContext.Provider>
    </div>
  );
};

export default MachineLearningApp;
