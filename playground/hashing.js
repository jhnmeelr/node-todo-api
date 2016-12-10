import jwt from 'jsonwebtoken';

let data = {
    id: 10
};

let token = jwt.sign(data, 'secretsalt');
console.log(token);

let decoded = jwt.verify(token, 'secretsalt');
console.log(decoded);




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