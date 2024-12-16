import React from 'react';
import { useSearch } from '@/contexts/SearchContext';
import * as styles from './Navbar.module.css'; // Asegúrate de importar el archivo de estilos

export const Navbar = () => {
  const { setQuery, query } = useSearch();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <img src="/header-logo.png" alt="Logo" />
      </div>
      <div className={styles.search}>
        <img src="/search-logo.png" alt="Search Logo" />
        <input
          type="text"
          placeholder="Search artists"
          value={query}
          onChange={handleInputChange}
          className={styles.searchInput}
        />
      </div>
      <ul className={styles.navLinks}>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Discover</a>
        </li>
        <li>
          <a href="#">Recent</a>
        </li>
        <li>
          <a href="#">Library</a>
        </li>
      </ul>
      <div className={styles.user}>
        <img src="/user.png" alt="User" />
      </div>
    </div>
  );
};
