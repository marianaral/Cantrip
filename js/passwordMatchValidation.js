function validatePassword(){
    if(document.getElementById('passwordRegister').value != document.getElementById('repeatPasswordRegister').value){
        document.getElementById('repeatPasswordRegister').setCustomValidity("Passwords Don't Match");

    } else {
        document.getElementById('repeatPasswordRegister').setCustomValidity('');
    }
}

