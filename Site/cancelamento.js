
let agendamentos = [
    { id: 1, nome: "Maria Geovana da Silva", data: "26-11-2024 10:00" },
    { id: 2, nome: "Jessica Gauto dos Santos", data: "28-11-2024 14:00" },
    { id: 3, nome: "João Paulo dos Santos", data: "11-12-2024 09:00" }
];


function mostrarAgendamentos() {
    const agendamentosContainer = document.getElementById("agendamentos");
    agendamentosContainer.innerHTML = ""; 

    agendamentos.forEach(agendamento => {
        const agendamentoDiv = document.createElement("div");
        agendamentoDiv.classList.add("agendamento");
        
        agendamentoDiv.innerHTML = `
            <span><strong>${agendamento.nome}</strong> - ${agendamento.data}</span>
            <button onclick="cancelarAgendamento(${agendamento.id})">Cancelar</button>
        `;
        
        agendamentosContainer.appendChild(agendamentoDiv);
    });
}


function cancelarAgendamento(id) {
    agendamentos = agendamentos.filter(agendamento => agendamento.id !== id);
    mostrarAgendamentos(); 
    document.getElementById("message").innerText = "Agendamento cancelado com sucesso!";
}


mostrarAgendamentos();
