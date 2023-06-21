const sequelize = require("../db/connection");
const { DataTypes } = require('sequelize')

const Film = sequelize.define("Film", {
    film_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    rating: {
    
        type: DataTypes.INTEGER,
    },
});

const Actor = sequelize.define("Actor", {
    Actor_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    actor: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    rating: {

    type: DataTypes.INTEGER,
    },
});



module.exports = { Film, Actor }  ;