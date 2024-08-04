import { useId } from "react";
const SearchBox = ({ value, onFilter }) => {
  const id = useId();
  return (
    <div>
      <label htmlFor={id}>Find contacts by name</label>

      <input
        type="text"
        value={value}
        onChange={(e) => onFilter(e.target.value)}
        id={id}
      />
    </div>
  );
};
export default SearchBox;
