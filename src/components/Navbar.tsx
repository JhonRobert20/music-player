import React, { useState } from 'react';
import { useSearch } from '@/contexts/SearchContext';

export const Navbar = () => {
  const { setQuery } = useSearch();
  const [localQuery, setLocalQuery] = useState('');
  let debounceTimeout: NodeJS.Timeout;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setLocalQuery(value);

    if (debounceTimeout) clearTimeout(debounceTimeout);

    debounceTimeout = setTimeout(() => {
      setQuery(value);
    }, 1000);
  };

  return (
    <div style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
      <div>logo</div>
      <input
        type="text"
        placeholder="Buscar..."
        value={localQuery}
        onChange={handleInputChange}
        style={{ width: '100%' }}
      />
      <ul>
        <li>
          <a>Home</a>
        </li>
        <li>
          <a>Discover</a>
        </li>
        <li>
          <a>Recent</a>
        </li>
        <li>
          <a>Library</a>
        </li>
      </ul>
      <div>User Logo</div>
    </div>
  );
};
