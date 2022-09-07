const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID!
    email: String!
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
    loginUser(email: String!, password: String!): User
}
`;

module.exports = typeDefs