import "../env";
import axios from "axios";
import { Media } from "../types/tmdbServiceTypes";

const BASE_URL =
  process.env.TMDB_BASE_URL ?? "https://api.themoviedb.org/3";
const API_KEY = process.env.TMDB_API_KEY;
const ACCESS_TOKEN = process.env.TMDB_ACCESS_TOKEN;

const tmdb = axios.create({
  baseURL: BASE_URL,
  headers: {
    accept: "application/json",
    ...(API_KEY || !ACCESS_TOKEN
      ? {}
      : { Authorization: `Bearer ${ACCESS_TOKEN}` }),
  },
  params: API_KEY ? { api_key: API_KEY } : {},
});

export const searchMedia = async (query: string) => {
const { data } = await tmdb.get("/search/multi", {
    params: { query },
  });
  return data.results
    .filter(
      (item: Media) => item.media_type === "movie" || item.media_type === "tv",
    )
    .map((item: Media) => ({
      id: item.id,
      title: item.title || item.name,
      poster: item.poster_path
        ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
        : null,
      releaseYear: (item.release_date || item.first_air_date)?.split("-")[0],
      rating: item.vote_average,
      type: item.media_type,
    }));
};

export const getPopularMovies = async () => {
  const { data } = await tmdb.get("/movie/popular");
  return data.results.map((item: Media) => ({
    id: item.id,
    title: item.title || "Unknown Title",
    poster: item.poster_path
      ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
      : null,
    backdrop: item.backdrop_path
      ? `https://image.tmdb.org/t/p/original${item.backdrop_path}`
      : null,
    releaseYear: item.release_date ? item.release_date.split("-")[0] : null,
    rating: item.vote_average || null,
    type: "movie",
  }));
};
