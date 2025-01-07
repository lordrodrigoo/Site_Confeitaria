document.addEventListener('DOMContentLoaded', function () {
    const menuBurguer = document.querySelector('.menu-burguer');
    const iconHamburguer = document.getElementById('icone-hamburguer');

    iconHamburguer.addEventListener('click', function () {
        menuBurguer.style.display = menuBurguer.style.display === 'block' ? 'none' : 'block';
    });

    // Ocultar o menu ao clicar fora
    document.addEventListener('click', function (event) {
        if (!menuBurguer.contains(event.target) && !iconHamburguer.contains(event.target)) {
            menuBurguer.style.display = 'none';
        }
    });
});