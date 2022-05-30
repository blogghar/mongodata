// var {MongoClient} = require('mongodb');
// var url = "mongodb://localhost:27017/";
// var client = new MongoClient(url);

// var database = "college";

// async function getData()
// {
// var result = await client.connect();
// let db = result.db(database);
// let collection = db.collection("students");
// let response = await collection.find({}).toArray();
// console.log(response);

// }

// getData()


var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/college")
.then(()=>console.log("connected"))
.catch((err)=>console.log(err));