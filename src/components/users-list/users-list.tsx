import { useEffect } from 'react';
import { useDispatch, useSelector } from '../../utils/hooks/hooks';

import { setSearchData } from '../../store/slicers/searchSlicer';
import { searchAPI } from '../../utils/api/search-api';

import styles from './users-list.module.css';

import Card from '../card/card';


export default function UsersList() {
  const dispatch = useDispatch();

  const searchData = useSelector((state) => state.search);

  const { data, isLoading, isError, isSuccess } = searchAPI.useSearchQuery(null);
  useEffect(() => {
    dispatch(setSearchData({ data, isLoading, isError, isSuccess }));
  }, [isLoading]);

  // key={userData.name} в качестве уникального ключа
  // более разумно было бы использвоать nanoid, я бы уточнил у менеджера
  // или старшего разработчика как поступить (вообще с данными и запросами в целом)
  return (
    <>
      {searchData.isLoading &&
        <div>Loading...</div>}
      {searchData.isError && <div>Error</div>}
      {searchData.isSuccess && searchData.userList.length === 0 && 'No users found'}
      {searchData.userList.length > 0 && <>
        <section className={styles.cardContainer}>
          <ul className={styles.userList}>
            {searchData.userList.map((userData) => {
              return <Card key={userData.name} {...userData} />;
            })}
          </ul>
        </section>
      </>}
    </>
  );
}
