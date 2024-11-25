   function criarItemAgendamento(data, horario, nome, email) {
            var item = document.createElement('li');
            item.textContent = 'Data: ' + data + ', Horário: ' + horario + ', Nome: ' + nome + ', E-mail: ' + email;
            return item;
        }

        function limparFormulario() {
            document.getElementById('data').value = '';
            document.getElementById('horario').value = '';
            document.getElementById('nome').value = '';
            document.getElementById('email').value = '';
        }

        document.getElementById('agendamentoForm').addEventListener('submit', function(event) {
            event.preventDefault(); 

            var data = document.getElementById('data').value;
            var horario = document.getElementById('horario').value;
            var nome = document.getElementById('nome').value;
            var email = document.getElementById('email').value;

            var itemAgendamento = criarItemAgendamento(data, horario, nome, email);

            var listaAgendamentos = document.getElementById('listaAgendamentos');
            listaAgendamentos.appendChild(itemAgendamento);

            
            limparFormulario();

            
            window.location.href = "confirmacao.html" ; 
        });
    