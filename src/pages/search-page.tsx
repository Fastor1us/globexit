import SearchBar from '../components/search-bar/search-bar';
import UsersList from '../components/users-list/users-list';

import styles from './search-page.module.css';


export default function SearchPage() {
  return (
    <section className={styles.searchPage}>
      <SearchBar />
      <UsersList />
    </section>
  );
}
