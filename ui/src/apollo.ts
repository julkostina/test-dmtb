import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const uri =
  process.env.GRAPHQL_HTTP_URL ?? "http://localhost:4000/graphql";

export const client = new ApolloClient({
  link: new HttpLink({ uri }),
  cache: new InMemoryCache(),
});