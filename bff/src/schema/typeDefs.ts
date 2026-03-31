export const typeDefs = `#graphql
  type Movie {
    id: ID!
    title: String!
    releaseDate: String
    overview: String
    posterPath: String
  }

  type Query {
    searchMovies(query: String!): [Movie!]!
  }
`;