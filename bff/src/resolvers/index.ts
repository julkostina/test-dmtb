import { searchResolvers} from './searchResolvers';

export const resolvers = {
  Query: {
    ...searchResolvers,
  },
};