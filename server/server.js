const express = require('express');
const path = require('path');
const { typeDefs, resolvers } = require('./schemas');
const { ApolloServer } = require('apollo-server-express');
const db = require('./config/connection');
const PORT = process.env.PORT || 3333;
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const app = express();
const { authMiddleware } = require('./auth');

app.use(express.static(path.join(__dirname, 'client/build')));

async function startServer(typeDefs, resolvers) {
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        context: (authMiddleware)
    });

    await server.start();

    server.applyMiddleware({ app });

    db.once('open', () => {
        app.listen(PORT, () => {
            console.log('Express started on port %s', PORT);
            console.log('Graphql is ready on %s', server.graphqlPath);
        })
    });
}


startServer(typeDefs, resolvers);