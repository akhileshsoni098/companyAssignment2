
const coinModel = require('./model')
const axios = require('axios')

const getCoin = async function(req, res) {

try{
       
   const data = await axios.get("https://api.coincap.io/v2/assets")
   let coinData = data.data
   let checkCoin = await coinModel.find()
   if(checkCoin.length ==0){
    
    for(let i =0; i<coinData.data.length; i++ ){
        const obj = {}
        obj.symbol = coinData.data[i].symbol
        obj.name = coinData.data[i].name
        obj.marketCapUsd = coinData.data[i].marketCapUsd
        obj.priceUsd = coinData.data[i].priceUsd
    
    let createCoin = await coinModel.create(obj)
   }
   return res.status(201).send({status:true , data: "coincap has created"})
} 
else{

   let getCoinData = await coinModel.find().lean().select({_id:0 , _v:0})
for(let i=0; i<getCoinData.length; i++){
getCoinData[i].changePercent24Hr = coinData.data[i].changePercent24Hr

}
for(let i=0; i<getCoinData.length; i++){
    getCoinData.sort(function(a,b){return (b.changePercent24Hr) - (a.changePercent24Hr)})
} 
res.status(200).send({status:true , data:getCoinData})
}
} catch(err){
    res.send({status:false , data:err.message})
}
}

module.exports.getCoin = getCoin