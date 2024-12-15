import React, { createContext, useContext, useState, ReactNode } from 'react';

const SearchContext = createContext<
  | {
      query: string;
      setQuery: (q: string) => void;
    }
  | undefined
>(undefined);

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearch debe usarse dentro de un SearchProvider');
  }
  return context;
};

export const SearchProvider = ({ children }: { children: ReactNode }) => {
  const [query, setQuery] = useState('');

  return (
    <SearchContext.Provider value={{ query, setQuery }}>
      {children}
    </SearchContext.Provider>
  );
};
