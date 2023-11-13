import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { SearchContext } from '../../App';
import debounce from 'lodash.debounce';
import styles from './Search.module.scss';
import search from './search.png';
import close from './close.png';

const Search = () => {
  const [value, setValue] = useState('');

  const {  setSearchValue } = useContext(SearchContext);

  const inputRef = useRef();

  const onClickClear = () => {
    setSearchValue('');
    setValue('');
    inputRef.current.focus();
  };
  const updateSearchValue = useCallback(
    debounce((str) => {
      setSearchValue(str);
    }, 1000),
    [],
  );

  const onChangeInput = (event) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  return (
    <div className={styles.root}>
      <img className={styles.item} src={search} alt="search" />
      <input
        ref={inputRef}
        value={value}
        onChange={onChangeInput}
        className={styles.input}
        placeholder="Поиск пицц ..."
      />
      {value && <img onClick={onClickClear} className={styles.clearIcon} src={close} alt="close" />}
    </div>
  );
};

export default Search;
