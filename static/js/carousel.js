let slideIndex = 1; // Índice inicial
let timer; // Variável para o autoplay

// Exibe o slide inicial
showSlides(slideIndex);
startAutoPlay(); // Inicia o autoplay

// Controles de próximo/anterior
function plusSlides(n) {
  showSlides(slideIndex += n); // Ajusta o índice do slide
  resetTimer(); // Reseta o autoplay após interação manual
}

// Função principal para exibir slides
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");

  // Reinicia o índice se passar dos limites
  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }

  // Esconde todos os slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Exibe o slide atual
  slides[slideIndex - 1].style.display = "block";
}

// Função de autoplay
function autoPlaySlides() {
  slideIndex++; // Avança para o próximo slide
  showSlides(slideIndex);
}

// Inicia o autoplay com um intervalo de 5 segundos
function startAutoPlay() {
  timer = setInterval(autoPlaySlides, 5000);
}

// Reseta o autoplay após interação manual
function resetTimer() {
  clearInterval(timer); // Para o autoplay atual
  startAutoPlay(); // Reinicia o autoplay
}
