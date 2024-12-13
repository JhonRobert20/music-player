import React, { createContext, useContext, useState, ReactNode } from 'react';

interface MusicContextType {
  selectedSong: string | null;
  isSongDetailsOpen: boolean;
  isPlayerOpen: boolean;
  setSelectedSong: (songId: string | null) => void;
  setIsSongDetailsOpen: (isOpen: boolean) => void;
  setIsPlayerOpen: (isOpen: boolean) => void;
  closeAll: () => void;
}

const MusicContext = createContext<MusicContextType | undefined>(undefined);

export const MusicProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [selectedSong, setSelectedSong] = useState<string | null>(null);
  const [isSongDetailsOpen, setIsSongDetailsOpen] = useState<boolean>(false);
  const [isPlayerOpen, setIsPlayerOpen] = useState<boolean>(false);

  const closeAll = () => {
    setIsSongDetailsOpen(false);
    setIsPlayerOpen(false);
    setSelectedSong(null);
  };

  return (
    <MusicContext.Provider
      value={{
        selectedSong,
        isSongDetailsOpen,
        isPlayerOpen,
        setSelectedSong,
        setIsSongDetailsOpen,
        setIsPlayerOpen,
        closeAll,
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
