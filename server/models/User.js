import mongoose from 'mongoose';
import validator from 'validator';
import jwt from 'jsonwebtoken';
import _ from 'lodash';
import bcrypt from 'bcryptjs';

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
    generateAuthToken: function () {
        let user = this;
        let access = 'auth';
        let token = jwt.sign({ _id: user._id.toHexString(), access}, 'secretsalt').toString();

        user.tokens.push({
            access,
            token
        })

        return user.save().then(() => {
            return token;
        });
    },
    toJSON: function () {
        let user = this;
        let userObject = user.toObject();
        return _.pick(userObject, ['_id', 'email']);
    }
}

UserSchema.statics = {
    findByToken: function (token) {
        let User = this;
        let decoded;

        try {
            decoded = jwt.verify(token, 'secretsalt');
        } catch (err) {
            // return new Promise((resolve, reject) => {
            //     reject();
            // });
            return Promise.reject();
        }

        return User.findOne({
            _id: decoded._id,
            'tokens.token': token,
            'tokens.access': 'auth'
        })
    }
}

UserSchema.pre('save', function (next) {
    let user = this;

    if (user.isModified('password')) {
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(user.password, salt, (err, hash) => {
                user.password = hash;
                next();
            });
        });
    } else {
        next();
    }
});

const User = mongoose.model('User', UserSchema);

export default User;