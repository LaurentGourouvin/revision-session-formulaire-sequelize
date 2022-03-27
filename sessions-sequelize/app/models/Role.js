const { Sequelize, DataTypes, Model} = require('sequelize');
const sequelize = require('../database/sequelize');

class Role extends Model {

    static async getAllRole(){
        try {
            return await this.findAll({
                raw: true //permet d'afficher les informations d'une manière plus claire dans la console
            });
        } catch(error){
            console.log(error);
        }
    }
};

Role.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    }},
    {
        tableName: 'role',
        sequelize: sequelize,
        timestamps: false   
    }
);

module.exports = Role;