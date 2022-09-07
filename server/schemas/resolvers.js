const User = require('../models/User')
const { signToken } = require('../auth');
const { ApolloError } = require('apollo-server-express');

const resolvers = {
    Query: {
        async getUser(_, args, context) {
          if (!context.user) throw new ApolloError('not authorized', 402);
    
          return await User.find();
        }
      },
    
    Mutation: {
        async addUser(_, { email, password }, context) {
            console.log('triggered')
            try {
                const user = await User.create({ email, password });
                const token = signToken(user);
                return {user, token};
            } catch (err) {
                throw new ApolloError(err);
            }
        },

        async loginUser(_, { email, password }, context) {
            const user = await User.findOne({ email });

            if (!user) throw new ApolloError('no user found with that email')

            if (!user.validatePass(password)) throw new ApolloError('your password is incorrect');

            try {
                const token = signToken(user);

                return { user, token };
            } catch (err) {
                throw new ApolloError(err);
            }
        },

    }
};

module.exports = resolvers;