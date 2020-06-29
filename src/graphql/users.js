import gql from 'graphql-tag';

export const LIST_ALL_USERS = gql`
  query listUsers {
    users {
      name
      avatar
      email
      joined
      bio
      location
    }
  }
`;

export const LIST_USERS_BY_NAME = gql`
  query listUsersbyName($name: String) {
    users(name: $name) {
      name
      avatar
      email
      joined
      bio
      location
    }
  }
`;
