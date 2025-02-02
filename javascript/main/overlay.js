// Sayfa yüklendiğinde çalışacak fonksiyon
window.addEventListener("load", function () {
  const alreadyVisited = localStorage.getItem("visited");
  const overlay = document.getElementById("overlay");

  if (!alreadyVisited) {
    document.body.classList.add("no-scroll");
    overlay.classList.remove("d-none"); // d-none'ı kaldırarak görünüyor yap
  } else {
    overlay.classList.add("d-none");
  }

  const devamEtBtn = document.getElementById("devamEtBtn");
  devamEtBtn.addEventListener("click", function () {
    localStorage.setItem("visited", "true");
    overlay.classList.add("d-none");
    document.body.classList.remove("no-scroll");
    window.location.href = "pages/first-time-event/index.html";
  });
});
