const { User } = require('./models')

const resolvers = {
    Mutation: {
        async addUser(_, { email, password }, context) {
            return await User.create({
                email,
                password,
            });
        },
    }
}