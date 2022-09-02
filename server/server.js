const express = require('express');
const path = require('path');
const { typedefs, resolvers } = require('./schemas');
const { ApolloServer } = require('apollo-server-express');
const db = require('./config/connection');
const PORT = process.env.PORT || 3333;
var fs = require('fs');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var multer = require('multer');
const app = express();

app.use(express.static(path.join(__dirname, 'client/build')));

async function startServer(typedefs, resolvers) {
    const server = new ApolloServer({
        typedefs,
        resolvers
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


startServer(typedefs, resolvers);