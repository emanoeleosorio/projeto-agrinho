document.addEventListener('DOMContentLoaded', function() {
    const elementosAnimados = document.querySelectorAll('.animate');

    elementosAnimados.forEach(function(elemento, index) {
        setTimeout(function() {
            elemento.classList.add('show');
        }, index * 300); // Atraso incremental para efeito escalonado
    });
});
