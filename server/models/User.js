import mongoose from 'mongoose';
import validator from 'validator';
import jwt from 'jsonwebtoken';
import _ from 'lodash';

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true,
        unique: true,
        validate: {
            validator: validator.isEmail,
            message: '{VALUE} is not a valid email'
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    tokens: [{
        access: {
            type: String,
            required: true
        },
        token: {
            type: String,
            required:true
        }
    }]
});

UserSchema.methods = {
    generateAuthToken: function() {
        let access = 'auth';
        let token = jwt.sign({ _id: this._id.toHexString(), access}, 'secretsalt').toString();

        this.tokens.push({
            access,
            token
        })

        return this.save().then(() => {
            return token;
        });
    },
    toJSON: function() {
        let userObject = this.toObject();
        return _.pick(userObject, ['_id', 'email']);
    }
}

const User = mongoose.model('User', UserSchema);

export default User;