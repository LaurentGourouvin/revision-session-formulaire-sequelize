require('dotenv').config({ debug: true});

const {Sequelize} = require('sequelize');

const sequelize = new Sequelize(process.env.DB_URL); //ajoutez un .env dans le dossier "sessions-sequelize"

module.exports = sequelize;