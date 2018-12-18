var MongoClient = require('mongodb').MongoClient
//   , assert = require('assert');

// Connection URL
var url = 'mongodb://10.0.1.129:27017/mydb';

let db ;

// Use connect method to connect to the server
module.exports =() => {
    return MongoClient.connect(url, function(err, client) {
        // assert.equal(null, err);
        db = client
        console.log("Connected successfully to server");
      
      //   db.close();
      });
} 

module.exports.Article = {
    all() {
        return db.collection('anime_cartoon').find({}).toArray()
    },
    find(query) {
        return db.collection('anime_cartoon').find({title:query}).toArray()
    }
}