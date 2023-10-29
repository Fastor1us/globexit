import { useDispatch } from "../../utils/hooks/hooks";
import { useState, useEffect } from 'react';

import styles from './search-bar.module.css';

import magnifierSVG from '../../images/magnifier.svg';

import { searchAPI } from '../../utils/api/search-api';

import { setSearchData } from '../../store/slicers/searchSlicer';


export default function SearchBar() {
  const dispatch = useDispatch();

  const [value, setValue] = useState('');

  const [getUserData, { data, isLoading, isError, isSuccess }] =
    searchAPI.useGetUserDataMutation();
  useEffect(() => {
    isSuccess &&
      dispatch(setSearchData({ data, isLoading, isError, isSuccess }));
  }, [isLoading]);

  // Понимаю, неоптимально делать поиск на ввод каждой буквы - 
  // уходит слишком много запросов на сервер.
  // Мжно сделать по другому, в тз было не до конца понятно.
  // Если надо сделать иначе - не вопрос, поправлю!
  const HandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    getUserData(e.target.value);
  }

  return (
    <section className={styles.inputBarWrapper}>
      <input
        className={styles.inputBar}
        type='text'
        value={value}
        onChange={HandleChange}
      />
      <img
        src={magnifierSVG}
        className={styles.magnifierIcon}
        alt='лупа'
      />
    </section>
  );
}
