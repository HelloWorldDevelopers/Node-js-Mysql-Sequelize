const express=require("express")
const apiLoginConstants = require("../Constants/login_api_constant");
const loginController=require('../Controller/loginController')
const loginRoute=express.Router();
loginRoute.route(apiLoginConstants.LoginConstants.LOGIN).get(loginController.signIn);
loginRoute.route(apiLoginConstants.LoginConstants.SAVE_USER).post(loginController.saveUser);

module.exports=loginRoute;