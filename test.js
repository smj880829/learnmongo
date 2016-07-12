var mongo = require('mongodb').MongoClient
, exercise = require('workshopper-exercise')()
, filecheck = require('workshopper-exercise/filecheck')
, execute = require('workshopper-exercise/execute')
, comparestdout = require('workshopper-exercise/comparestdout')

var url = 'mongodb://localhost:27017'

var age = parseInt(process.argv[2])

mongo.connect(url,function(err,db){

  if (err) throw err
    var parrots = db.collection('parrots')
    parrots.find({
    "age": {
      $gt: +age
    }
  }
  ).toArray(function(err, docs) {
      if (err) throw err
      console.log(docs)
      db.close()
    })

})
