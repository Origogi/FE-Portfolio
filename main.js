"use strict";

// Handle scrolling when tapping on the contact me
const contactBtn = document.querySelector(".home__contact");
contactBtn.addEventListener("click", () => {
  console.log("button click");
  const scrollTo = document.querySelector("#contact");
  scrollTo.scrollIntoView({ behavior: "smooth" });
});
