import { useState } from "react";

export const useModal = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };
  return {
    toggleModal,
    modalOpen,
  };
};
