
let atendimentos = [
    { id: 1, nome: "Maria Geovana da Silva", grupo: "Administrador", data: "26-11-2024 10:00" },
    { id: 2, nome: "Jessica Gauto dos Santos", grupo: "Professor", data: "28-11-2024 14:00" },
    { id: 3, nome: "João Paulo dos Santos", grupo: "Estudante", data: "11-12-2024 09:00" }
];


function mostrarAtendimentos() {
    const atendimentosContainer = document.getElementById("atendimentos");
    atendimentosContainer.innerHTML = ""; 

    atendimentos.forEach(atendimento => {
        const atendimentoDiv = document.createElement("div");
        atendimentoDiv.classList.add("atendimento");
        
        atendimentoDiv.innerHTML = `
            <span><strong>Cliente:</strong> ${atendimento.nome} <strong>Grupo:</strong> ${atendimento.grupo} <strong>Data:</strong> ${atendimento.data}</span>
            <select onchange="alterarGrupo(${atendimento.id}, this.value)">
                <option value="Administrador" ${atendimento.grupo === "Administrador" ? "selected" : ""}>Administrador</option>
                <option value="Professor" ${atendimento.grupo === "Professor" ? "selected" : ""}>Professor</option>
                <option value="Estudante" ${atendimento.grupo === "Estudante" ? "selected" : ""}>Estudante</option>
            </select>
            <button onclick="deletarAtendimento(${atendimento.id})">Deletar</button>
        `;
        
        atendimentosContainer.appendChild(atendimentoDiv);
    });
}


function alterarGrupo(id, novoGrupo) {
    const atendimento = atendimentos.find(atend => atend.id === id);
    if (atendimento) {
        atendimento.grupo = novoGrupo;
        mostrarAtendimentos(); 
        document.getElementById("message").innerText = `Grupo alterado para "${novoGrupo}" com sucesso!`;
    }
}


function deletarAtendimento(id) {
    atendimentos = atendimentos.filter(atendimento => atendimento.id !== id); 
    mostrarAtendimentos(); 
    document.getElementById("message").innerText = "Atendimento deletado com sucesso!";
}

mostrarAtendimentos();
