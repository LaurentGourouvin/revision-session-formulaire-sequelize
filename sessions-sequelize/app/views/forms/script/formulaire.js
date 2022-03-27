//fonction qui va permettre de vérifier 
//le username et le password
function checkSignInForm(user){
    const errors = [];

    if(user.name === ''){
        errors.push({message: "Username vide"})
    };
    
    if(user.password === ''){
        errors.push({message: "Password vide"});
    };

    return errors;
}

module.exports = {checkSignInForm};