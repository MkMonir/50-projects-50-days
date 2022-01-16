"use strict";

const search = document.querySelector(".search");
const input = document.querySelector(".input");
const btn = document.querySelector(".btn");

btn.addEventListener("click", (e) => {
  e.preventDefault();

  search.classList.toggle("active");
  input.focus();
});
