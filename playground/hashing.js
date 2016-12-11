import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const password = '123456';

// bcrypt.genSalt(10, (err, salt) => {
//     bcrypt.hash(password, salt, (err, hash) => {
//         console.log(hash);
//     });
// });

const hashedPassword = '$2a$10$VhAgs1xi.xmAAQBw7th2q.di1d3X1SdOdUG2d3Fi8CHJFDYMLkbXe';

bcrypt.compare(password, hashedPassword, (err, res) => {
    console.log(res);
});



// let data = {
//     id: 10
// };

// let token = jwt.sign(data, 'secretsalt');
// console.log(token);

// let decoded = jwt.verify(token, 'secretsalt');
// console.log(decoded);



// import { SHA256 } from 'crypto-js';

// const message = 'I am user number 3';
// const hash = SHA256(message).toString();

// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);

// let data = {
//     id: 4
// };
// let token = {
//     data,
//     hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// };

// // token.data.id = 5;
// // token.hash = SHA256(JSON.stringify(data)).toString();

// let resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();

// if (resultHash === token.hash) {
//     console.log('Data was not change');
// } else {
//     console.log('Data was changed. Do not trust!');
// }