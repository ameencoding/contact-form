"use strict";

const form = document.querySelector("form");
const success = document.querySelector(".success");

const general = document.querySelector(".general");
const support = document.querySelector(".support");
const conset = document.querySelector(".conset");

const fname = document.querySelector("#fname");
const fnameError = document.querySelector(".fname-error");
let fnameIsFilled = false;

const lname = document.querySelector("#lname");
const lnameError = document.querySelector(".lname-error");
let lnameIsFilled = false;

const email = document.querySelector("#email");
const emailError = document.querySelector(".email-error");
let emailIsFilled = false;
let emailIsValid = true;

const queriesError = document.querySelector(".queries-error");
let queriesIsSelected = false;

const msg = document.querySelector("textarea");
const msgError = document.querySelector(".msg-error");
let msgIsFilled = false;

const consetError = document.querySelector(".conset-error");
let consetIsChecked = false;

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // firstname
  if (fname.value === "") {
    fnameError.classList.remove("scale");
    fnameIsFilled = false;
  } else {
    fnameError.classList.add("scale");
    fnameIsFilled = true;
  }

  // lastname
  if (lname.value === "") {
    lnameError.classList.remove("scale");
    lnameIsFilled = false;
  } else {
    lnameError.classList.add("scale");
    lnameIsFilled = true;
  }

  // email
  if (email.value === "" || !email.value.includes("@")) {
    emailError.classList.remove("scale");
    emailIsFilled = false;
  } else {
    emailError.classList.add("scale");
    emailIsFilled = true;
  }

  // queries
  if (general.querySelector(".dot-general").classList.contains("selected")) {
    queriesError.classList.add("scale");
    queriesIsSelected = true;
  } else if (
    support.querySelector(".dot-support").classList.contains("selected")
  ) {
    queriesError.classList.add("scale");
    queriesIsSelected = true;
  } else {
    queriesError.classList.remove("scale");
    queriesIsSelected = false;
  }

  // message
  if (msg.value === "") {
    msgError.classList.remove("scale");
    msgIsFilled = false;
  } else {
    msgError.classList.add("scale");
    msgIsFilled = true;
  }

  // conset
  if (conset.querySelector(".box").classList.contains("checked")) {
    consetError.classList.add("scale");
    consetIsChecked = true;
  } else {
    consetError.classList.remove("scale");
    consetIsChecked = false;
  }

  // all correct and filled.
  if (
    fnameIsFilled &&
    lnameIsFilled &&
    emailIsFilled &&
    queriesIsSelected &&
    msgIsFilled &&
    consetIsChecked
  ) {
    setTimeout(() => {
      form.classList.add("scale");
    }, 1000);

    setTimeout(() => {
      success.classList.remove("scale");
    }, 2000);

    setTimeout(() => {
      location.reload();
    }, 6000);
  }
});

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

conset.querySelector(".box").addEventListener("click", function () {
  this.classList.toggle("checked");
});

/*
setTimeout(() => {
    form.classList.add("scale");
  }, 2000);

  setTimeout(() => {
    success.classList.remove("scale");
  }, 2500);

  setTimeout(() => {
    location.reload();
  }, 7500);
  */
