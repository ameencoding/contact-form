"use strict";

const form = document.querySelector("form");
const success = document.querySelector(".success");

const general = document.querySelector('.general')
const support = document.querySelector('.support')

const conset = document.querySelector('.conset')


form.addEventListener("submit", function (e) {
  e.preventDefault();

  setTimeout(() => {
    form.classList.add('scale');
  }, 2000);

  setTimeout(() => {
    success.classList.remove('scale')
  }, 2500);

  setTimeout(() => {
    location.reload()
  }, 7500);
})



// Handle selected, checked....
general.addEventListener("click", function () {
  support.querySelector(".dot-support").classList.remove("selected");
  this.querySelector(".dot-general").classList.add("selected");
 
  support.classList.remove("bg");
  this.classList.add("bg");
});

support.addEventListener("click", function () {
  general.querySelector(".dot-general").classList.remove("selected");
  this.querySelector(".dot-support").classList.add("selected");

  general.classList.remove("bg");
  this.classList.add("bg");
});

conset.querySelector('.box').addEventListener('click', function(){
  this.classList.toggle('checked')
})

