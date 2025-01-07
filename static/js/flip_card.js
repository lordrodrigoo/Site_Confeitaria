document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.produto').forEach(card => {
        const produtoInner = card.querySelector('.produto-inner');
        
        // Variável para controlar se o card foi clicado
        let isClicked = false;

        // Alterna a rotação ao clicar no card
        card.addEventListener('click', function () {
            if (isClicked) {
                produtoInner.style.transform = ''; // Volta ao estado original
            } else {
                produtoInner.style.transform = 'rotateY(180deg)'; // Vira o card
            }
            isClicked = !isClicked; // Alterna o estado do clique
        });

        // Faz com que o card volte à posição original quando o mouse sai
        card.addEventListener('mouseleave', function () {
            if (isClicked) {
                produtoInner.style.transform = ''; // Volta ao estado original ao tirar o mouse
                isClicked = false; // Reseta o estado do clique
            }
        });
    });
});