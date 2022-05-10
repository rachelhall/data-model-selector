import React, { useContext } from "react";
import SearchInput from "../../components/SearchInput";
import { ModalContext } from "../../utils/useModalContext";

import ModalContent from "../ModalContent";

import "./Modal.scss";

interface IProps {}

export const Modal: React.FC<IProps> = (props) => {
  const {} = props;
  const { toggleModal } = useContext(ModalContext);
  return (
    <div className="Modal">
      <ModalContent>
        <SearchInput />
      </ModalContent>
      <div className="Modal-overlay" onClick={toggleModal} />
    </div>
  );
};

export default Modal;
