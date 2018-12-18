 



    var MongoClient = require('mongodb').MongoClient
      , assert = require('assert');

    // Connection URL
    var url = 'mongodb://localhost:27017/mydb';

    var data = [
        {
            name: 'wany',
            sex: 'boy'
        }
    ]

    var findDocuments = function(db, callback) {
        // Get the documents collection
        var collection = db.collection('anime_cartoon');
        // Find some documents
        collection.find({title:'战神金刚：传奇的保护神第八季'}).toArray(function(err, docs) {
        assert.equal(err, null);
        console.log("Found the following records");
        // console.log(docs)
        callback(docs);
        });
    }

    // Use connect method to connect to the server
    // MongoClient.connect(url, function(err, db) {
    //   assert.equal(null, err);
    // 	console.log("Connected successfully to server");

	//     findDocuments(db, function(docs) {
    //         console.log(data)
    //         console.log(docs)
    //         data = docs;
    //         console.log(data)
	//         db.close();
	//     });
    // });

    const listData = function (query) {
        MongoClient.connect(url, function(err, db) {
            assert.equal(null, err);
              console.log("Connected successfully to server");
      
            findDocuments(db,function(docs) {
                //   console.log(data)
                  console.log(docs)
                  data = docs;
                //   console.log(data)
                  db.close();
              },query);
          });
          console.log('i run')
    }

    const getData = function () {
        return data
    }

    module.exports = {
        listData : listData,
        getData : getData,
        findDocuments:findDocuments
    }


