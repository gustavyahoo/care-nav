// index.js
const uuidv4 = require('uuid/v4');
const serverless = require('serverless-http');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const AWS = require('aws-sdk');
const cors = require('cors');

const USERS_TABLE = process.env.USERS_TABLE;

const IS_OFFLINE = process.env.IS_OFFLINE;
let dynamoDb;
if (IS_OFFLINE === 'true') {
  dynamoDb = new AWS.DynamoDB.DocumentClient({
    region: 'localhost',
    endpoint: 'http://localhost:8000'
  });
  console.log(dynamoDb);
} else {
  dynamoDb = new AWS.DynamoDB.DocumentClient();
}

app.use(cors());
app.use(bodyParser.json({ strict: false }));

app.get('/', function(req, res) {
  res.send('Hello World!');
});

// Get User endpoint
app.get('/users/:userId', function(req, res) {
  const params = {
    TableName: USERS_TABLE,
    Key: {
      userId: req.params.userId
    }
  };

  dynamoDb.get(params, (error, result) => {
    if (error) {
      console.log(error);
      res.status(400).json({ error: 'Could not get user' });
    }
    if (result.Item) {
      const { userId, name } = result.Item;
      res.json({ userId, name });
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  });
});

// Get User endpoint
app.delete('/users/:userId', function(req, res) {
  const params = {
    TableName: USERS_TABLE,
    Key: {
      userId: req.params.userId
    }
  };

  dynamoDb.delete(params, (error, result) => {
    if (error) {
      console.log(error);
      res.status(400).json({ error: 'Could not get user' });
    }
    if (result) {
      res.json(result);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  });
});

// Create User endpoint
app.post('/users', function(req, res) {
  const { name } = req.body;
  if (typeof name !== 'string') {
    res.status(400).json({ error: '"name" must be a string' });
  }

  const params = {
    TableName: USERS_TABLE,
    Item: {
      userId: uuidv4(),
      name: name
    }
  };

  dynamoDb.put(params, (error, result) => {
    if (error) {
      console.log(error);
      res.status(400).json({ error: 'Could not create user' });
    }
    res.json(result);
  });
});

// get all users
app.get('/users', function(req, res) {
  const params = {
    TableName: USERS_TABLE,
    Limit: 25
  };

  dynamoDb.scan(params, (error, result) => {
    if (error) {
      console.log(error);
      res.status(400).json({ error: 'Could not get users' });
    }
    if (result) {
      res.json(result);
    } else {
      res.status(404).json({ error: 'Users not found' });
    }
  });
});

module.exports.handler = serverless(app);
