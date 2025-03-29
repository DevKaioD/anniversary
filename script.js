document.addEventListener('DOMContentLoaded', function () {
    // Botão "Entrar"
    document.getElementById('btnEntrar').addEventListener('click', function () {
        document.getElementById('tela-inicial').style.display = 'none';
        document.getElementById('galeria').style.display = 'block';
    });

    // Botão "Ver Carta"
    document.getElementById('btnCarta').addEventListener('click', function () {
        document.getElementById('galeria').style.display = 'none';
        document.getElementById('carta').style.display = 'block';

        // Exibir mensagem diretamente na carta
        document.getElementById('mensagem').innerHTML = "Cada momento ao seu lado é inesquecível. Obrigado por fazer parte da minha vida!";
    });

    // Botão "Voltar à Galeria"
    document.getElementById('btnVoltarGaleria').addEventListener('click', function () {
        document.getElementById('carta').style.display = 'none';
        document.getElementById('galeria').style.display = 'block';
    });

    // Função para ampliar imagem e mostrar mensagem atrás
    function ampliarImagem(elemento) {
        elemento.classList.toggle('flipped');
    }
});
