import React from 'react';

export const SongDetails = ({
  songId,
  onClose,
}: {
  songId: string;
  onClose: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <div>
      <h1>Song Details</h1>
      <p>{songId}</p>
      <button onClick={onClose} />
    </div>
  );
};
