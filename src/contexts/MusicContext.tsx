import React, { createContext, useContext, useState, ReactNode } from 'react';

interface MusicContextType {
  isSongDetailsOpen: boolean;
  isPlayerOpen: boolean;
  setIsSongDetailsOpen: (isOpen: boolean) => void;
  setIsPlayerOpen: (isOpen: boolean) => void;
  closeAll: () => void;
  closeSongDetails: () => void;
}

const MusicContext = createContext<MusicContextType | undefined>(undefined);

export const MusicProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isSongDetailsOpen, setIsSongDetailsOpen] = useState<boolean>(false);
  const [isPlayerOpen, setIsPlayerOpen] = useState<boolean>(false);

  const closeSongDetails = () => {
    setIsSongDetailsOpen(false);
  };

  const closeAll = () => {
    setIsSongDetailsOpen(false);
    setIsPlayerOpen(false);
  };

  return (
    <MusicContext.Provider
      value={{
        isSongDetailsOpen,
        isPlayerOpen,
        setIsSongDetailsOpen,
        setIsPlayerOpen,
        closeAll,
        closeSongDetails,
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
