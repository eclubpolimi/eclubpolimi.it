import { useState, useEffect } from 'react';
import { ApolloClient, InMemoryCache, createHttpLink, gql } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const ContentfulDebug = () => {
  const [results, setResults] = useState<string[]>([]);

  const addResult = (message: string) => {
    setResults(prev => [...prev, `${new Date().toLocaleTimeString()}: ${message}`]);
  };

  useEffect(() => {
    console.log('🔍 Starting Contentful content type discovery...');

    const endpoint = process.env.NEXT_PUBLIC_CMS_GRAPHQL_ENDPOINT || process.env.CMS_GRAPHQL_ENDPOINT;
    const token = process.env.NEXT_PUBLIC_CMS_ACCESS_TOKEN || process.env.CMS_ACCESS_TOKEN;
    
    if (!endpoint || !token) {
      addResult('❌ Missing credentials');
      return;
    }

    addResult('✅ Found credentials, creating client...');

    const httpLink = createHttpLink({ uri: endpoint });
    const authLink = setContext((_, { headers }) => ({
      headers: { ...headers, authorization: `Bearer ${token}` }
    }));

    const client = new ApolloClient({
      link: authLink.concat(httpLink),
      cache: new InMemoryCache(),
    });

    // Test 1: Basic connectivity
    addResult('🧪 Testing basic connectivity...');
    client
      .query({
        query: gql`query { __typename }`,
        fetchPolicy: 'no-cache',
      })
      .then(() => {
        addResult('✅ Basic connectivity works!');
        
        // Test 2: Try to find what collections exist
        addResult('🔍 Looking for available collections...');
        return client.query({
          query: gql`
            query IntrospectSchema {
              __schema {
                queryType {
                  fields {
                    name
                    type {
                      name
                    }
                  }
                }
              }
            }
          `,
          fetchPolicy: 'no-cache',
        });
      })
      .then((result) => {
        const fields = result.data.__schema.queryType.fields;
        const collections = fields
          .filter((field: any) => field.name.includes('Collection'))
          .map((field: any) => field.name);
        
        addResult(`📋 Found ${collections.length} collections: ${collections.join(', ')}`);
        
        // Test 3: Try the working team member query structure
        addResult('🧪 Testing team member structure (we know this works)...');
        return client.query({
          query: gql`
            query TestMembers {
              driverCollection(limit: 1) {
                items {
                  name
                  image {
                    url
                  }
                }
              }
            }
          `,
          fetchPolicy: 'no-cache',
        });
      })
      .then((result) => {
        addResult(`✅ Team members work! Found: ${result.data.driverCollection.items.length} drivers`);
        
        // Test 4: Try different variations of image asset queries
        addResult('🧪 Testing siteImageAssetCollection...');
        return client.query({
          query: gql`
            query TestSiteAssets {
              siteImageAssetCollection(limit: 5) {
                items {
                  key
                  imageLightMode {
                    url
                  }
                }
              }
            }
          `,
          fetchPolicy: 'no-cache',
        });
      })
      .then((result) => {
        const items = result.data.siteImageAssetCollection?.items || [];
        addResult(`✅ siteImageAssetCollection works! Found ${items.length} items`);
        if (items.length > 0) {
          addResult(`🎯 Sample keys: ${items.map((item: any) => item.key).slice(0, 3).join(', ')}`);
        }
      })
      .catch((error) => {
        addResult(`❌ Error: ${error.message}`);
        console.error('Full error:', error);
      });
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'monospace' }}>
      <h1>Contentful Content Type Discovery</h1>
      
      <div style={{ 
        backgroundColor: '#f8f9fa', 
        border: '1px solid #dee2e6', 
        borderRadius: '4px', 
        padding: '15px',
        maxHeight: '600px',
        overflowY: 'auto'
      }}>
        {results.map((result, index) => (
          <div key={index} style={{ 
            marginBottom: '5px',
            color: result.includes('❌') ? '#dc3545' : result.includes('✅') ? '#28a745' : '#495057'
          }}>
            {result}
          </div>
        ))}
        
        {results.length === 0 && (
          <div style={{ color: '#6c757d' }}>Starting tests...</div>
        )}
      </div>
    </div>
  );
};

export default ContentfulDebug;
