const { User } = require('./')
const { signToken } = require('../auth');
const { ApolloError } = require('apollo-server-express');

const resolvers = {
    Mutation: {
        async addUser(_, { email, password }, context) {
            try {
                const user = await User.create({ email, password });

                const token = await signToken(user);
                return {user, token};
            } catch (err) {
                throw new ApolloError(err);
            }
        },

        async addUser(_, {email, password }, context) {
            try {
                const user = await User.create({email, password});

                const token = signToken(user);
                return { user, token };
            } catch (err){
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