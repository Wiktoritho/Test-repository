const container = document.querySelector(".container")
const blok = document.querySelectorAll(".blok");
const point = document.querySelectorAll(".point");
const image = document.querySelectorAll(".background__image");
const krajopis = document.querySelectorAll(".country__description");
const miastoopis = document.querySelectorAll(".city__description");
const fromtext = document.querySelectorAll(".from__text");
const cenatext = document.querySelectorAll(".price__text");
const kraj = document.querySelectorAll(".country");
const miasto = document.querySelectorAll(".city");
const cena = document.querySelectorAll(".price");
const from = document.querySelectorAll(".from");

let slideIndex = 0;
let timer = null;
let timer2 = null;
let timer3 = null;

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
      krajopis[i].innerHTML = country;
      miastoopis[i].innerHTML = city;
      fromtext[i].innerHTML = priceText;
      cenatext[i].innerHTML = price + " " + currency;
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
  blok[slideIndex - 1].style.display = "flex";
  point[slideIndex - 1].className += " active";
  timer = setTimeout(changeSlide, 4800);
}
changeSlide();

function elo() {
  for (let i = 0; i < image.length; i++) {
    if (image[i].classList.contains("fade")) {
      image[i].classList.remove("fade");
    }
    image[i].classList.add("scalefade");
  }
}

timer2 = setTimeout(elo, 1200);


function reset() {
  for (let i = 0; i < image.length; i++) {
    kraj[i].style.animationDelay = "1300ms";
    kraj[i].style.animationDuration = "3500ms";
    krajopis[i].style.animationDelay = "1500ms";
    krajopis[i].style.animationDuration = "3300ms";
    miasto[i].style.animationDelay = "1500ms";
    miasto[i].style.animationDuration = "3300ms";
    miastoopis[i].style.animationDelay = "1700ms";
    miastoopis[i].style.animationDuration = "3100ms";
    cenatext[i].style.animationDelay = "1500ms";
    cenatext[i].style.animationDuration = "3300ms";
    from[i].style.animationDelay = "1500ms";
    from[i].style.animationDuration = "3300ms";
  }
}

timer3 = setTimeout(reset, 4000);