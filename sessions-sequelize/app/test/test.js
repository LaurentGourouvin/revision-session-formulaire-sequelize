// Petit fichier pour tester les models
const sequelize = require('../database/sequelize');
const models = require('../models/association');

//récupération de tout mes Roles
async function afficherLesRoles(){
    const listRole = await models.Role.getAllRole();
    console.table(listRole);
}
afficherLesRoles();

//récupération de tout les Users
async function afficherLesUsers(){
    // const listeUser = await models.User.getAllUser();
    // console.table(listeUser);

    const listUserAvecRole = await models.User.getAllUserWithRole();
    console.table(listUserAvecRole);
    for(const userObject of listUserAvecRole){
        console.log("Name: " + userObject.name + " - Password: " + userObject.password);
    }
}
afficherLesUsers();