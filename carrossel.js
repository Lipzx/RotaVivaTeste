// script do carrossel - pagina inicial
var slideAtual = 0;
var slides = document.querySelectorAll(".slide");
var bolinhas = document.querySelectorAll(".bolinha");
var botaoAnterior = document.querySelector(".seta_esquerda");
var botaoProximo = document.querySelector(".seta_direita");

function mostrarSlide(numero) {
  for (var i = 0; i < slides.length; i++) {
    slides[i].classList.remove("ativo");
  }
  for (var j = 0; j < bolinhas.length; j++) {
    bolinhas[j].classList.remove("ativo");
  }

  slideAtual = numero;

  if (slideAtual >= slides.length) {
    slideAtual = 0;
  }
  if (slideAtual < 0) {
    slideAtual = slides.length - 1;
  }

  slides[slideAtual].classList.add("ativo");
  bolinhas[slideAtual].classList.add("ativo");
}

botaoAnterior.addEventListener("click", function () {
  mostrarSlide(slideAtual - 1);
});

botaoProximo.addEventListener("click", function () {
  mostrarSlide(slideAtual + 1);
});

for (var k = 0; k < bolinhas.length; k++) {
  bolinhas[k].addEventListener("click", function () {
    var indice = Number(this.getAttribute("data-indice"));
    mostrarSlide(indice);
  });
}

mostrarSlide(0);
