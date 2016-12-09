import { MongoClient, ObjectID } from 'mongodb';

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server.');
    }
    console.log('Conncected to MongoDB server');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('584aa59c78896fa1d65f4195')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('584a9d6891f5780d70cfd5b2')
    }, {
        $set: {
            name: 'Ivan'
        },
        $inc: {
            age: 1
        }
    }).then((result) => {
        console.log(result);
    });

    // db.close();
});