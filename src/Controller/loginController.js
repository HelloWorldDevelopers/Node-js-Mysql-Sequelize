const User = require("../Model/User");
const Address=require("../Model/Address");
const redisClient = require("../redis/client");
module.exports.signIn = async (req, res) => {
      
    const  user  = await Address.findAll({
      include:User
    });
   

  res.status(200).json({ data: user });
};



module.exports.saveUser = async (req, res) => {
      console.log("Saving user",req.body);
   try {
    const { username, password,address_id } = req.body;

         const user = await User.create({
            username,
            password,
            address_id
         });
      res.status(201).json({ data: user });
  } catch (error) {
    console.log(error)
  }

 };
