document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');
    const menuInfo = document.getElementById('menu-info');
    const introText = document.getElementById('intro-text');

    menuToggle.addEventListener('click', function() {
        menu.classList.toggle('open'); // Adiciona ou remove a classe 'open' no menu
        menuInfo.classList.toggle('open'); // Adiciona ou remove a classe 'open' na janelinha
    });

    // Adicionar a classe 'show' ao intro-text ao carregar a página
    setTimeout(function() {
        introText.classList.add('show');
    }, 500); // Ajuste o tempo conforme necessário (500ms = 0.5 segundos)

    // Fecha o menu e a janelinha ao clicar fora deles
    document.addEventListener('click', function(e) {
        if (!menu.contains(e.target) && !menuToggle.contains(e.target)) {
            menu.classList.remove('open');
            menuInfo.classList.remove('open');
        }
    });
});
