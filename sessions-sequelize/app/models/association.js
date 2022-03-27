const Role = require('./Role');
const User = require('./User');

//un utilisateur possède 1 et 1 seul rôle, avec belongsTo la clé étranger sera stocké dans le class qui appelle la méthode .belongsTo
// ce qui fait : User.belongsTo(Role) -> User contiendra la clé étrangère role_id faisant référence à l'ID de Role.
User.belongsTo(Role, {
    foreignKey: 'role_id',
    as: 'role'
});


module.exports = { Role, User };