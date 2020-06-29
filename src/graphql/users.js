import { gql } from 'graphql-tag';

export const LIST_ALL_USERS = gql`
  query listUsers {
    users {
      name
      avatar
    }
  }
`;

export const LIST_USERS_BY_NAME = gql`
  query listUsersbyName($searchQuery: String) {
    users(filter: { name: { eq: searchQuery }} {
      name
      avatar
    })
  }
`;
