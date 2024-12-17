// hooks/usePlayer.ts
import { useState, useCallback, useRef } from 'react';
import ReactPlayer from 'react-player';

export const usePlayer = () => {
  const playerRef = useRef<ReactPlayer>(null);
  const [playerState, setPlayerState] = useState({
    playing: false,
    volume: 0.5,
    progress: 0,
    duration: 0,
    currentTime: 0,
  });

  const handleProgress = useCallback(
    ({ played, playedSeconds }: { played: number; playedSeconds: number }) => {
      setPlayerState(prevState => ({
        ...prevState,
        progress: played * 100,
        currentTime: playedSeconds,
      }));
    },
    [],
  );

  const handleDuration = useCallback((duration: number) => {
    setPlayerState(prevState => ({
      ...prevState,
      duration,
    }));
  }, []);

  const handlePlayPause = useCallback(() => {
    setPlayerState(prevState => ({
      ...prevState,
      playing: !prevState.playing,
    }));
  }, []);

  const handleVolumeChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPlayerState(prevState => ({
        ...prevState,
        volume: Number(e.target.value),
      }));
    },
    [],
  );

  const handleProgressChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = Number(e.target.value);
      playerRef.current?.seekTo(value / 100);
    },
    [],
  );

  return {
    playerState,
    playerRef,
    handleProgress,
    handleDuration,
    handlePlayPause,
    handleVolumeChange,
    handleProgressChange,
  };
};
