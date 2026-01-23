// =====================
// DAFTAR AKUN
// =====================
const accounts = [
  {u:"bagaz", p:"z"},
  {u:"admin2", p:"red002"},
  {u:"admin3", p:"red003"},
  {u:"admin4", p:"red004"},
  {u:"admin5", p:"red005"},
  {u:"admin6", p:"red006"}
];

// =====================
// LOGIN
// =====================
function login(){
  const u = document.getElementById("username").value.trim();
  const p = document.getElementById("password").value.trim();
  const error = document.getElementById("error");
  const popup = document.getElementById("popup");

  error.innerText = "";
  popup.style.display = "flex";

  setTimeout(()=>{
    const ok = accounts.find(a => a.u === u && a.p === p);

    if(ok){
      localStorage.setItem("login","yes");
      localStorage.setItem("user", u);
      location.href = "dashboard.html";
    }else{
      popup.style.display = "none";
      error.innerText = "Username atau password salah";
      shakeError();
    }
  }, 900);
}

// =====================
// SHAKE ERROR
// =====================
function shakeError(){
  const card = document.getElementById("loginCard");
  card.classList.remove("shake");
  void card.offsetWidth;
  card.classList.add("shake");
}

// =====================
// ENTER = LOGIN
// =====================
document.addEventListener("keydown", e=>{
  if(e.key === "Enter") login();
});

// =====================
// PROTEKSI DASHBOARD
// =====================
if(location.pathname.includes("dashboard.html")){
  if(!localStorage.getItem("login")){
    location.href="index.html";
  }
}