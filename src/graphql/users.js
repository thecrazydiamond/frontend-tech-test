import ApolloClient, { gql } from 'apollo-boost';

const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql',
});

client
  .query({
    query: gql`
      {
        users {
          name
        }
      }
    `,
  })
  .then((result) => console.log(result));
