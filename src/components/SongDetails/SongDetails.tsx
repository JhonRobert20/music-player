import React from 'react';
import { useMusicContext } from '@/contexts/MusicContext';
import { useTrackInfo } from '@/hooks/useTrackInfo';
import { SkeletonLoader } from '@/components/SongDetails/SonDetailsSkeleton';

export const SongDetails = () => {
  const { selectedSong } = useMusicContext();

  const { trackInfo, isLoading, error } = useTrackInfo(selectedSong);
  if (isLoading) {
    return <SkeletonLoader />;
  }
  if (error instanceof Error)
    return <div>Estamos teniendo problemas, prueba más tarde</div>;
  if (!trackInfo)
    return <div>No se pudo obtener la información de la canción.</div>;

  return (
    <div>
      <h1>Song Details</h1>
      <p>Title: {trackInfo.album.title}</p>
      <p>Contributors</p>
      {trackInfo.contributors.map(contributor => {
        return (
          <div key={contributor.id}>
            <img src={contributor.picture} />
            <p>
              {contributor.name} with {contributor.role} role{' '}
            </p>
          </div>
        );
      })}
    </div>
  );
};
