const {Schema, model, SchemaTypes} = require('mongoose')
const bcrypt = require('bcrypt');
const { schema } = require('../../../../notes/react/react_playground_uofm/server/models/Todo');

const userSchema = new schema({
    email: {
        type: String,
        required: [true, 'you must input your email address'],
        unique: true, 
        match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i
    },
    password: {
        type: String,
        required: true
    }
});

userSchema.pre('save', async function () {
    const hashed_pass = await bcrypt.hash(this.password, 10);
    this.password = hashed_pass;
});

userSchema.methods.validatePass = async function (unencryted_password) {
    const valid_pass = await bcrypt.compare(unencryted_password, this.password);
    return valid_pass;
}

const User = model('user', userSchema);

module.exports = User;