//Create the interface with the DB
const AWS = require("aws-sdk");
//Load the file systems package to read the json file
const fs = require('fs');

AWS.config.update({
    region: "us-east-2",
    //endpoint: "http://localhost:8000" removed to load to Cloud
  });
  const dynamodb = new AWS.DynamoDB.DocumentClient({apiVersion: '2012-08-10'});

//Use the fs package to read the json and assign the oblect to allUsers
console.log("Importing thoughts into DynamoDB. Please wait.");
//Path is relative to where this will be run (root level) and not to this file.
const allUsers = JSON.parse(fs.readFileSync('./server/seed/user.json', 'utf8'));
//Loop through and create the array
allUsers.forEach(user => {
    const params = {
      TableName: "Thoughts",
      Item: {
        "username": user.username,
        "createdAt": user.createdAt,
        "thought": user.thought
      }
    };
    dynamodb.put(params, (err, data) => {
        if (err) {
          console.error("Unable to add thought", user.username, ". Error JSON:", JSON.stringify(err, null, 2));
        } else {
          console.log("PutItem succeeded:", user.username);
        }
    });
});
