document.addEventListener("DOMContentLoaded", function () {
  const donationSlider = document.getElementById("donationSlider");
  const currentValue = document.querySelector(".current-value");
  const educationImpact = document.getElementById("educationImpact");
  const medicalImpact = document.getElementById("medicalImpact");
  const shelterImpact = document.getElementById("shelterImpact");

  function updateImpact(value) {
    const multiplier = value / 25;
    currentValue.textContent = `₺${value}`;
    educationImpact.textContent = Math.round(25 * multiplier);
    medicalImpact.textContent = Math.round(10 * multiplier);
    shelterImpact.textContent = Math.round(5 * multiplier);
  }

  donationSlider.addEventListener("input", function () {
    updateImpact(this.value);
  });
});

// Sayfa yüklendiğinde çalışacak fonksiyon
window.addEventListener("load", function () {
  // localStorage içinde "visited" değerini kontrol edelim
  const alreadyVisited = localStorage.getItem("visited");

  // Eğer daha önce ziyaret edilmemişse (yoksa), kaplamayı göster ve scroll'u engelle
  if (!alreadyVisited) {
    document.body.classList.add("no-scroll");
    document.getElementById("overlay").style.display = "flex";
  } else {
    // Ziyaret edilmişse kaplamayı hiç göstermeyelim
    document.getElementById("overlay").style.display = "none";
  }

  // "Devam" butonuna tıklanınca yapılacaklar
  const devamEtBtn = document.getElementById("devamEtBtn");
  devamEtBtn.addEventListener("click", function () {
    // localStorage'a "visited" değerini true olarak ayarla
    localStorage.setItem("visited", true);
    // Kaplamayı gizle
    document.getElementById("overlay").style.display = "none";
    // Sayfayı kaydırmayı yeniden aktif et
    document.body.classList.remove("no-scroll");
    // İstediğiniz sayfaya yönlendirin
    window.location.href =
      "https://www.konus.org/pages/first-time-event/index.html";
  });
});
