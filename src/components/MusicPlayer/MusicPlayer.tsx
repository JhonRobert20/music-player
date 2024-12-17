import React, { useMemo } from 'react';
import ReactDOM from 'react-dom';
import ReactPlayer from 'react-player';
import { useTrackInfo } from '@/hooks/useTrackInfo';
import { useMusicContext } from '@/contexts/MusicContext';
import * as styles from '@/components/MusicPlayer/MusicPlayer.module.css';
import { VolumeControl } from '@/components/VolumeControl/VolumeControl';
import { PlayerControls } from '../PlayerControl/PlayerControl';
import { usePlayer } from '@/hooks/usePlayer';
import { SkeletonLoader } from './SkeletonLoader';

export const MusicPlayer = () => {
  const { isPlayerOpen, selectedSong } = useMusicContext();
  const { trackInfo, isLoading, error } = useTrackInfo(selectedSong);
  const {
    playerState,
    playerRef,
    handleProgress,
    handleDuration,
    handlePlayPause,
    handleVolumeChange,
    handleProgressChange,
  } = usePlayer();

  const { playing, volume, progress, duration, currentTime } = playerState;

  const renderPlayer = useMemo(() => {
    if (error instanceof Error)
      return <div>Estamos teniendo problemas, prueba más tarde</div>;
    if (isLoading) return <SkeletonLoader />;
    if (!trackInfo)
      return <div>No se pudo obtener la información de la canción.</div>;

    return (
      <div className={styles.overlay}>
        <div className={styles.modal} onClick={e => e.stopPropagation()}>
          <div className={styles.modalContent}>
            <img src={trackInfo.album.cover} alt={trackInfo.title} />
            <div className={styles.trackInfo}>
              <h3>{trackInfo.title}</h3>
              <p>{trackInfo.artist.name}</p>
            </div>
            <div className={styles.playerWrapper}>
              <div className={styles.controls}>
                <PlayerControls
                  playing={playing}
                  onPlayPause={handlePlayPause}
                  progress={progress}
                  onProgressChange={handleProgressChange}
                  currentTime={currentTime}
                  duration={duration}
                />

                <VolumeControl
                  volume={volume}
                  onVolumeChange={handleVolumeChange}
                />
              </div>

              <ReactPlayer
                ref={playerRef}
                url={trackInfo.preview}
                playing={playing}
                volume={volume}
                onProgress={handleProgress}
                onDuration={handleDuration}
                width="1px"
                height="1px"
                controls={false}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }, [
    trackInfo,
    isLoading,
    error,
    playing,
    currentTime,
    volume,
    progress,
    duration,
    handlePlayPause,
    handleProgress,
    handleDuration,
    handleVolumeChange,
  ]);

  if (!selectedSong || !isPlayerOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    renderPlayer,
    document.getElementById('modal-root') as HTMLElement,
  );
};
