const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const loginRoute = require('./Route/login-route');
const apiLoginConstants = require("./Constants/login_api_constant");
const user= require('./Model/User')
const Address= require('./Model/Address');
const User = require('./Model/User');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());


 app.use(apiLoginConstants.LoginConstants.BASE, loginRoute);
 

 
 
 User.sync();
Address.sync();
 

app.listen(8080,()=>{
    console.log('Server started on port 8080');
})