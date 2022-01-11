"use strict";
const container = document.querySelector(".container");
const panels = document.querySelectorAll(".panel");

// // Remove active classes
// const removeActiveClasses = function () {
//   panels.forEach((panel) => {
//     panel.classList.remove("active");
//   });
// };

// panels.forEach((panel) => {
//   panel.addEventListener("click", () => {
//     removeActiveClasses();
//     panel.classList.add("active");
//   });
// });

container.addEventListener("click", (e) => {
  const clicked = e.target.closest(".panel");

  if (!clicked) return;
  panels.forEach((panel) => panel.classList.remove("active"));

  clicked.classList.add("active");
});
