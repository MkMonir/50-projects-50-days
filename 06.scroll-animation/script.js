"use strict";

const boxes = document.querySelectorAll(".box");

const checkBoxex = function () {
  const tiggerBottom = (window.innerHeight / 5) * 4;

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < tiggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
};

checkBoxex();
window.addEventListener("scroll", checkBoxex);
