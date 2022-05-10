import React from "react";
import { ISelectedModel } from "../../utils/useModalContext";

import "./RowHeading.scss";

interface IProps {
  item: ISelectedModel;
}

export const RowHeading: React.FC<IProps> = (props) => {
  const { item } = props;

  return (
    <div className="RowHeading">
      <p className="RowHeading--title">{item.type.toLowerCase()}</p>
    </div>
  );
};

export default RowHeading;
