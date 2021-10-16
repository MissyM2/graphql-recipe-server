const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const models = require('../models');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
  context: { models },
});

const port = process.env.PORT || 4000;
server.listen(port).then(({ url }) =>
  console.log(`
    🚀  Server is running.
    🔉  It is listening on port ${port}.
    📭  Query at ${url}.`)
);
