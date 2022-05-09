import React, { useMemo } from "react";
import { ISelectedModel } from "../../utils/useModalContext";
import { format } from "date-fns";

import "./SelectedOutput.scss";

interface IProps {
  item: ISelectedModel;
}

export const SelectedOutput: React.FC<IProps> = (props) => {
  const { item } = props;

  const { author, id, modified, type } = item;

  const modifiedDate = useMemo(
    () => format(new Date(modified), "MMM, d, YYYY"),
    [modified]
  );

  return (
    <div>
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
    </div>
  );
};

export default SelectedOutput;
