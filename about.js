let btn = document.getElementById("btn");
let card = document.getElementById("card");
let div = document.getElementById("div2");

btn.addEventListener("click", () => {
  div.style.display = "none";
  card.style.display = "block";
  card.style.margin = "50px auto 0 auto";
});

const decBtn = document.getElementById("btn-dec");
const incBtn = document.getElementById("btn-Add");
let num = document.getElementById("span1");
let newNum = 1;
incBtn.addEventListener("click", () => {
  newNum += 1;
  num.textContent = newNum;
});
decBtn.addEventListener("click", () => {
  if (newNum > 1) {
    newNum -= 1;
    num.textContent = newNum;
  }
});
