/*require('dotenv').config();
// import "dotenv/config"; 

console.log('Hello Node.js Project');

console.log(process.env.MY_SECRET);
*/

//////////////////////////////////////////////////////////


import routes from './routes';
import models from './models';

require('dotenv').config(); //allow to use .env files for secret values
// var cors = require('cors');
var express = require('express');
// const uuidv4 = require('uuid/v4');
var bodyParser = require('body-parser'); //so npm packages can be imported this way
//import bodyParser from 'body-parser';	  //or this way below !!!
var app = express();
var path = require('path');


// let users = {
//   1: {
//     id: '1',
//     username: 'Robin Wieruch',
//   },
//   2: {
//     id: '2',
//     username: 'Dave Davids',
//   },
// };

// let messages = {
//   1: {
//     id: '1',
//     text: 'Hello World',
//     userId: '1',
//   },
//   2: {
//     id: '2',
//     text: 'By World',
//     userId: '2',
//   },
// };

//ALL the json above will now be modularized and put into the models directory
//in the index.js file

//app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  console.log("HERE");
  req.context = {
    models,
    me: models.users[1],
  };
  next();
});

app.use(express.static('public'));
app.use('/session', routes.session);
app.use('/users', routes.user);
app.use('/messages', routes.message);




app.get('/', (req,res)=>{
  //console.log(__dirname); //__dirname gives current running directory
	res.sendFile(path.join(__dirname + '/public/index.html'), (err) =>
    {
      if(err)
        res.status(403).send("Sorry! You can't see that.");

    });
});

// // app.get('/user/:userID', (req,res) =>{
// // 	res.send('Get user ID: ' + req.params.userID);
// // });
// /*
// app.get('/users', (req, res) => {
//   res.send(Object.values(users));
// });
// */
// app.get('/users', (req, res) => {
//   res.send(Object.values(req.context.models.users));
// });
// /*
// app.get('/users/:userId', (req, res) => {
//   res.send(users[req.params.userId]);
// });
// */
// app.get('/users/:userId', (req, res) => {
//   res.send(req.context.models.users[req.params.userId]);
// });
// /*
// app.get('/messages', (req, res) => {
//   return res.send(Object.values(messages));
// });
// */
// app.get('/messages', (req, res) => {
//   return res.send(Object.values(req.context.models.messages));
// });
// /*
// app.get('/messages/:messageId', (req, res) => {
//   return res.send(messages[req.params.messageId]);
// });
// */
// app.get('/messages/:messageId', (req, res) => {
//   return res.send(req.context.models.messages[req.params.messageId]);
// });

// app.post('/', (req,res)=>{
// 	res.send('\nPOST')
// });
// /*
// app.post('/messages', (req, res) => {
//   const id = uuidv4();
//   const message = {
//     id,
//     text: req.body.text,
//     userId: req.me.id,
//   };

//   messages[id] = message;

//   return res.send(message);
// });
// */
// app.post('/messages', (req, res) => {
//   const id = uuidv4();
//   const message = {
//     id,
//     text: req.body.text,
//     userId: req.context.me.id,
//   };

//   req.context.models.messages[id] = message;

//   return res.send(message);
// });

// app.put('/', (req,res)=>{
// 	res.send('\nPUT')
// });

// app.delete('/', (req,res)=>{
// 	res.send('\nDELETE')
// });
// /*
// app.delete('/messages/:messageId', (req, res) => {
//   const {
//     [req.params.messageId]: message,
//     ...otherMessages
//   } = messages;

//   messages = otherMessages;

//   return res.send(message);
// });
// */

// app.delete('/messages/:messageId', (req, res) => {
//   const {
//     [req.params.messageId]: message,
//     ...otherMessages
//   } = req.context.models.messages;

//   req.context.models.messages = otherMessages;

//   return res.send(message);
// });



app.listen(process.env.SECRET_PORT, () =>
	console.log("Example listening on port " + process.env.SECRET_PORT),
);