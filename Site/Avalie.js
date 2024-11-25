
const stars = document.querySelectorAll('.star');
let selectedRating = 0;

stars.forEach(star => {
    star.addEventListener('click', function() {
        selectedRating = parseInt(star.getAttribute('data-value'));
        updateStarSelection();
    });
});

function updateStarSelection() {
    stars.forEach(star => {
        if (parseInt(star.getAttribute('data-value')) <= selectedRating) {
            star.classList.add('selected');
        } else {
            star.classList.remove('selected');
        }
    });
}

document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

      const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const comentario = document.getElementById('comentario').value;

        if (nome && email && comentario && selectedRating > 0) {
       
        document.getElementById('feedbackResponse').innerHTML = `Obrigado pelo seu feedback, ${nome}!<br>Avaliação: ${selectedRating} estrelas.`;
        document.getElementById('feedbackForm').reset(); 
        updateStarSelection(); 
    } else {
        document.getElementById('feedbackResponse').innerHTML = 'Por favor, preencha todos os campos e escolha uma avaliação.';
        document.getElementById('feedbackResponse').style.color = 'red';
    }
});

