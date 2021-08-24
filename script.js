"use strict";

// Local Reviews Data
const reviews = [
  {
    id: 1,
    idea: "Discover innovative ways to decorate",
    img: `url("./images/desktop-image-hero-1.jpg")`,
    text: `We provide unmatched quality, comfort, and style for property owners across the country. 
    Our experts combine form and function in bringing your vision to life. Create a room in your 
    own style with our collection and make your property a reflection of you and what you love.`,
  },
  {
    id: 2,
    idea: "  We are available all across the globe",
    img: `url("./images/desktop-image-hero-1.jpg")`,
    text: `With stores all over the world, it's easy for you to find furniture for your home or place of business. 
    Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
    store locator. Any questions? Don't hesitate to contact us today.`,
  },
  {
    id: 3,
    idea: "Manufactured with the best materials",
    img: `url("./images/desktop-image-hero-1.jpg")`,
    text: `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
    to ensure that every product is made as perfect and as consistent as possible. With three decades of 
    experience in this industry, we understand what customers want for their home and office.`,
  },
];

// Variables
const modal = document.querySelector(".modal");
const showModal = document.querySelectorAll(".line");
const showModalAll = document.querySelector(".lines");
const btnClose = document.querySelector(".close-modal");
const img = document.querySelector(".navbar");
const mainIdea = document.querySelector(".main-idea");
const text = document.querySelector(".text-description");
const prevBtn = document.querySelector(".btn-left");
const nextBtn = document.querySelector(".btn-right");
const btndesktopleft = document.querySelector(".btn-desktop-left");
const btndesktopright = document.querySelector(".btn-desktop-right");

////////////////////////Review /////////////////////////////////////////////////
// Starting item
let currentItem = 0;
let currentImg = 0;

// Function
const showItem = function (el) {
  const item = reviews[el];
  img.style.backgroundImage = `url("./images/desktop-image-hero-${
    currentImg + 1
  }.jpg")`;
  mainIdea.textContent = item.idea;
  text.textContent = item.text;
};

// load initial item
window.addEventListener("DOMContentLoaded", showItem(currentItem));

// Show next item
nextBtn.addEventListener("click", function () {
  console.log("a");
  currentItem++;
  currentImg++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  if (currentImg > reviews.length - 1) {
    currentImg = 0;
  }

  showItem(currentItem);
  showItem(currentImg);
});

// Show prev item
prevBtn.addEventListener("click", function () {
  currentItem--;
  currentImg--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  if (currentImg < 0) {
    currentImg = reviews.length - 1;
  }
  showItem(currentItem);
  showItem(currentImg);
});

// desktop next item
btndesktopright.addEventListener("click", function () {
  console.log("a");
  currentItem++;
  currentImg++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  if (currentImg > reviews.length - 1) {
    currentImg = 0;
  }

  showItem(currentItem);
  showItem(currentImg);
});

// desktop prev btn
btndesktopleft.addEventListener("click", function () {
  console.log("a");
  currentItem++;
  currentImg++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  if (currentImg > reviews.length - 1) {
    currentImg = 0;
  }

  showItem(currentItem);
  showItem(currentImg);
});

//////////////////////////////// Overlay ////////////////////////////////////
// Functions
const openModal = function () {
  modal.classList.remove("hidden");
  headerContent.classList.add("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  headerContent.classList.remove("hidden");
};

// Showing Modal
for (let i = 0; i < showModal.length; i++) {
  showModal[i].addEventListener("click", openModal);
}

showModalAll.addEventListener("click", openModal);

// Closing Modal
btnClose.addEventListener("click", closeModal);

window.addEventListener("resize", function () {
  modal.classList.add("hidden");
});

////////////////////////// Review Part ////////////////////////////////////
