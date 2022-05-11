import React, { useContext, useMemo, useState } from "react";
import { SearchOutline, CloseCircleOutline } from "react-ionicons";
import SearchResults from "../SearchResults";
import "./SearchInput.scss";
import { search } from "../../API";
import Button from "../../styleComponents/Button";
import { ISelectedModel, ModalContext } from "../../utils/useModalContext";
import TypeSelector from "../TypeSelector";
import { groupBy } from "../../utils/groupBy";
import SortAlphabeticalSelector from "../SortAlphabeticalSelector";

interface IProps {}

export const SearchInput: React.FC<IProps> = (props) => {
  const {} = props;

  const { toggleModal } = useContext(ModalContext);

  const [input, setInput] = useState<string>("");
  const [filteredTypes, setFilterTypes] = useState<string[]>([]);

  const results = search(input);

  const [sortDirection, setSortDirection] = useState<"ASC" | "DESC">("DESC");

  const sortedResults = useMemo(() => {
    const sorted = results.sort((a, b) => {
      if (sortDirection === "DESC") {
        return a.item.id.localeCompare(b.item.id);
      } else return b.item.id.localeCompare(a.item.id);
    });

    return sorted;
  }, [results, sortDirection]);

  const filteredResults = useMemo(() => {
    if (filteredTypes.length === 0) {
      return sortedResults;
    } else
      return sortedResults.filter((item) => {
        return filteredTypes.includes(item.item.type);
      });
  }, [filteredTypes, sortedResults]);

  const filteredResultsWithHeadings = useMemo(() => {
    const sortedArr = filteredResults.map((item) => item["item"]);

    const groupedResults = groupBy(sortedArr, "type");

    const entries = Object.entries(groupedResults).flat(2);

    return entries.map((item, index) => {
      if (typeof item === "string") {
        return {
          id: index.toString(),
          author: "heading",
          modified: 0,
          type: item,
        } as ISelectedModel;
      } else return item;
    }) as ISelectedModel[];
  }, [filteredResults]);

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
      {results.length > 0 && (
        <div className="SearchInput--row">
          <TypeSelector
            results={results}
            filteredTypes={filteredTypes}
            setFilteredTypes={setFilterTypes}
          />
          <SortAlphabeticalSelector
            sortDirection={sortDirection}
            setSortDirection={setSortDirection}
          />
        </div>
      )}
      <SearchResults results={filteredResultsWithHeadings} />
    </div>
  );
};

export default SearchInput;
