import "./env";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema/typeDefs";
import { resolvers } from "./resolvers";

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const parsed = Number.parseInt(process.env.PORT ?? "", 10);
const port = Number.isFinite(parsed) && parsed > 0 ? parsed : 4000;

const { url } = await startStandaloneServer(server, {
  listen: { port },
});

