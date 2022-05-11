import React, { useMemo } from "react";
import { ISearchResult } from "../../API";
import Button from "../../styleComponents/Button";

import "./TypeSelector.scss";

interface IProps {
  results: ISearchResult[];
  filteredTypes: string[];
  setFilteredTypes: (value: string[]) => void;
}

export const TypeSelector: React.FC<IProps> = (props) => {
  const { results, filteredTypes, setFilteredTypes } = props;

  const types = useMemo(() => {
    const onlyTypes = results.map((item) => item.item.type);

    let uniqueTypes: string[] = [];

    onlyTypes.forEach((element) => {
      if (!uniqueTypes.includes(element)) {
        uniqueTypes.push(element);
      }
    });

    return uniqueTypes.sort();
  }, [results]);

  const handleClick = (type: string) => {
    if (filteredTypes.length > 0 && filteredTypes.includes(type)) {
      setFilteredTypes(filteredTypes.filter((t) => t !== type));
    } else setFilteredTypes([...filteredTypes, type]);
  };

  return (
    <div className="TypeSelector">
      {types.length > 0 && (
        <p className="TypeSelector--heading">Filter by type:</p>
      )}
      {types.map((item) => (
        <Button
          key={`key--${item}`}
          onClick={() => handleClick(item)}
          className="TypeSelector--button"
          buttonType={filteredTypes.includes(item) ? "active" : "outline"}
        >
          {item}
        </Button>
      ))}
    </div>
  );
};

export default TypeSelector;
