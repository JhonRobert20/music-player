import React, { createContext, useContext, useState, ReactNode } from 'react';

interface SelectedSongContextType {
  selectedSong: string | null;
  selectedSongIsNew: boolean;
  setSelectedSong: (selectedSong: string | null) => void;
  setSelectedSongIsNew: (selectedSongIsNew: boolean) => void;
}

const SelectedSongContext = createContext<SelectedSongContextType | undefined>(
  undefined,
);

export const SelectedSongProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [selectedSong, setSelectedSong] = useState<string | null>(null);
  const [selectedSongIsNew, setSelectedSongIsNew] = useState<boolean>(true);

  return (
    <SelectedSongContext.Provider
      value={{
        selectedSong,
        setSelectedSong,
        selectedSongIsNew,
        setSelectedSongIsNew,
      }}
    >
      {children}
    </SelectedSongContext.Provider>
  );
};

export const useSelectedSongContext = (): SelectedSongContextType => {
  const context = useContext(SelectedSongContext);
  if (!context) {
    throw new Error(
      'useSelectedSongContext must be used within a SelectedSongProvider',
    );
  }
  return context;
};