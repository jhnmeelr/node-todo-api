import express from 'express';
import bodyParser from 'body-parser';

import mongoose from './db/mongoose';

import Todo from './models/Todo';
import User from './models/User';

const app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    const todo = new Todo({
        text: req.body.text
    });
    todo.save().then((doc) => {
        res.send(doc);
    }, (err) => {
        res.status(400).send(err);
    });
});

app.listen(3000, () => {
    console.log('Started on port 3000');
});