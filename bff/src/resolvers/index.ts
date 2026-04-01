import { searchMedia, getPopularMovies} from '../services/tmdbService';

export const resolvers = {
  Query: {
    search: (_:unknown, { query }: { query: string }) => searchMedia(query),
    popular: () => getPopularMovies(),
  },
};