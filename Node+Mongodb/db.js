const mongosh=require('mongoose')
mongosh.connect('mongodb://localhost:27017/hotel',{
    useNewUrlParser: true,
    useUnifiedTopology: true

})
const db=mongosh.connection
db.on('connected',()=>{
    console.log('Connected to MongoDB')
})
db.on('error',()=>{
    console.log('Error connecting to MongoDB')
})

module.exports =db;