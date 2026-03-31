function logar() {
    var usuario = document.getElementById('inputUsuario').value
    var senha = document.getElementById('inputSenha').value
 
    // Operadores Lógicos E - && OU ||
    if(usuario == "admin@admin.com" && senha == "1234") {
        window.location.href = "home.html"
    } 
    else {
        //alert("Usuário/Senha incorretos! Tente novamente")
        Swal.fire({
        title: "Acesso Negado!",
        text: "Usuário/Senha incorretos! Tente novamente",
        icon: "error"
});
    }
 
}

function cadastro() {

    
}