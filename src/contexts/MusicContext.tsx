import React, { createContext, useContext, useState, ReactNode } from 'react';

interface MusicContextType {
  isSongDetailsOpen: boolean;
  isPlayerOpen: boolean;
  setIsSongDetailsOpen: (isOpen: boolean) => void;
  setIsPlayerOpen: (isOpen: boolean) => void;
  closeAll: () => void;
  openAll: () => void;
  closeSongDetails: () => void;
  selectedSong: number | null;
  setSelectedSong: (selectedSong: number | null) => void;
}

const MusicContext = createContext<MusicContextType | undefined>(undefined);

export const MusicProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isSongDetailsOpen, setIsSongDetailsOpen] = useState<boolean>(true);
  const [isPlayerOpen, setIsPlayerOpen] = useState<boolean>(true);
  const [selectedSong, setSelectedSong] = useState<number | null>(null);

  const closeSongDetails = () => {
    setIsSongDetailsOpen(false);
  };

  const closeAll = () => {
    setIsSongDetailsOpen(false);
    setIsPlayerOpen(false);
  };

  const openAll = () => {
    setIsPlayerOpen(true);
    setIsSongDetailsOpen(true);
  };

  return (
    <MusicContext.Provider
      value={{
        isSongDetailsOpen,
        isPlayerOpen,
        setIsSongDetailsOpen,
        setIsPlayerOpen,
        selectedSong,
        closeAll,
        closeSongDetails,
        openAll,
        setSelectedSong
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
