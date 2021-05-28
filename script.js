"use strict";
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const buttonOpen = document.querySelector(".myButton");
const image = document.querySelector(".img-main");
//Random Number Fortune
const fortune = [
  "Number1: A beautiful, smart, and loving person will be coming into your life",
  "Number2: A dubious friend may be an enemy in camouflage.",
  "Number3: A faithful friend is a strong defense.",
  "Number4: A feather in the hand is better than a bird in the air.",
  "Number5: A fresh start will put you on your way.",
  "Number6: A friend asks only for your time not your money.",
  "Number7: A lifetime of happiness lies ahead of you.",
  "Number8: A light heart carries you through all the hard times.",
  "Number9: A smile is your personal welcome mat.",
  "Number10: Adventure can be real happiness.",
  "Number11: All the effort you are making will ultimately pay off.",
  "Number12: All the troubles you have will pass away very quickly.",
  "Number13: All will go well with your new project.",
  "Number14: All your hard work will soon pay off.",
  "Number15: Allow compassion to guide your decisions.",
  "Number16: An acquaintance of the past will affect you in the near future.",
  "Number17: An agreeable romance might begin to take on the appearance.",
  "Number18: An important person will offer you support.",
  "Number19: An inch of time is an inch of gold.",
  "Number20: Any decision you have to make tomorrow is a good decision.",
  "Number21: At the touch of love, everyone becomes a poet.",
  "Number22: Be careful or you could fall for some tricks today.",
  "Number23: Beauty in its various forms appeals to you.",
  "Number24: Because you demand more from yourself, others respect you deeply.",
  "Number25: Believe in yourself and others will too.",
  "Number26: Believe it can be done.",
];
//Open Random Fortune
const openFortune = function () {
  document.getElementById("result").innerHTML =
    fortune[Math.trunc(Math.random() * fortune.length)];
  $("img").fadeOut().fadeIn(3000);
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

//Close Fortune
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

buttonOpen.addEventListener("click", openFortune);

btnCloseModal.addEventListener("click", closeModal);

overlay.addEventListener("click", closeModal);

//Add keydown Escape to close random fortune
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
