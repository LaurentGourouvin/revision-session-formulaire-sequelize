const express = require('express');
const router = express.Router();
const {checkSignInForm} = require('../views/forms/script/formulaire');

router.get('/', (req, res) => {
    //j'affiche un user qui est censé être stocké dans ma session
    //lors de la première connexion, ce console.log me renverra undefined
    //ATTENTION: si vous essayer de mettre des conditions sur la propriété qui est undefined
    //vous aurez une belle erreur dans votre navigateur.
    console.log(req.session.user);
    //par contre, si la valeur est différentes de undefined j'affiche le résultat
    if(req.session.user !== undefined){
        console.log('user de ma session:',req.session.user.name);
    }
    res.render('index');
});
// -----------------------------
// Affichage du formulaire avec la méthode GET
router.get('/displayGet', (req, res) => {

    const user = {
        nom: req.query.nom,
        mdp: req.query.motdepasse
    }

    res.render('forms/displayGet', {user});
});

// Affichage du formulaire avec la méthode POST
router.post('/displayPost', (req, res) => {
    //j'ai accès aux données d'un formulaire envoyé par POST en utilisant req.body
    const user = {
        nom: req.body.nom,
        mdp: req.body.motdepasse
    }

    res.render('forms/displayPost', {user});
});

//Affichage de la page de connexion admin
router.get('/admin-sign-in', (req,res) => {
    res.render('admin/admin-sign-in');
})
router.post('/admin-sign-in', (req, res) => {
    const user = {
        name: req.body.name,
        password: req.body.password
    };
    //j'appelle ma fonction afin de vérifier que mon formulaire à bien était completé.
    //ma fonction va me retourner soit un table vide, soit remplis d'objet avec une propriété
    //message
    checkErrors = checkSignInForm(user);

    if(checkErrors.length > 0){
        res.render('admin/admin-sign-in', {checkErrors});
    } else {
        //si tout c'est bien passé je créer des propriétés de manière dynamique à notre objet session
        //dans un premier temps je créer une propriété .isLoggin que je mets à true
        req.session.isLoggin = true;
        //puis une propriété user qui va contenir mon objet avec name et password.
        req.session.user = user;
        //en faisant tout ça, ma Session est mis à jour sur mon site et je pourrais récupérer l'informations
        //sur toute les pages de celui-ci
        res.redirect('/');
    }
});

module.exports = router;