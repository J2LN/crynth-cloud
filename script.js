const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');

let index = 0;

function update() {
  slides.style.transform = `translateX(-${index * 100}%)`;
}

document.getElementById('next').onclick = () => {
  index = (index + 1) % images.length;
  update();
};

document.getElementById('prev').onclick = () => {
  index = (index - 1 + images.length) % images.length;
  update();
};

setInterval(() => {
  index = (index + 1) % images.length;
  update();
}, 4000);

// DOWNLOAD
document.querySelector('.download-btn').onclick = () => {
  window.open("https://ton-lien-download.com");
};