import React, { useContext, useEffect, useMemo, useState } from "react";
import { SearchOutline, CloseCircleOutline } from "react-ionicons";
import SearchResults from "../SearchResults";
import "./SearchInput.scss";
import { ISearchResult, search } from "../../API";
import Button from "../../styleComponents/Button";
import { ISelectedModel, ModalContext } from "../../utils/useModalContext";
import TypeSelector from "../TypeSelector";

interface IProps {}

export const SearchInput: React.FC<IProps> = (props) => {
  const {} = props;

  const { toggleModal } = useContext(ModalContext);

  const [input, setInput] = useState<string>("");
  const [filteredTypes, setFilterTypes] = useState<string[]>([]);

  const results = search(input);

  const sortedResults = useMemo(() => {
    const sorted = results.sort((a, b) => {
      return a.item.type.localeCompare(b.item.type);
    });

    return sorted;
  }, [results]);

  const filteredResults = useMemo(() => {
    if (filteredTypes.length === 0) {
      return sortedResults;
    } else
      return sortedResults.filter((item) => {
        return filteredTypes.includes(item.item.type);
      });
  }, [filteredTypes, sortedResults]);

  // const sortedResultsWithDividers = useMemo(() => {
  //   sortedResults.forEach((result, index) => {
  //     if (result.item.type !== sortedResults[index + 1].item.type) {
  //       sortedResults.splice(index + 1, 0, {
  //         item: {
  //           id: "divider",
  //           author: "",
  //           modified: 0,
  //           type: result.item.type,
  //         },
  //       });
  //     }
  //   });
  //   return sortedResults;
  // }, [sortedResults]);

  return (
    <div className="SearchInput">
      <div className="SearchInput--row">
        <div className="SearchInput--container">
          <SearchOutline height="40px" width="40px" color={"#3b454e"} />
          <input
            autoFocus
            className="SearchInput--input"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter your search term"
          />
          <CloseCircleOutline
            height="40px"
            width="40px"
            color={"#dae0e7"}
            onClick={() => setInput("")}
          />
        </div>
        <Button onClick={toggleModal}>Select</Button>
      </div>
      <TypeSelector
        results={results}
        filteredTypes={filteredTypes}
        setFilteredTypes={setFilterTypes}
      />
      <SearchResults results={filteredResults} />
    </div>
  );
};

export default SearchInput;
