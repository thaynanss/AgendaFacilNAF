
function validarFormulario() {
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const confirmarSenha = document.getElementById("confirmarSenha").value;
    const messageDiv = document.getElementById("message");

    
    if (senha !== confirmarSenha) {
        messageDiv.innerHTML = "As senhas não coincidem. Tente novamente.";
        messageDiv.style.color = "red";
        return false;  
    }

    
    messageDiv.innerHTML = `A redefinição de senha foi solicitada. Um e-mail será enviado para ${email} com as instruções.`;
    messageDiv.style.color = "green";

    
    setTimeout(() => {
        
        alert("E-mail enviado para a redefinição de senha!");
    }, 2000);

    return false; 
}
