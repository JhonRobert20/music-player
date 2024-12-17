import React, { useState } from 'react';
import { useSearch } from '@/contexts/SearchContext';
import * as styles from './Navbar.module.css';
import { NavLink } from './NavLink';

enum NavLinks {
  Home = 'Home',
  Discover = 'Discover',
  Recents = 'Recents',
  Library = 'Library',
}

export const Navbar = () => {
  const { setQuery, query } = useSearch();
  const [activeLink, setActiveLink] = useState('Home');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleLinkClick =
    (link: NavLinks) => (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      setActiveLink(link);
    };

  return (
    <nav
      className={styles.navbar}
      role="navigation"
      aria-label="Main Navigation"
    >
      <div className={styles['navbar__logo']}>
        <img src="/header-logo.png" alt="App Logo" />
      </div>

      <div className={styles['navbar__search']}>
        <img
          src="/search-logo.png"
          alt="Search"
          className={styles['navbar__search-icon']}
        />
        <input
          type="text"
          placeholder="Search artists"
          value={query}
          onChange={handleInputChange}
          className={styles['navbar__search-input']}
          aria-label="Search artists"
        />
      </div>

      <ul className={styles['navbar__links']}>
        <NavLink
          href="#"
          label="Home"
          isActive={activeLink === NavLinks.Home}
          onClick={handleLinkClick(NavLinks.Home)}
        />
        <NavLink
          href="#"
          label="Discover"
          isActive={activeLink === NavLinks.Discover}
          onClick={handleLinkClick(NavLinks.Discover)}
        />
        <NavLink
          href="#"
          label="Recents"
          isActive={activeLink === NavLinks.Recents}
          onClick={handleLinkClick(NavLinks.Recents)}
        />
        <NavLink
          href="#"
          label="Library"
          isActive={activeLink === NavLinks.Library}
          onClick={handleLinkClick(NavLinks.Library)}
        />
      </ul>

      <div className={styles['navbar__user']}>
        <img src="/user.png" alt="User Profile" />
      </div>
    </nav>
  );
};
