import React, { useContext, useMemo, useState } from "react";
import { SearchOutline, CloseCircleOutline } from "react-ionicons";
import SearchResults from "../SearchResults";
import "./SearchInput.scss";
import { search } from "../../API";
import Button from "../../styleComponents/Button";
import { ModalContext } from "../../utils/useModalContext";

interface IProps {}

export const SearchInput: React.FC<IProps> = (props) => {
  const {} = props;

  const { toggleModal } = useContext(ModalContext);

  const [input, setInput] = useState<string>("");

  const results = search(input);

  const sortedResults = useMemo(() => {
    const sorted = results.sort((a, b) => {
      return a.item.type.localeCompare(b.item.type);
    });
    return sorted;
  }, [results]);

  return (
    <div className="SearchInput">
      <div className="SearchInput--row">
        <div className="SearchInput--container">
          <SearchOutline height="40px" width="40px" color={"#3b454e"} />
          <input
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
      <SearchResults results={sortedResults} />
    </div>
  );
};

export default SearchInput;
