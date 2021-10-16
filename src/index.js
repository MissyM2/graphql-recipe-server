const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const models = require('../models');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: { models },
});

server
  .listen(process.env.port || 4000)
  .then(({ url }) => console.log('Server is running on localhost:4000'));
