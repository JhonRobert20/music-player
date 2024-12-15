import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPlayer from 'react-player';
import { useTrackInfo } from '@/hooks/useTrackInfo';
import { useMusicContext } from '@/contexts/MusicContext';
import { useSelectedSongContext } from '@/contexts/SelectedSongContext';
import styles from '@/components/MusicPlayer.module.css';

export const MusicPlayer = () => {
  const { closeAll, isPlayerOpen, setIsPlayerOpen } = useMusicContext();
  const { selectedSong, selectedSongIsNew, setSelectedSongIsNew } =
    useSelectedSongContext();
  const [closing, setClosing] = useState(false);
  useEffect(() => {
    if (selectedSongIsNew && selectedSong) {
      setIsPlayerOpen(true);
      setSelectedSongIsNew(false);
    }
  }, []);

  if (!selectedSong || !isPlayerOpen) {
    return null;
  }

  const { data: trackInfo, isLoading, error } = useTrackInfo(selectedSong);

  if (isLoading) return <div>Cargando...</div>;
  if (error instanceof Error)
    return <div>Estamos teniendo problemas, prueba más tarde</div>;

  if (!trackInfo)
    return <div>No se pudo obtener la información de la canción.</div>;

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      closeAll();
      setClosing(false);
    }, 400);
  };

  const modalContent = (
    <div className={styles.overlay} onClick={handleClose}>
      <div
        className={`${styles.modal} ${closing ? styles.closing : ''}`}
        onClick={e => e.stopPropagation()}
      >
        <button className={styles.closeButton} onClick={handleClose}>
          ✖
        </button>
        <h2>{trackInfo.title}</h2>
        <p>Artista: {trackInfo.artist.name}</p>
        <p>Álbum: {trackInfo.album.title}</p>
        <ReactPlayer url={trackInfo.preview} controls={true} playing={false} />
      </div>
    </div>
  );

  return ReactDOM.createPortal(
    modalContent,
    document.getElementById('modal-root') as HTMLElement,
  );
};
