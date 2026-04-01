
import { useState, useEffect } from 'react';
import { Media } from '../types/media';
export const useWatchlist = () => {
  const [watchlist, setWatchlist] = useState<Media[]>([]);

  useEffect(() => {
    const storedWatchlist = localStorage.getItem('watchlist');
    if (storedWatchlist) {
      setWatchlist(JSON.parse(storedWatchlist));
    }
  }, []);

  const addToWatchlist = (media: Media) => {
    setWatchlist((prev) => [...prev, media]);
    localStorage.setItem('watchlist', JSON.stringify([...watchlist, media]));
  };

  const removeFromWatchlist = (media: Media) => {
    setWatchlist((prev) => prev.filter((item) => item.id !== media.id));
    localStorage.setItem('watchlist', JSON.stringify(watchlist.filter((item) => item.id !== media.id)));
  };
  
  return {
    watchlist,
    addToWatchlist,
    removeFromWatchlist,
  };
};
