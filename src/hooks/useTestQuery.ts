import { useQuery, gql } from '@apollo/client';

// Simple test query to check basic connectivity
const TEST_QUERY = gql`
  query TestQuery {
    __typename
  }
`;

export const useTestQuery = () => {
  const { data, loading, error } = useQuery(TEST_QUERY, {
    errorPolicy: 'all',
    fetchPolicy: 'no-cache',
    onCompleted: (data) => {
      console.log('✅ Test Query Completed:', data);
    },
    onError: (error) => {
      console.error('❌ Test Query Error:', error);
    }
  });

  console.log('🧪 Test Query Status:', { loading, error: !!error, data });

  return { data, loading, error };
};
