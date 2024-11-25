
document.addEventListener('DOMContentLoaded', function () {
    
    
    document.getElementById('form-agendamento').addEventListener('submit', function (event) {
        event.preventDefault(); 
        
        const nome = document.getElementById('nome').value;
        const data = document.getElementById('data').value;
        const hora = document.getElementById('hora').value;
        
        
        if (!nome || !data || !hora) {
            alert('Por favor, preencha todos os campos.');
            return; 
        }
        
        
        const listaAgendamentos = document.getElementById('lista-agendamentos');
        const li = document.createElement('li');
        
       
        li.innerHTML = `
            <span><strong>${nome}</strong></span> - ${data} às ${hora}
            <button class="remover">Remover</button>
        `;
        
        
        listaAgendamentos.appendChild(li);

        
        document.getElementById('form-agendamento').reset();
        
       
        li.querySelector('.remover').addEventListener('click', function () {
            
            li.remove();
        });
    });

});
