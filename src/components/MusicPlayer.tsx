import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import ReactPlayer from 'react-player';
import { useTrackInfo } from '@/hooks/useTrackInfo';
import { useMusicContext } from '@/contexts/MusicContext';
import * as styles from '@/components/MusicPlayer.module.css';

export const MusicPlayer = () => {
  const { closeAll, isPlayerOpen, openAll, selectedSong } = useMusicContext();
  const [closing, setClosing] = useState(false);
  const { data: trackInfo, isLoading, error } = useTrackInfo(selectedSong);

  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const playerRef = useRef<ReactPlayer>(null);

  useEffect(() => {
    if (selectedSong) {
      openAll();
    }
  }, [selectedSong]);

  const handleProgress = (state: {
    played: number;
    playedSeconds: number;
    loaded: number;
    loadedSeconds: number;
  }) => {
    setProgress(state.played * 100);
    setCurrentTime(state.playedSeconds);
  };

  const handleDuration = (duration: number) => {
    setDuration(duration);
  };

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      closeAll();
      setClosing(false);
    }, 400);
  };

  const handlePlayPause = () => {
    setPlaying(!playing);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(Number(e.target.value));
  };

  if (!selectedSong || !isPlayerOpen) {
    return null;
  }

  if (isLoading) return <div>Cargando...</div>;
  if (error instanceof Error)
    return <div>Estamos teniendo problemas, prueba más tarde</div>;

  if (!trackInfo)
    return <div>No se pudo obtener la información de la canción.</div>;

  const modalContent = (
    <div className={styles.overlay}>
      <div
        className={`${styles.modal} ${closing ? styles.closing : ''}`}
        onClick={e => e.stopPropagation()}
      >
        <button className={styles.closeButton} onClick={handleClose}>
          ✖
        </button>
        <div className={styles.modalContent}>
          <div className={styles.trackImage}>
            <img src={trackInfo.album.cover} alt={trackInfo.title} />
          </div>
          <div className={styles.trackInfo}>
            <h3>{trackInfo.title}</h3>
            <p>{trackInfo.artist.name}</p>
          </div>
          <div className={styles.playerWrapper}>
            <div className={styles.controls}>
              <div className={styles.playProgressWrapper}>
                <button
                  className={styles.playPauseButton}
                  onClick={handlePlayPause}
                >
                  {playing ? 'Pause' : 'Play'}
                </button>

                <div className={styles.progressWrapper}>
                  <div className={styles.timeLabels}>
                    <span>{Math.floor(currentTime)}s</span>

                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={progress}
                      onChange={e =>
                        playerRef.current?.seekTo(Number(e.target.value) / 100)
                      }
                      className={styles.progressBar}
                    />
                    <span>{Math.floor(duration)}s</span>
                  </div>
                </div>
              </div>

              <div className={styles.volumeControl}>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={volume}
                  onChange={handleVolumeChange}
                  className={styles.volumeSlider}
                />
              </div>
            </div>

            <ReactPlayer
              ref={playerRef}
              url={trackInfo.preview}
              playing={playing}
              volume={volume}
              onProgress={handleProgress}
              onDuration={handleDuration}
              width="100%"
              height="50px"
              controls={false}
            />
          </div>
        </div>
      </div>
    </div>
  );

  return ReactDOM.createPortal(
    modalContent,
    document.getElementById('modal-root') as HTMLElement,
  );
};
