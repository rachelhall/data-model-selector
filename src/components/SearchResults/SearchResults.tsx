import React, { RefObject, useCallback, useContext, useState } from "react";
import { ISearchResult } from "../../API";

import RowItem from "../../styleComponents/RowItem";
import { useChangeFocus } from "../../utils/useChangeFocus";
import { ISelectedModel, ModalContext } from "../../utils/useModalContext";

import "./SearchResults.scss";

interface IProps {
  results: ISearchResult[];
}

export const SearchResults: React.FC<IProps> = (props) => {
  const { results } = props;

  const [focus, setFocus] = useChangeFocus(results.length);

  const { setSelected } = useContext(ModalContext);

  const handleClick = useCallback(
    (result: ISelectedModel, ref: RefObject<HTMLButtonElement>) => {
      setSelected(result);
      ref?.current?.focus();
    },
    [setSelected]
  );

  const handleSetFocus = useCallback(
    (index: number, result: ISelectedModel) => {
      setFocus(index);
      setSelected(result);
    },
    [setFocus, setSelected]
  );

  return (
    <div className="SearchResults">
      {results.map(({ item }, index: number) => {
        return (
          <div>
            <RowItem
              key={item.id}
              item={item}
              focus={index === focus}
              index={index}
              handleSetFocus={handleSetFocus}
              onClick={handleClick}
            />
          </div>
        );
      })}
    </div>
  );
};

export default SearchResults;
