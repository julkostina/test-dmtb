import { useState } from 'react';

type Media = {
  id: string;
  title: string;
  poster?: string | null;
  releaseYear?: string | null;
  rating?: number | null;
  type: string;
};

const STORAGE_KEY = 'watchlist';

const load = (): Media[] => {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '[]');
  } catch {
    return [];
  }
};

export function useWatchlist() {
  const [watchlist, setWatchlist] = useState<Media[]>(load);

  const save = (items: Media[]) => {
    setWatchlist(items);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  };

  const addToWatchlist = (media: Media) => {
    if (!watchlist.find((m) => m.id === media.id)) {
      save([...watchlist, media]);
    }
  };

  const removeFromWatchlist = (id: string) => {
    save(watchlist.filter((m) => m.id !== id));
  };

  const isInWatchlist = (id: string) => watchlist.some((m) => m.id === id);

  return { watchlist, addToWatchlist, removeFromWatchlist, isInWatchlist };
}