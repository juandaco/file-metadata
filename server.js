const express = require('express'),
  assert = require('assert'),
  // request = require('request'),
  mongoClient = require('mongodb').MongoClient;

const app = express();

const port = process.env.PORT || 8080;
const dbURL = process.env.MLAB_CREDENTIALS;


mongoClient.connect(dbURL, (err, db) => {

  assert.equal(null, err);
  console.log('Succesfully connected to the Database');


  app.listen(port, function() {
    const p = this.address().port;
    console.log(`Server is listening in port ${p}`);
  });
});