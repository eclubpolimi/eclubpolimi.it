import { useState, useEffect } from 'react';
import { ApolloClient, InMemoryCache, createHttpLink, gql } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const TestGraphQL = () => {
  const [testResult, setTestResult] = useState('Testing...');
  const [siteImageResult, setSiteImageResult] = useState('Testing...');
  const [envCheck, setEnvCheck] = useState('Checking...');

  useEffect(() => {
    console.log('🧪 Starting GraphQL connectivity tests...');

    // First, check environment variables
    const endpoint = process.env.NEXT_PUBLIC_CMS_GRAPHQL_ENDPOINT || process.env.CMS_GRAPHQL_ENDPOINT;
    const token = process.env.NEXT_PUBLIC_CMS_ACCESS_TOKEN || process.env.CMS_ACCESS_TOKEN;
    
    console.log('🔍 Environment Variables:', {
      endpoint: endpoint ? `${endpoint.substring(0, 30)}...` : 'MISSING',
      token: token ? `${token.substring(0, 10)}...` : 'MISSING',
      hasNextPublicEndpoint: !!process.env.NEXT_PUBLIC_CMS_GRAPHQL_ENDPOINT,
      hasRegularEndpoint: !!process.env.CMS_GRAPHQL_ENDPOINT,
      hasNextPublicToken: !!process.env.NEXT_PUBLIC_CMS_ACCESS_TOKEN,
      hasRegularToken: !!process.env.CMS_ACCESS_TOKEN
    });

    if (!endpoint || !token) {
      const errorMsg = `MISSING CREDENTIALS: endpoint=${!!endpoint}, token=${!!token}`;
      setEnvCheck(errorMsg);
      setTestResult(errorMsg);
      setSiteImageResult(errorMsg);
      return;
    }

    setEnvCheck(`✅ Credentials found: ${endpoint.substring(0, 30)}...`);

    // Create a fresh Apollo Client for testing
    const httpLink = createHttpLink({
      uri: endpoint,
      fetch: (uri, options) => {
        console.log('🌐 Raw fetch request to:', uri);
        console.log('🌐 Request options:', {
          method: options?.method,
          headers: options?.headers,
          body: options?.body ? JSON.parse(options.body as string) : undefined
        });
        
        return fetch(uri, options)
          .then(response => {
            console.log('📡 Raw fetch response:', {
              status: response.status,
              statusText: response.statusText,
              headers: Object.fromEntries(response.headers.entries())
            });
            return response;
          })
          .catch(error => {
            console.error('🚨 Raw fetch error:', error);
            throw error;
          });
      }
    });

    const authLink = setContext((_, { headers }) => {
      return {
        headers: {
          ...headers,
          authorization: `Bearer ${token}`,
        }
      };
    });

    const testClient = new ApolloClient({
      link: authLink.concat(httpLink),
      cache: new InMemoryCache(),
    });

    // Test 1: Basic connectivity with __typename
    console.log('🧪 Test 1: Basic __typename query');
    testClient
      .query({
        query: gql`
          query TestBasic {
            __typename
          }
        `,
        fetchPolicy: 'no-cache',
      })
      .then((result) => {
        console.log('✅ Test 1 SUCCESS:', result);
        setTestResult(`SUCCESS: ${JSON.stringify(result.data)}`);

        // Test 2: Site Image Assets query
        console.log('🧪 Test 2: SiteImageAssets query');
        return testClient.query({
          query: gql`
            query SiteImageAssets($limit: Int = 100) {
              siteImageAssetCollection(limit: $limit) {
                items {
                  key
                  imageLightMode {
                    url
                    title
                  }
                  imageDarkMode {
                    url
                    title
                  }
                }
              }
            }
          `,
          variables: { limit: 100 },
          fetchPolicy: 'no-cache',
        });
      })
      .then((result) => {
        console.log('✅ Test 2 SUCCESS:', result);
        const items = result.data.siteImageAssetCollection?.items || [];
        const joinImage = items.find((item: any) => item.key === 'join_hero_background');
        setSiteImageResult(`SUCCESS: Found ${items.length} assets. Join image: ${joinImage ? 'FOUND' : 'NOT FOUND'}`);
        
        if (joinImage) {
          console.log('🎯 Found join_hero_background:', joinImage);
        } else {
          console.log('🔍 Available keys:', items.map((item: any) => item.key));
        }
      })
      .catch((error) => {
        console.error('❌ GraphQL Test ERROR:', error);
        console.error('❌ Full error object:', {
          message: error.message,
          graphQLErrors: error.graphQLErrors,
          networkError: error.networkError,
          extraInfo: error.extraInfo
        });
        
        if (testResult === 'Testing...') {
          setTestResult(`ERROR in Test 1: ${error.message}`);
        } else {
          setSiteImageResult(`ERROR in Test 2: ${error.message || error.toString()}`);
        }
      });
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'monospace' }}>
      <h1>GraphQL Connectivity Test</h1>
      
      <div style={{ marginBottom: '20px' }}>
        <h3>Environment Check</h3>
        <div style={{ 
          padding: '10px', 
          backgroundColor: envCheck.includes('✅') ? '#d4edda' : envCheck.includes('MISSING') ? '#f8d7da' : '#fff3cd',
          border: '1px solid #ccc',
          borderRadius: '4px'
        }}>
          {envCheck}
        </div>
      </div>
      
      <div style={{ marginBottom: '20px' }}>
        <h3>Test 1: Basic Connectivity (__typename)</h3>
        <div style={{ 
          padding: '10px', 
          backgroundColor: testResult.includes('SUCCESS') ? '#d4edda' : testResult.includes('ERROR') ? '#f8d7da' : '#fff3cd',
          border: '1px solid #ccc',
          borderRadius: '4px'
        }}>
          {testResult}
        </div>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h3>Test 2: Site Image Assets Query</h3>
        <div style={{ 
          padding: '10px', 
          backgroundColor: siteImageResult.includes('SUCCESS') ? '#d4edda' : siteImageResult.includes('ERROR') ? '#f8d7da' : '#fff3cd',
          border: '1px solid #ccc',
          borderRadius: '4px'
        }}>
          {siteImageResult}
        </div>
      </div>

      <div style={{ marginTop: '30px', fontSize: '12px', color: '#666' }}>
        <p>Check the browser console for detailed logs.</p>
        <p>Environment: {process.env.NODE_ENV}</p>
        <p>NEXT_PUBLIC_CMS_GRAPHQL_ENDPOINT: {process.env.NEXT_PUBLIC_CMS_GRAPHQL_ENDPOINT ? 'Set' : 'Not Set'}</p>
        <p>NEXT_PUBLIC_CMS_ACCESS_TOKEN: {process.env.NEXT_PUBLIC_CMS_ACCESS_TOKEN ? 'Set' : 'Not Set'}</p>
        <p>CMS_GRAPHQL_ENDPOINT: {process.env.CMS_GRAPHQL_ENDPOINT ? 'Set' : 'Not Set'}</p>
        <p>CMS_ACCESS_TOKEN: {process.env.CMS_ACCESS_TOKEN ? 'Set' : 'Not Set'}</p>
      </div>
    </div>
  );
};

export default TestGraphQL;
