import { gql } from 'graphql-tag';

export const LIST_ALL_USERS = gql`
  query listUsers {
    users {
      name
      avatar
    }
  }
`;
