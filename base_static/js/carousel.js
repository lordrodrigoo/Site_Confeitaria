let currentIndex = 0;
const carouselItems = document.querySelectorAll('.carousel-item');
const itemsPerPage = 3;

function moveToNextSlide() {
  currentIndex = (currentIndex + 1) % Math.ceil(carouselItems.length / itemsPerPage); 
  updateCarouselPosition();
}

function moveToPrevSlide() {
  currentIndex = (currentIndex - 1 + Math.ceil(carouselItems.length / itemsPerPage)) % Math.ceil(carouselItems.length / itemsPerPage);
  updateCarouselPosition();
}

function updateCarouselPosition() {
  const newTransformValue = -(currentIndex * 100); // Mova o carrossel pela largura de 100%
  document.querySelector('.carousel-inner').style.transform = `translateX(${newTransformValue}%)`;
}

// Eventos para navegação
document.querySelector('.carousel-control-next').addEventListener('click', moveToNextSlide);
document.querySelector('.carousel-control-prev').addEventListener('click', moveToPrevSlide);

// Inicializa a transição de imagens
setInterval(moveToNextSlide, 10000);
