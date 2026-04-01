export const typeDefs = `#graphql
  type Media {
    id: ID!
    title: String!
    poster: String
    releaseYear: String
    rating: Float
    type: String
    }

  type Query {
    search(query: String!): [Media!]!
  }
`;