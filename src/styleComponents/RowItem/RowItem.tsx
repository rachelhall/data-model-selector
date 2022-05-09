import React, { RefObject, useEffect, useMemo, useRef } from "react";
import { format } from "date-fns";

import "./RowItem.scss";
import Divider from "../Divider";
import { ISelectedModel } from "../../utils/useModalContext";

interface IProps {
  item: ISelectedModel;
  index: number;
  handleSetFocus: (index: number, result: ISelectedModel) => void;
  focus: boolean;
  onClick: (result: ISelectedModel, ref: RefObject<HTMLButtonElement>) => void;
}

export const RowItem: React.FC<IProps> = (props) => {
  const { focus, onClick, item } = props;
  const { id, modified, author, type } = item;

  const modifiedDate = useMemo(
    () => format(new Date(modified), "MMM, d, YYYY"),
    [modified]
  );

  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (focus) {
      buttonRef?.current?.focus();
    }
  }, [focus]);

  const handleClick = () => {
    onClick(item, buttonRef);
  };

  return (
    <button className="RowItem" ref={buttonRef} onClick={handleClick}>
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
