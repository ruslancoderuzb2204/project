const form = document.getElementById("form");

function checkLoginStatus() {
  const loginData = JSON.parse(localStorage.getItem("loginData"));
  if (loginData) {
    window.location.href = "main.html";
  }
}

function loginUser(email, password) {
  localStorage.setItem("loginData", JSON.stringify({ email, password }));
  form.reset();
  checkLoginStatus();
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    loginUser(email, password);
  });


checkLoginStatus();
