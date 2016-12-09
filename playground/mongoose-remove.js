import { ObjectId } from 'mongodb';

import mongoose from '../server/db/mongoose';
import Todo from '../server/models/Todo';
import User from '../server/models/User';

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

// Todo.findOneAndRemove({ _id: '584b18df78896fa1d65f419a' }).then((todo) => {
//     console.log(todo);
// });

Todo.findByIdAndRemove('584b18df78896fa1d65f419a').then((todo) => {
    console.log(todo);
});
