import { useState } from "react";
import { gql } from "@apollo/client";
import { useQuery, useLazyQuery } from "@apollo/client/react";
import Header from "../components/Header";
import SearchInput from "../components/SearchInput";
import MovieCard from "../components/MovieCard";
import { useWatchlist } from "../hooks/useWatchlist";
import {
  PageBackground,
  FlexColumnContainer,
  H1Container,
  PContainer,
} from "../styles";

type Media = {
  id: string;
  title: string;
  poster?: string | null;
  releaseYear?: string | null;
  rating?: number | null;
  type: string;
};

const GET_POPULAR_MOVIES = gql`
  query getPopularMovies {
    popular {
      id
      backdrop
    }
  }
`;

const SEARCH = gql`
  query Search($query: String!) {
    search(query: $query) {
      id
      title
      poster
      releaseYear
      rating
      type
    }
  }
`;

function SearchPage() {
  const [query, setQuery] = useState("");

  const { data: popularData } = useQuery<{ popular: { id: string; backdrop?: string | null }[] }>(GET_POPULAR_MOVIES);
  const backdrop = popularData?.popular?.[0]?.backdrop;
  const { addToWatchlist, isInWatchlist } = useWatchlist();

  const [search, { data: searchData, loading, error }] = useLazyQuery<{ search: Media[] }, { query: string }>(SEARCH);

  const handleSearch = (value: string) => {
    setQuery(value);
    if (value.trim()) {
      search({ variables: { query: value } });
    }
  };

  const results: Media[] = searchData?.search ?? [];

  return (
    <PageBackground backdrop={backdrop}>
      <Header />
      <FlexColumnContainer style={{ height: "80vh", justifyContent: "center" }}>
        <H1Container>Search movies service</H1Container>
        <PContainer style={{ textAlign: "center", maxWidth: "600px" }}>
          Search for your favorite movies and TV shows.
        </PContainer>
        <SearchInput value={query} onChange={handleSearch} loading={loading} />
      

      {loading && <p>Loading...</p>}
      {error && <p>Something went wrong.</p>}
      {!loading && query && results.length === 0 && <p>Nothing found.</p>}

      {query && <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 16, padding: 16, maxHeight:"600px", overflowY: "auto" }}>
        {results.map((item) => (
          <MovieCard
            key={item.id}
            media={item}
            onAddToWatchlist={addToWatchlist}
            isInWatchlist={isInWatchlist(item.id)}
          />
        ))}
      </div>}
      </FlexColumnContainer>
    </PageBackground>
  );
}

export default SearchPage;
