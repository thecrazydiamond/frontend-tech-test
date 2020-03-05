const { GraphQLDateTime } = require("graphql-iso-date");

const { find } = require("../../users");

const resolvers = {
  DateTime: GraphQLDateTime,
  Query: {
    users: async (parent, { name }) => await find(name)
  }
};

module.exports = {
  resolvers
};
