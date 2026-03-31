import axios from 'axios';

const BASE_URL = process.env.TMDB_BASE_URL;
const API_KEY = process.env.TMDB_API_KEY;

export const searchMedia = async (query: string) => {
  const { data } = await axios.get(`${BASE_URL}/search/multi`, {
    params: { api_key: API_KEY, query },
  });

  return data.results.map((item: any) => ({
    id: item.id,
    title: item.title || item.name,
    poster: item.poster_path
      ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
      : null,
    releaseYear: (item.release_date || item.first_air_date)?.split('-')[0],
    rating: item.vote_average,
    type: item.media_type,
  }));
};