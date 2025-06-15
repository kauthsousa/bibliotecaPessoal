var nome = document.getElementsByName("usuario");
var senha = document.getElementsByName("senha");

function validaLogin() {
    var user = "admin";
    var pass = "1234";

    if(user === document.forms["validalogin"]["usuario"].value &&
        pass === document.forms["validalogin"]["senha"].value){
            alert("Login Válido");
            return true;
        }
    else{
        alert("Login Inválido");
        return false;
    }
}
