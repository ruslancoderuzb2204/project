let card = document.getElementById("card");
let div = document.getElementById("div2");
let btnClose = document.getElementById("btnClose");

btnClose.style.padding = "5px";
btnClose.addEventListener("click", () => {
  div.style.display = "block";
  card.style.display = "none";
});

document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("id");

  fetch(`http://localhost:3000/products/${productId}`)
    .then((response) => response.json())
    .then((json) => renderAbout(json));
});

const aboutCon = document.getElementById("container-about");

function renderAbout(data) {
  if (data) {
    // const btn = document.createElement("button");
    // btn.setAttribute("class", "btn");
    // btn.setAttribute("id", "btn");
    // btn.textContent = "Korzinka"
    // aboutCon.appendChild(btn);

    aboutCon.innerHTML = `
    <div class="about-img">
    <img width="450px" src=${data.img} alt="sad">
    </div>
    <div class="about__tittle">
    <h1>
    ${data.title}
    </h1>
    <p>
                            Замок дверной электронный Golden Soft GS-200Z-5 имеет роскошный глянцевый блеск, четкие
                            линии,
                            красивые формы.
                        </p>
                        <p>
                            Подходит для установки на деревянную/межкомнатную дверь.
                        </p>
                        <h4>
                            Цена
                        </h4>
                        <div class="h3">
                            <h3>
                                ${data.newPrice}
                            </h3>
                            <h4>
                            ${data.oldprice}
                                
                            </h4>
                            </div>
                            <button class="btn" id = "btn">КОРЗИНКА</button>
                    </div>
    `;
    const btn = aboutCon.querySelector("#btn");
    btn.addEventListener("click", () => {
      div.style.display = "none";
      card.style.display = "block";
      card.style.margin = "50px auto 0 auto";
      const col = document.querySelector(".col");
      col.innerHTML = `
      <div class="img">
      <img src=${data.img} alt="cardimg">
  </div>
  <div class="colTitle">
      <div class="dis">
          <div class="disTit">
              <p>${data.title}</p>
              <p>+ Подарок: <a href="#"> “Приложение к замкам Golden Service”</a></p>

          </div>
          <button class="btn2">
              Удалить
          </button>
      </div>
      <div class="dflex">
          <div class="addElement">
              <button type="submit" class="btn-" id="btn-dec">-</button>
              <div ><span id="span1">1</span></div>
              <button type="submit" class="btnAdd" id="btn-Add">+</button>
          </div>
          <p>${data.newPrice}$</p>
      </div>
  </div>
      `;
      const decBtn = col.querySelector("#btn-dec");
      const delBtn = col.querySelector(".btn2");
      delBtn.addEventListener("click", () => {
        div.style.display = "block";
        card.style.display = "none";
      });
      const incBtn = col.querySelector("#btn-Add");
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
    });
  }
}

renderAbout();
