const { gql } = require("apollo-server-express");

const typeDefs = gql`
  scalar DateTime

  type Query {
    users(name: String): [User!]!
  }

  type User {
    id: ID!
    name: String!
    avatar: String!
    email: String!
    joined: DateTime!
    bio: String!
    location: String!
  }
`;

module.exports = {
  typeDefs
};
