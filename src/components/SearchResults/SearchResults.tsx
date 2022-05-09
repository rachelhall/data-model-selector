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

  const { selected, setSelected } = useContext(ModalContext);

  const [focus, setFocus] = useChangeFocus(results.length, results);

  const handleSetFocus = useCallback(
    (
      index: number,
      result: ISelectedModel,
      ref: RefObject<HTMLButtonElement>
    ) => {
      setFocus(index);
      setSelected(result);
      console.log({ ref });
      ref.current?.scrollIntoView({ behavior: "smooth" });
    },
    [setFocus, setSelected]
  );

  return (
    <div className="SearchResults">
      {results.map(({ item }, index: number) => {
        return (
          <div>
            <RowItem
              index={index}
              key={item.id}
              item={item}
              handleSetFocus={handleSetFocus}
              selected={selected}
              focus={focus}
            />
          </div>
        );
      })}
    </div>
  );
};

export default SearchResults;
