const { ApolloServer } = require("apollo-server-express");
const { typeDefs } = require("./typedefs");
const { resolvers } = require("./resolvers");

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers
});

module.exports = {
  apolloServer
};
