// Configuration du serveur NODEJS
// --------------------------------
require('dotenv').config();
const express = require('express');
const app = new express();
const PORT = process.env.PORT || 4040;
//Utilisation de express urlencoded afin d'accéder au formulaire envoyé en méthode POST
app.use(express.urlencoded({extended:false}));
// --------------------------------

//Mise en place de notre système de template et de notre dossier static
app.set('view engine','ejs');
app.set('views', __dirname +'/app/views/');
app.use(express.static(__dirname + '/app/public'));
// --------------------------------

//Mise en place et configuration de la session
//Après avoir utiliser ce middle sur l'index.js avant mon routeur, cela va ajouter
//Mon objet session au requête faites au serveur, c'est à dire à : req ou request.
//exemple d'affichage d'une session : console.log(req.session)
//A noter qu'une fois ce code sera lu, dans le developper tool de chrome, un connect.sid sera ajouté.
//Cela correspond à notre session
const session = require('express-session');
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: "une chaine de caractère pour protéger ma session et puis voilà c'est tout =)"
}))

//J'importe mon routeur et je l'aoute à mon serveur
const router = require('./app/router/mainRouter');
app.use(router);


//Serveur en écoute de requête HTTP
// --------------------------------
app.listen(PORT, () => {
    console.log(`Application disponible sur http://localhost:${PORT}`);
});
// --------------------------------