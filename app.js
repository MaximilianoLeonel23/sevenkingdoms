"use strict";

const navLinks = document.querySelector(".nav_links");
const navLinkElement = document.querySelectorAll(".nav_link");

Array.from(navLinks).forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    const target = e.currentTarget.getAttribute("href");

    document.querySelector(target).scrollIntoView({
      behavior: "smooth",
    });
  });
});

const wineCatalog = [
  {
    id: 0,
    lema: "The Unbrokens",
    region: "Dorne",
    color: "Scarlet",
    type: "Reddish",
    cost: "Revenge",
    description: "lorem ipsum defji deidiefd hehefuhefh lorem ipsum defji deidiefd hehefuhefh Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio suscipit adipisci rem lorem ipsum defji deidiefd hehefuhefh Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio suscipit adipisci rem lorem ipsum defji deidiefd hehefuhefh Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio suscipit adipisci rem lorem ipsum defji deidiefd hehefuhefh Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio suscipit adipisci rem lorem ipsum defji deidiefd hehefuhefh Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio suscipit adipisci rem",
    background: "/img/Landscapes/sunspear.jpg",
    wine: "/img/Vinos/dornewine.PNG",
  },

  {
    id: 1,
    lema: "The Hand of the King",
    region: "Kingslanding",
    color: "Blood",
    type: "Red",
    cost: "Some secrets...",
    description: "lorem ipsum defji deidiefd hehefuhefh lorem ipsum defji deidiefd hehefuhefh Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio suscipit adipisci rem lorem ipsum defji deidiefd hehefuhefh Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio suscipit adipisci rem lorem ipsum defji deidiefd hehefuhefh Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio suscipit adipisci rem",
    background: "/img/Landscapes/kingslanding.jpg",
    wine: "/img/Vinos/kingslandingwine.PNG",
  },
  {
    id: 2,
    lema: "Lucky Harvest",
    region: "Highgarden",
    color: "Petals",
    type: "Pinkish",
    cost: "Only for ladies",
    description: "lorem ipsum defji deidiefd hehefuhefh Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio suscipit adipisci rem q uia quisquam accusamus a porro? Debitis quisquam porro quam, unde deleniti non quo maxime c onsectetur exercitationem dolores recusandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio suscipit adipisci rem q uia quisquam accusamus a porro? Debitis quisquam porro quam, unde deleniti non quo maxime c onsectetur exercitationem dolores recusandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio suscipit adipisci rem q uia quisquam accusamus a porro? Debitis quisquam porro quam, unde deleniti non quo maxime c onsectetur exercitationem dolores recusandae.",
    background: "/img/Landscapes/highgarden2.jpg",
    wine: "/img/Vinos/highgardenwine.PNG"
  },
  {
    id: 3,
    lema: "Debt Paid",
    region: "Casterly Rock",
    color: "Gold",
    type: "White",
    cost: "A lot of gold",
    description: "lorem ipsum defji deidiefd hehefuhefh lorem ipsum defji deidiefd hehefuhefh Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio suscipit adipisci rem lorem ipsum defji deidiefd hehefuhefh Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio suscipit adipisci rem lorem ipsum defji deidiefd hehefuhefh Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio suscipit adipisci rem lorem ipsum defji deidiefd hehefuhefh Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio suscipit adipisci rem",
    background: "/img/Landscapes/casterlyrock.jpg",
    wine: "/img/Vinos/lannisterwine.PNG"
  },
];

const region = document.querySelector(".catalogo_card--region");
const color = document.querySelector(".catalogo_card--color");
const type = document.querySelector(".catalogo_card--type");
const cost = document.querySelector(".catalogo_card--cost");
const description = document.querySelector(".catalogo_card--description");
const wine = document.querySelector(".catalogo_img--wine");
const backgroundImage = document.getElementById("section--2");
const lema = document.querySelector(".catalogo_card--lema");


const tabMenu = document.querySelector(".catalogo_tab_menu");
const tabButton = document.querySelectorAll(".tab_btn");

let datasetTab;


tabMenu.addEventListener("click", function (e) {
  const clicked = e.target.closest(".tab_btn");

  // Guard Clause
  if (!clicked) return;

  // Remove active clases
  tabButton.forEach((t) => t.classList.remove("tab_btn--active"));

  // Remove content
  region.textContent = "";

  // Activate tab
  clicked.classList.add("tab_btn--active");

  // Encontrar objeto

  datasetTab = clicked.dataset.tab;
  console.log(datasetTab);

 const currentWine = wineCatalog.find((num) => num.id === +datasetTab);
  console.log(currentWine);

  // Add new content
  region.textContent = `Region: ${currentWine.region}`;
  color.textContent = `Color: ${currentWine.color}`;
  type.textContent = `Type: ${currentWine.type}`;
  cost.textContent = `Cost: ${currentWine.cost}`;
  description.textContent = `Description: ${currentWine.description}`;
  lema.textContent = currentWine.lema;
  backgroundImage.style.backgroundImage = `url(${currentWine.background})`;
  wine.src = currentWine.wine;

  // const resultado = inventario.find( fruta => fruta.nombre === 'cerezas' );
});


// Cuando aprete un boton
// 1. Cambie a clase activa
// 2. Remueva clase activa del boton previo
// 3. Cambie la información actual por la del boton


// Modal Open and Close 
const modalBtnOpen = document.querySelector(".header_description--btn");
const modalBtnClose = document.querySelector(".btn--close-modal");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

modalBtnOpen.addEventListener("click", function(e) {
  e.preventDefault();

  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
})

modalBtnClose.addEventListener("click", function(e) {
  e.preventDefault();

  modal.classList.add("hidden");
  overlay.classList.add("hidden");
})

if(!overlay.classList.contains(".hidden")) {
  overlay.addEventListener("click", e => {
    e.preventDefault();
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
  })
}
addEventListener("keydown", e => {
  e.preventDefault(e);
  
  if(e.key === "Escape") {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
  }
  
})

// Desplegar el menu hamburguesa 

const Openhamburguer = document.querySelector(".hamburguer_Openmenu");
// navLinks 
const nav = document.querySelector(".nav");
const footer = document.querySelector("footer");
Openhamburguer.addEventListener("click", e => {
  e.preventDefault();
  if(e.target) {
    navLinks.classList.toggle("landing_menu");
    overlay.classList.toggle("hidden");
    nav.classList.toggle("index_top");
    footer.classList.toogle("index_top");
  }
})