import React, { useContext } from 'react';
import {SearchContext} from '../../App'
import styles from './Search.module.scss';
import search from './search.png';
import close from './close.png';

const Search = () => {
  const {searchValue, setSearchValue} = useContext(SearchContext);
  return (
    <div className={styles.root}>
      <img className={styles.item} src={search} alt="search" />
      <input value={searchValue} onChange={(e)=>setSearchValue(e.target.value)} className={styles.input} placeholder="Поиск пицц ..." />
      {searchValue && <img onClick={() => setSearchValue('')} className={styles.clearIcon} src={close} alt="close" />}
    </div>
  );
};

export default Search;
