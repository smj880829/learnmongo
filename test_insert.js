var mongo = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/fistMongo'

mongo.connect(url,function(err,db){

  if (err) throw err
    var ftable = db.collection('Ftable')
    ftable.insert({
    name: 'smj' , age : 233
  },function(err, docs) {
      if (err) throw err
      console.log(docs)
      db.close()
    })


})
