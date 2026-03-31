import { searchMedia } from '../services/tmdbService';

export const searchResolvers = async (_: unknown, { query }: { query: string }) => {
  return searchMedia(query);
};

