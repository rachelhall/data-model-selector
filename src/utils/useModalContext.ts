import { createContext } from "react";

export interface ISelectedModel {
  id: string;
  author: string;
  modified: number;
  type: string;
}

interface IModalContext {
  modalOpen: boolean;
  toggleModal: () => void;
  selected?: ISelectedModel;
  setSelected: (arg: ISelectedModel) => void;
}

export const ModalContext = createContext<IModalContext>({
  modalOpen: false,
  toggleModal: () => {},
  selected: undefined,
  setSelected: (arg: ISelectedModel) => {},
});
