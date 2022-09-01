const {gql} = require('apollo-server-expres');

const typeDefs = gql `
type User {
    _id: ID!
    email: String!
}

type Mutation {
    addUser(email: String!, password: String!): User
}
`

module.exports = typeDefs