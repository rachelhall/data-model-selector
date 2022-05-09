import React, { RefObject, useMemo, useRef } from "react";
import { format } from "date-fns";
import cx from "classnames";

import "./RowItem.scss";
import Divider from "../Divider";
import { ISelectedModel } from "../../utils/useModalContext";

interface IProps {
  item: ISelectedModel;
  index: number;
  handleSetFocus: (
    index: number,
    result: ISelectedModel,
    ref: RefObject<HTMLButtonElement>
  ) => void;
  focus?: number;
  selected?: ISelectedModel;
  setSelect?: (value: boolean) => void;
}

export const RowItem: React.FC<IProps> = (props) => {
  const { item, focus, handleSetFocus, index } = props;
  const { id, modified, author, type } = item;

  const modifiedDate = useMemo(
    () => format(new Date(modified), "MMM, d, YYYY"),
    [modified]
  );

  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClick = () => {
    handleSetFocus(index, item, buttonRef);
  };

  const isSelected = index === focus;

  if (isSelected) {
    buttonRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  const mainClass = cx("RowItem", isSelected && "RowItem--isSelected");

  return (
    <button className={mainClass} ref={buttonRef} onClick={handleClick}>
      <div className="RowItem--row">
        <p className="RowItem--author">
          <span style={{ fontWeight: 800, marginRight: ".5rem" }}>Author:</span>
          {author}
        </p>
        <p className="RowItem--modified">{modifiedDate}</p>
      </div>

      <p className="RowItem--id">
        <span style={{ fontWeight: 800, marginRight: ".5rem" }}>ID:</span> {id}
      </p>
      <p>
        <span style={{ fontWeight: 800, marginRight: ".5rem" }}>Type:</span>
        {type.toString()}
      </p>

      <Divider />
    </button>
  );
};

export default RowItem;
