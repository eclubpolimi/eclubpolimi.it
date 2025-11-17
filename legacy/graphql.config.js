// For the awesome GraphQL VSCode extension
// Get it here: https://marketplace.visualstudio.com/items?itemName=GraphQL.vscode-graphql

module.exports = {
  schema: ['./src/generated/cms/graphql.schema.json'],
  documents: ['**/*.{gql,graphql,js,ts,jsx,tsx}'],
};
