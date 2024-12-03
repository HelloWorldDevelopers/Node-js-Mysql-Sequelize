const { DataTypes } = require('sequelize');
const Address = require('./Address');
const sequelize = require('../db/sequelize');

const User = sequelize.define('User', {
    user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: {
                args: [8, 100],
                msg: 'Password must be at least 8 characters long.'
            }
        }
    },
    address_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Address', // References the 'Address' model
            key: 'address_id' // The primary key in the Address table
        },
        allowNull: false
    }
}, {
    tableName: 'user',
    timestamps: false,
    underscored: true,
    
    
});
// use address frist because it is parent of the user table
Address.hasMany(User, { foreignKey: 'address_id' });
User.belongsTo(Address, { foreignKey: 'address_id' });
module.exports = User;
