const BASE_URL = 
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
  
  const item = document.getElementById("item")
  item.addEventListener("click",()=>{
    window.location.href = "about.html"
    
  })