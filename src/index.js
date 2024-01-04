const imagens = document.querySelectorAll(".slide");
const setaVoltar = document.getElementById("arrow-back");
const setaAvancar = document.getElementById("arrow-go");

let imagemAtual = 0;

setaAvancar.addEventListener ("click", function() {
    if (imagemAtual === imagens.length -1) {
        return;
    }

    imagemAtual++;

    esconderImagemAberta()
    mostrarImagem();
    mostrarOuEsconderSetas()
});

setaVoltar.addEventListener ("click", function() {
    if (imagemAtual === 0) {
        return;
    }
    
    imagemAtual--;

    esconderImagemAberta()
    mostrarImagem();
    mostrarOuEsconderSetas()
});

function mostrarImagem() {
    imagens[imagemAtual].classList.add("show");
}

function esconderImagemAberta() {
    const imagemAberta = document.querySelector(".show");
    imagemAberta.classList.remove("show")
}

function mostrarOuEsconderSetas() {
    const naoEhAPrimeiraImagem = imagemAtual !== 0;
    if  (naoEhAPrimeiraImagem) {
        setaVoltar.classList.remove("opacity")
    } else {
        setaVoltar.classList.add("opacity")
    }

   const chegouNaUltimaImagem = imagemAtual !== 0 && imagemAtual === imagens.length -1;
   if (chegouNaUltimaImagem) {
        setaAvancar.classList.add("opacity")
   } else {
        setaAvancar.classList.remove("opacity")
   }
}