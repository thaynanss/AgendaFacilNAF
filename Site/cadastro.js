
function validarFormulario() {
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const confirmarSenha = document.getElementById("confirmarSenha").value;
    const messageDiv = document.getElementById("message");

    
    if (senha !== confirmarSenha) {
        messageDiv.innerHTML = "As senhas não coincidem. Tente novamente.";
        messageDiv.style.color = "red";
        return false; 
    }
    document.getElementById('myForm').addEventListener('submit', function(event) {
        const emailField = document.getElementById('email');
        const errorMessage = document.getElementById('error');
        
        // Verifica se o email contém o '@'
        if (!emailField.value.includes('@')) {
            event.preventDefault(); // Bloqueia o envio do formulário
            errorMessage.textContent = 'Por favor, insira um email válido com o símbolo @.';
            errorMessage.style.display = 'block'; // Exibe a mensagem de erro
        }
    });
    
    if (nome === "" || email === "") {
        messageDiv.innerHTML = "Por favor, preencha todos os campos.";
        messageDiv.style.color = "red";
        return false;  
    }

    
    messageDiv.innerHTML = `Cadastro de ${nome} realizado com sucesso! Um e-mail de confirmação foi enviado para ${email}.`;
    messageDiv.style.color = "green";

    
    setTimeout(() => {
        
        alert("E-mail de confirmação enviado!");
    }, 2000);

    return false;  

    
}
