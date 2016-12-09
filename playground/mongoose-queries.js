import { ObjectId } from 'mongodb';

import mongoose from '../server/db/mongoose';
import Todo from '../server/models/Todo';
import User from '../server/models/User';

const todoId = '584ae2a77aa27e1840513e21';
const userId = '584ac7feb93b7c1414c20795';

if (!ObjectId.isValid(todoId)) {
    console.log('ID not valid.')
}

Todo.find({
    _id: todoId
}).then((todos) => {
    console.log('Todos', todos);
});

Todo.findOne({
    _id: todoId
}).then((todo) => {
    console.log('Todo', todo);
});

Todo.findById(todoId).then((todo) => {
    if (!todo) {
        return console.log('Id not found');
    }
    console.log('Todo By Id', todo);
}).catch((err) => console.log(err));

User.findById(userId).then((user) => {
    if (!user) {
        return console.log('Id not found');
    }
    console.log('User By Id', user);
}).catch((err) => console.log(err));