const Koa = require('koa');
const app = new Koa();



app.use(async ctx => {

    var MongoClient = require('mongodb').MongoClient
    , assert = require('assert');

    // Connection URL
    var url = 'mongodb://localhost:27017/mydb';

    let res = ''

    var findDocuments = function(db, callback) {
        // Get the documents collection
        var collection = db.collection('mycol');
        // Find some documents
        collection.find({}).toArray(function(err, docs) {
          assert.equal(err, null);
          console.log("Found the following records");
          console.log(docs)
          this.res = JSON.stringify(docs)
          callback();
        });
      }

    // Use connect method to connect to the server
    MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    console.log("Connected successfully to server");

    findDocuments(db, function() {
        db.close();
      });
    });
    ctx.body = res;
  
});

app.listen(3000);