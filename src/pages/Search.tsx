import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

interface SearchPageProps {
  setSelectedSong: (songId: string) => void;
}

const SearchPage: React.FC<SearchPageProps> = ({ setSelectedSong }) => {
  const { term } = useParams();
  const [searchInput, setSearchInput] = useState(term || '');

  const handleSearch = () => {
    // wip
  };

  const handleSongClick = (songId: string) => {
    setSelectedSong(songId);
  };

  return (
    <div className="search-page">
      <div className="search-bar">
        <input
          type="text"
          value={searchInput}
          onChange={e => setSearchInput(e.target.value)}
          placeholder="Search for a song, artist, or album..."
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <div className="search-results">
        {term && (
          <ul>
            <li onClick={() => handleSongClick('1')}>Song 1</li>
            <li onClick={() => handleSongClick('2')}>Song 2</li>
            <li onClick={() => handleSongClick('3')}>Song 3</li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
