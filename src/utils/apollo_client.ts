import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

// Get environment variables - NEXT_PUBLIC_ required for browser access
const endpoint = process.env.NEXT_PUBLIC_CMS_GRAPHQL_ENDPOINT;
const token = process.env.NEXT_PUBLIC_CMS_ACCESS_TOKEN;

// Simple HTTP link
const httpLink = createHttpLink({
  uri: endpoint,
});

// Auth link
const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${token}`,
    },
  };
});

// Create and export Apollo Client
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network',
    },
  },
});

export default client;
