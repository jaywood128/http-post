const express = require('express');
const app = express();
const low = require('lowdb');
const fs = require('lowdb/adapters/FileSync');
const adapter = new fs('db.json');
const db = low(adapter);


const {faker} = require('@faker-js/faker');

db.defaults({ users: []}).write();


// Remove body parser and try to POST /users and see the error
// TypeError: Cannot read properties of undefined (reading 'name')


// Try to POST /users and check Network tab 
// Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client
// app.use(cors());


// data parser - used to parse post data
// POST request is usually seny via an HTML form
// The enctype attribute tells the browser how to encode the data
// application/x-www-form-urlencoded: the keys and values are encoded in key-value 
// tuples separated by '&', with a '=' between the key and the value. Non-alphanumeric 
// characters in both keys and values are percent encoded: this is the reason why this type is not suitable to use with binary data (use multipart/form-data instead

// https://stackoverflow.com/questions/38306569/what-does-body-parser-do-with-express



// User the following code to serve images, CSS files, and JavaScript files in a directory named public:

app.use(express.static('public'))

//return all users 
// 2) Add html to display User card using Bootstrap card
app.get("/users", function(req, res){
  res.send(db.get('users').value())
})

// Add a user
// 1) add JavaScript code in addUser.html for browswer client code to POST newly created user using faker
// 2) add server side code to persist user in db and send back all users
app.post("/users", function(req, res){
  console.log(req.body)
  // Add javascript code for add() in addUser.html 
  // Add faker.min.js 

  // Create user with following attributes
  // name, dob, email, username, password, phone, streetaddress, citystatezip, latitude, longitude, faker.internet.avatar()  
  // create user obj
  // save user to database
  // send back users in response
  
  
})

app.listen(3000, function(){
  console.log("Node app running on port 3000")
  
})