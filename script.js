// شمارش بازدید (بدون خطا در GitHub Pages)
let views = localStorage.getItem("views");
views = views ? Number(views) + 1 : 1;
localStorage.setItem("views", views);
document.getElementById("views").innerText = views;

// کپی IP
function copyIP() {
  navigator.clipboard.writeText("5.57.35.73:7777");
  alert("IP سرور کپی شد");
}

// دارک مود
function toggleMode() {
  document.body.classList.toggle("dark");
}
