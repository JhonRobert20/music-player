// components/PlayerControls.tsx
import React from 'react';
import * as styles from '@/components/PlayerControl/PlayerControl.module.css';

interface PlayerControlsProps {
  playing: boolean;
  onPlayPause: () => void;
  progress: number;
  onProgressChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  currentTime: number;
  duration: number;
}

export const PlayerControls: React.FC<PlayerControlsProps> = ({
  playing,
  onPlayPause,
  progress,
  onProgressChange,
  currentTime,
  duration,
}) => (
  <div className={styles.playProgressWrapper}>
    <button className={styles.playPauseButton} onClick={onPlayPause}>
      {playing ? (
        <svg
          className={styles.svg_player}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            fillRule="evenodd"
            d="M8 5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H8Zm7 0a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1Z"
            clipRule="evenodd"
          />
        </svg>
      ) : (
        <svg
          className={styles.svg_player}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            fillRule="evenodd"
            d="M8.6 5.2A1 1 0 0 0 7 6v12a1 1 0 0 0 1.6.8l8-6a1 1 0 0 0 0-1.6l-8-6Z"
            clipRule="evenodd"
          />
        </svg>
      )}
    </button>

    <div className={styles.progressWrapper}>
      <div className={styles.timeLabels}>
        <span>{Math.floor(currentTime)}s</span>

        <input
          type="range"
          min="0"
          max="100"
          value={progress}
          onChange={onProgressChange}
          className={styles.progressBar}
        />
        <span>{Math.floor(duration)}s</span>
      </div>
    </div>
  </div>
);
