import React, { createContext, useContext, ReactNode, useState } from 'react';

interface MusicContextType {
  isSongDetailsOpen: boolean;
  isPlayerOpen: boolean;
  toggleSongDetails: () => void;
  openDetails: () => void;
  setIsPlayerOpen: (isOpen: boolean) => void;

  setSelectedSong: (selectedSong: number | null) => void;
  selectedSong: number | null;
}

const MusicContext = createContext<MusicContextType | undefined>(undefined);

export const MusicProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isSongDetailsOpen, setIsSongDetailsOpen] = useState<boolean>(false);
  const [isPlayerOpen, setIsPlayerOpen] = useState<boolean>(true);
  const [selectedSong, setSelectedSong] = useState<number | null>(null);

  const toggleSongDetails = () => {
    setIsSongDetailsOpen(prev => !prev);
  };

  const openDetails = () => {
    setIsSongDetailsOpen(true);
  };

  return (
    <MusicContext.Provider
      value={{
        isSongDetailsOpen,
        isPlayerOpen,
        toggleSongDetails,
        setIsPlayerOpen,
        openDetails,
        selectedSong,
        setSelectedSong,
      }}
    >
      {children}
    </MusicContext.Provider>
  );
};

export const useMusicContext = (): MusicContextType => {
  const context = useContext(MusicContext);
  if (!context) {
    throw new Error('useMusicContext must be used within a MusicProvider');
  }
  return context;
};
