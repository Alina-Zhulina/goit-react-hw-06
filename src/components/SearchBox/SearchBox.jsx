import { useId } from "react";
import css from "./SearchBox.module.css";

const SearchBox = ({ value, onFilter }) => {
  const id = useId();
  return (
    <div className={css.searchContainer}>
      <label htmlFor={id} className={css.labelSearch}>
        Find contacts by name
      </label>

      <input
        className={css.inputSearch}
        type="text"
        value={value}
        onChange={(e) => onFilter(e.target.value)}
        id={id}
      />
    </div>
  );
};
export default SearchBox;
