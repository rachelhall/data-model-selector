import React, { useContext } from "react";
import { CloseOutline } from "react-ionicons";
import { ModalContext } from "../../utils/useModalContext";

import "./ModalContent.scss";

interface IProps {
  className?: string;
  children?: React.ReactNode;
}

export const ModalContent: React.FC<IProps> = (props) => {
  const { children } = props;

  const { toggleModal } = useContext(ModalContext);

  return (
    <div className="ModalContent">
      <div className="ModalContent--closeBtn">
        <CloseOutline onClick={toggleModal} height="40px" width="40px" />
      </div>
      {children}
    </div>
  );
};

export default ModalContent;
