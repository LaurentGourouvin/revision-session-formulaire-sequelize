const { Sequelize, DataTypes, Model} = require('sequelize');
const sequelize = require('../database/sequelize');

class User extends Model {

    static async getAllUser(){
        try {
            return await this.findAll({
                raw: true //permet d'afficher les informations d'une manière plus claire dans la console
            });
        } catch(error) {
            console.log(error);
        }
    }

    static async getAllUserWithRole(){
        try {
            return await this.findAll({include: 'role', raw: true});
        } catch(error){
            console.log(error);
        }
    }
};

User.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    role_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
},{
    sequelize: sequelize,
    timestamps: false,
    tableName: 'user'
}
);

module.exports = User;