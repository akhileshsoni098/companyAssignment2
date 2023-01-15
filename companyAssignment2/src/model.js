const mongoose = require('mongoose')

const coinSchema = new mongoose.Schema({

     "symbol":{
          type:String,
          unique:true
     },
      // String and Unique

    "name":{
     type: String,
      unique:true
     },

    // String and Unique

    "marketCapUsd":{
     type: String
},

    // String  ( not Number)

     "priceUsd": String

     //String
   

})

module.exports = mongoose.model('coin', coinSchema)