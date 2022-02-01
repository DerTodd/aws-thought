//import aws-sdk
const AWS = require('aws-sdk');
//configure DynamoDB to connect locally
AWS.config.update({
    region: "us-east-2",
    endpoint: "http://localhost:8000"
  });
//Create  DynamoDB Service Object
const dynamodb = new AWS.DynamoDB({apiVersion: '2012-08-10'});
//Create the params Object
const params = {
    TableName : "Thoughts",
    KeySchema: [       
      { AttributeName: "username", KeyType: "HASH"},  // Partition key
      { AttributeName: "createdAt", KeyType: "RANGE" }  // Sort key
    ],
    AttributeDefinitions: [       
      { AttributeName: "username", AttributeType: "S" }, //S is String
      { AttributeName: "createdAt", AttributeType: "N" } //N is integer
    ],
    ProvisionedThroughput: {      //factors the read and write capcity - faster is paid  
      ReadCapacityUnits: 10, 
      WriteCapacityUnits: 10
    }
  };
  //Code to make the call and create the DB
  dynamodb.createTable(params, (err, data) => {
    if (err) {
        console.error("Unable to create table. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("Created table. Table description JSON:", JSON.stringify(data, null, 2));
    }
});
