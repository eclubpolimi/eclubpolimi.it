import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: process.env.CMS_GRAPHQL_ENDPOINT,
  headers: {
    Authorization: `Bearer ${process.env.CMS_ACCESS_TOKEN}`,
  },
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network',
    },
  },
});

export default client;
