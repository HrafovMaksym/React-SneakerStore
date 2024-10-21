import React from "react";
import styles from "./Input.module.scss";
import debounce from "lodash.debounce";
import { setSearchValue } from "../../redux/slices/filterSlice";
import { useDispatch } from "react-redux";
const Input: React.FC = () => {
  const [value, setValue] = React.useState<string>();
  const inputRef = React.useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const onClickInput = () => {
    dispatch(setSearchValue(""));
    inputRef.current?.focus();
    setValue("");
  };
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChangeSearch(e.target.value);
    setValue(e.target.value);
  };
  const onChangeSearch = React.useCallback(
    debounce((str: string) => dispatch(setSearchValue(str)), 1000),
    []
  );
  return (
    <div className={styles.searchBlock}>
      <input
        ref={inputRef}
        onChange={onChangeInput}
        value={value}
        type="text"
        placeholder="Search sneakers"
      />
      <img
        className={styles.search}
        width={22}
        height={22}
        onClick={onClickInput}
        src={value ? "/img/close.svg" : "/img/search.svg"}
        alt="Search"
      />
    </div>
  );
};
export default Input;
