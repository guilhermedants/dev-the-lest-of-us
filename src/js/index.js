//alert('Olá, seja bem vindo a esse trabalho do meu portifólio.');
/*
    OBJETIVO - quando clicarmos no botão temos que mostrar a imagem de fundo correspondente
    - passo 1 - dar um jeito de pegar o elemento HTML dos botões
    - passo 2 - dar um jeito de identificar o clique do usuário no botão    
    - passo 3 - desmarcar o botão selecionado anterior
    - passo 4 - marcar o botão clicado como se estivesse selecionada
    - passo 5 - esconder a imagem anterior
    - passo 6 - fazer aparecer a imagem correspondente ao botão clicado

    Atalho Alt+Shift+F configura hierarquias do codigo
*/
//passo 1 - dar um jeito de pegar o elemento HTML dos botões
const botoesCarrossel = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll('.imagem');

//passo 2 - dar um jeito de identificar o clique do usuário no botão
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {

        desmarcarBotao();

        marcarBotaoSelecionado(botao);

        esconderImagens();

        imagemSelecionada(indice);
    })
})

function desmarcarBotao() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}

function marcarBotaoSelecionado(botao) {
    botao.classList.add('selecionado');
}

function esconderImagens() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function imagemSelecionada(indice) {
    imagens[indice].classList.add('ativa');
}

