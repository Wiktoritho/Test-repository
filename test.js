const container = document.querySelector(".container")
const blok = document.querySelectorAll(".blok");
const point = document.querySelectorAll(".point");
const image = document.querySelectorAll(".background__image");
const kraj = document.querySelectorAll(".country__description");
const miasto = document.querySelectorAll(".city__description");
const from = document.querySelectorAll(".from__text");
const cena = document.querySelectorAll(".price__text");
let slideIndex = 0;
let timer = null;
let timer2 = null;

fetch("https://rekrutacja.webdeveloper.rtbhouse.net/files/banner_vip.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  })
  .then((data) => {
    const usedIndexes = [];
    for (let i = 0; i < blok.length; i++) {
      let randIndex = Math.floor(Math.random() * data.offers.length);
      while (usedIndexes.includes(randIndex)) {
        randIndex = Math.floor(Math.random() * data.offers.length);
      }
      usedIndexes.push(randIndex);
      const imageUrl = data.offers[randIndex].imgURL;
      const city = data.offers[randIndex].city;
      const country = data.offers[randIndex].country;
      const currency = data.offers[randIndex].currency;
      const price = data.offers[randIndex].price;
      const priceText = data.offers[randIndex].priceText;
      image[i].src = imageUrl;
      image[i].alt = city;
      kraj[i].innerHTML = country;
      miasto[i].innerHTML = city;
      from[i].innerHTML = priceText;
      cena[i].innerHTML = price + " " + currency;
    }
  });

function changeSlide() {
  for (let j = 0; j < blok.length; j++) {
    blok[j].style.display = "none";
  }
  slideIndex = slideIndex + 1;
  if (slideIndex > blok.length) {
    slideIndex = 1;
  }
  for (let i = 0; i < blok.length; i++) {
    point[i].className = point[i].className.replace(" active", "");
  }
  blok[slideIndex - 1].style.display = "block";
  point[slideIndex - 1].className += " active";
  timer = setTimeout(changeSlide, 5000);
}
changeSlide();

function elo() {
  for (let i = 0; i < image.length; i++) {
    if (image[i].classList.contains("fade")) {
      image[i].classList.remove("fade");
    }
  }
}

timer2 = setTimeout(elo, 2800);
