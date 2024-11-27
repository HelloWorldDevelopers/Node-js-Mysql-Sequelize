const { DataTypes } = require('sequelize');
const sequelize = require('../db/sequelize');

const Address = sequelize.define('Address', {
    address_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    city: {
        type: DataTypes.STRING
    },
    dist: {
        type: DataTypes.STRING
    },
}, {
    tableName: 'address',
    timestamps: false
});

module.exports = Address;
