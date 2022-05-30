// Make a Database Name : user ( Id, Name , Email id , Role ( admin / user) , Status, create at, updated at date wise)
// signup, login, roll wise profile view , User listing, Active and incative status , 

// Create a Database and insert user data in MOngodb

const { getMaxListeners } = require('process');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/user";


MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("user");
  var myobj = [
    { name: 'John', address: 'Highway 71', Email: 'a@gmail.com', role: 'admin', status: 'active'},
    { name: 'Peter', address: 'Lowstreet 4', Email: 'b@gmail.com', role: 'author', status: 'inactive'},
    { name: 'Amy', address: 'Apple st 652', Email: 'c@gmail.com', role: 'admin', status: 'active'},
    { name: 'Hannah', address: 'Mountain 21', Email: 'd@gmail.com', role: 'User', status: 'active'},
    { name: 'Michael', address: 'Valley 345', Email: 'e@gmail.com', role: 'admin', status: 'active'},
    { name: 'Sandy', address: 'Ocean blvd 2', Email: 'f@gmail.com', role: 'admin', status: 'active'},
    { name: 'Betty', address: 'Green Grass 1', Email: 'g@gmail.com', role: 'User', status: 'active'},
    { name: 'Richard', address: 'Sky st 331', Email: 'h@gmail.com', role: 'admin', status: 'inactive'},
    { name: 'Susan', address: 'One way 98', Email: 'i@gmail.com', role: 'admin', status: 'active'},
    { name: 'Vicky', address: 'Yellow Garden 2', Email: 'j@gmail.com', role: 'User', status: 'active'},
    { name: 'Ben', address: 'Park Lane 38', Email: 'k@gmail.com', role: 'admin', status: 'active'},
    { name: 'William', address: 'Central st 954', Email: 'l@gmail.com', role: 'admin', status: 'inactive'},
    { name: 'Chuck', address: 'Main Road 989', Email: 'm@gmail.com', role: 'author', status: 'active'},
    { name: 'Viola', address: 'Sideway 1633', Email: 'n@gmail.com', role: 'admin', status: 'active'}
  ];
  dbo.collection("customers").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    db.close();
  });
}); 