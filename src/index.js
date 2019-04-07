/*require('dotenv').config();
// import "dotenv/config"; 

console.log('Hello Node.js Project');

console.log(process.env.MY_SECRET);
*/

//////////////////////////////////////////////////////////

require('dotenv').config(); //allow to use .env files for secret values
var cors = require('cors');
var express = require('express');
const uuidv4 = require('uuid/v4');
var bodyParser = require('body-parser')
var app = express();


let users = {
  1: {
    id: '1',
    username: 'Robin Wieruch',
  },
  2: {
    id: '2',
    username: 'Dave Davids',
  },
};

let messages = {
  1: {
    id: '1',
    text: 'Hello World',
    userId: '1',
  },
  2: {
    id: '2',
    text: 'By World',
    userId: '2',
  },
};


app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
  req.me = users[1];
  next();
});

app.get('/', (req,res)=>{
	res.send('\nGET')
});

// app.get('/user/:userID', (req,res) =>{
// 	res.send('Get user ID: ' + req.params.userID);
// });

app.get('/users', (req, res) => {
  res.send(Object.values(users));
});

app.get('/users/:userId', (req, res) => {
  res.send(users[req.params.userId]);
});

app.get('/messages', (req, res) => {
  return res.send(Object.values(messages));
});

app.get('/messages/:messageId', (req, res) => {
  return res.send(messages[req.params.messageId]);
});


app.post('/', (req,res)=>{
	res.send('\nPOST')
});

app.post('/messages', (req, res) => {
  const id = uuidv4();
  const message = {
    id,
    text: req.body.text,
    userId: req.me.id,
  };

  messages[id] = message;

  return res.send(message);
});

app.put('/', (req,res)=>{
	res.send('\nPUT')
});

app.delete('/', (req,res)=>{
	res.send('\nDELETE')
});

app.delete('/messages/:messageId', (req, res) => {
  const {
    [req.params.messageId]: message,
    ...otherMessages
  } = messages;

  messages = otherMessages;

  return res.send(message);
});

app.listen(process.env.SECRET_PORT, () =>
	console.log("Example listening on port " + process.env.SECRET_PORT),
);