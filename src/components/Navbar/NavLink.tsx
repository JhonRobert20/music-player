import React from 'react';
import * as styles from './Navbar.module.css';

type NavLinkProps = {
  href: string;
  label: string;
  isActive?: boolean;
  onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
};

export const NavLink: React.FC<NavLinkProps> = ({
  href,
  label,
  isActive = false,
  onClick,
}) => (
  <li>
    <a
      href={href}
      onClick={onClick}
      className={`${styles['navbar__link']} ${
        isActive ? styles['navbar__link--active'] : ''
      }`}
      aria-current={isActive ? 'page' : undefined}
    >
      {label}
    </a>
  </li>
);
