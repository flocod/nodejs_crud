module.exports = (sequelize,Sequelize) => {

    const Parking = sequelize.define("parking", {
    
    id: {
        type:Sequelize.INTEGER,
        autoIncrement: 1,
        primaryKey: 1
    },
    
    name: {
        type: Sequelize.STRING,
        allowNull: 0
    },
    
    type: {
        type: Sequelize.STRING,
        allowNull: 0
    },
    city: {
        type: Sequelize.STRING,
        allowNull: 0
    }
    
    });
    
    return Parking;
};