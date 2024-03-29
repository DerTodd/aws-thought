const express = require('express');
const router = express.Router();
const AWS = require("aws-sdk");
const awsConfig = {
  region: "us-east-2",
  //endpoint: "http://localhost:8000",

};
AWS.config.update(awsConfig);
const dynamodb = new AWS.DynamoDB.DocumentClient();
const table = "Thoughts";
// Create a new thought
router.post('/', (req, res) => {
    const params = {
      TableName: table,
      Item: {
        "username": req.body.username,
        "createdAt": Date.now(),
        "thought": req.body.thought
      }
    };
    dynamodb.put(params, (err, data) => {
        if (err) {
          console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
          res.status(500).json(err); // an error occurred
        } else {
          console.log("Added item:", JSON.stringify(data, null, 2));
          res.json({"Added": JSON.stringify(data, null, 2)});
        }
      });
    });  // ends the route for router.post('/api/thoughts')


  module.exports = router;