import axios from 'axios';
import * as dotenv from 'dotenv';
dotenv.config({path: '../.env'});
import { Media } from '../types/tmdbServiceTypes';
const BASE_URL = process.env.TMDB_BASE_URL;
const ACCESS_TOKEN = process.env.TMDB_ACCESS_TOKEN;

export const searchMedia = async (query: string) => {
  const { data } = await axios.get(`${BASE_URL}/search/multi`, {
    params: { query },
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${ACCESS_TOKEN}`,
    },
  });

  return data.results
    .filter((item: Media) => item.media_type === 'movie' || item.media_type === 'tv')
    .map((item: Media) => ({
      id: item.id,
      title: item.title || item.name,
      poster: (item.poster_path
        ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
        : null),
      releaseYear: (item.release_date || item.first_air_date)?.split('-')[0],
      rating: item.vote_average,
      type: item.media_type,           
    }));
};

export const getPopularMovies = async () => {
  const { data } = await axios.get(`${BASE_URL}/movie/popular`, {
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${ACCESS_TOKEN}`,
    },
  });

  return data.results.map((item: Media) => ({
    id: item.id,
    title: item.title || 'Unknown Title',
    poster: item.poster_path
      ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
      : null,
    releaseYear: item.release_date ? item.release_date.split('-')[0] : null,
    rating: item.vote_average || null,
    type: 'movie',
  }));
};