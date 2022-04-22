const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {

    const Parking = sequelize.define("parking", {
    
    id: {
        type:DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    
    type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false
    }
    
    });
    
    
    return Parking;
    
};