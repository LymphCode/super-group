const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID!
    email: String!
}
type Auth {
    user: User
    token: ID
  }

type Auth {
    token: ID!
    user: User
}

type Query {
    getUser: [User]
  }

type Mutation {
    addUser(email: String!, password: String!): Auth
<<<<<<< HEAD
    loginUser(email: String!, password: String!): Auth
=======
    loginUser(email: String!, password: String!): User
>>>>>>> 3b5b96f249bd7a5d54a5fdeb87ba45c2e56ae199
}
`;

module.exports = typeDefs