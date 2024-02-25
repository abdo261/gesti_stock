const {connect} = require('mongoose')
const {MONGO_URL}= require('dotenv').config().parsed

const connectToMongoDb = async()=>{
await connect('mongodb://127.0.0.1:27017/getion_stock_DB')
.then(()=>console.log('connection good withe mongodb ^_^'))
.catch(err=>console.log(err))
}
connectToMongoDb()