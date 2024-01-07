fetch("http://localhost:3000/products")
  .then((response) => response.json())
  .then((json) => renderData(json));

const list = document.querySelector(".hero__cards");

function renderData(data) {
  if (data) {
    data.forEach((item) => {
      const heroCard = document.createElement('div');
      heroCard.classList.add('hero__card');
      heroCard.innerHTML = `
        <img src=${item.img} alt="Product" width="288" height="320">
        <img src="./img/icons/stars.svg" alt="Stars" width="104" height="16">
        <p>${item.title}</p>
        <h4>${item.newPrice}$<span>  ${item.oldprice}$</span></h4>
      `;

      heroCard.addEventListener("click", () => {
        window.location.href = `about.html?id=${item.id}`;
      });

      list.appendChild(heroCard);
    });
  }
}
function checkUser() {
  const loginData = JSON.parse(localStorage.getItem("loginData"));
  if (!loginData) {
    window.location.href = "login.html";
  }
}
checkUser();

function logoutUser() {
  const checkConfirm = confirm("Are you sure you want to log out?");
  if (checkConfirm) {
    localStorage.removeItem("loginData");
    checkUser();
  }
}
document.getElementById("logout-btn").addEventListener("click", logoutUser);

const item = document.getElementById("item");
item.addEventListener("click", () => {
  window.location.href = "about.html";
});
