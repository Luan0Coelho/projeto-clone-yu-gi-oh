/*
OBJETIVO 1 - quando clicamos na seta de avançar temos que mostrar o proximo cartao da lista
    - passo 1 - dar um jeito de pegar o elemento HTML da seta avançar 
    - passo 2 - dar um jeito de identificar o clique do usuario na seta avançar
    - passo 3 - fazer aparecer o proximo cartão da lista
    - passo 4 - buscar o cartão que esta selecionado e esconder

    OBJETIVO 2 - quando clicamos na seta de voltar temos que mostrar o cartão anterior da lista
        - passo 1 - dar um jeito de pegar o elemento HTML da seta voltar
        - passo 2 - dar um jeito de identificar o clique do usuario na seta voltar
        - passo 3 - fazer aparecer o cartão anterior da lista 
        - passo 4 - buscar o cartão que esta selecionado e esconder 
        */


   
    const btnAvancar = document.getElementById("btn-avancar");
    const cartoes = document.querySelectorAll(".cartao");
    let cartaoAtual = 0; 

    btnAvancar.addEventListener("click", function () {
        if(cartaoAtual === cartoes.length - 1) return;
        
        const cartaoSelecionado = document.querySelector(".selecionado");
        cartaoSelecionado.classList.remove("selecionado")

        cartaoAtual++;
        cartoes[cartaoAtual].classList.add("selecionado");
        });

        const btnVoltar = document.getElementById("btn-voltar");

        btnVoltar.addEventListener("click", function () {
            if(cartaoAtual === 0) return;

            const cartaoSelecionado = document.querySelector(".selecionado");
            cartaoSelecionado.classList.remove("selecionado")
             
            cartaoAtual--;
            cartoes[cartaoAtual].classList.add("selecionado");
        })