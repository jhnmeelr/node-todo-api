import mongoose from 'mongoose';

mongoose.Promise = global.Promise;
// laptop ip
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/TodoApp');
// router ip
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp');

export default mongoose;