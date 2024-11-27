const { Sequelize } = require("sequelize")

const sequelize=new Sequelize("hello","root","Vishal0101Mysql",{
    host: "localhost",
    dialect: "mysql"
});
try {
    sequelize.authenticate();
} catch (error) {
    console.log(error);
}
module.exports = sequelize;