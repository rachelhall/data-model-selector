import React from "react";
import Button from "../../styleComponents/Button";

import "./SortAlphabeticalSelector.scss";

interface IProps {
  sortDirection: "ASC" | "DESC";
  setSortDirection: (value: "ASC" | "DESC") => void;
}

export const SortAlphabeticalSelector: React.FC<IProps> = (props) => {
  const { sortDirection, setSortDirection } = props;

  return (
    <div className="SortAlphabeticalSelector">
      {sortDirection === "ASC" ? (
        <Button
          className="SortAlphabeticalSelector--button"
          onClick={() => setSortDirection("DESC")}
        >
          ASC
        </Button>
      ) : (
        <Button
          className="SortAlphabeticalSelector--button"
          onClick={() => setSortDirection("ASC")}
        >
          DESC
        </Button>
      )}
    </div>
  );
};

export default SortAlphabeticalSelector;
