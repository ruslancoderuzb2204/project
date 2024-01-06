let btn = document.getElementById("btn");
let card = document.getElementById("card");
let div = document.getElementById("div2");

btn.addEventListener("click", () => {
  div.style.display = "none";
  card.style.display = "block";
  card.style.margin = "50px auto 0 auto";
});
