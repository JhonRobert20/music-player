import React from 'react';

export const SongDetails = ({
  trackId,
  onClose,
}: {
  trackId: string;
  onClose: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <div>
      <h1>Song Details</h1>
      <p>{trackId}</p>
      <button onClick={onClose} />
    </div>
  );
};
