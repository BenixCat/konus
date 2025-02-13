// Sayfa tamamen yüklendiğinde çalışacak fonksiyon
window.addEventListener("load", function () {
  try {
    // Kullanıcının daha önce sayfayı ziyaret edip etmediğini kontrol et
    const alreadyVisited = localStorage.getItem("visited");
    const overlay = document.getElementById("overlay");
    const devamEtBtn = document.getElementById("devamEtBtn");

    // Eğer overlay veya buton bulunamazsa işlemi durdur
    if (!overlay || !devamEtBtn) {
      console.warn("Gerekli elementler bulunamadı!");
      return;
    }

    if (!alreadyVisited) {
      document.body.classList.add("no-scroll"); // Sayfayı kaydırmayı engelle
      overlay.classList.remove("d-none"); // Overlay'i görünür yap
    } else {
      overlay.classList.add("d-none"); // Daha önce ziyaret edildiyse overlay'i gizle
    }

    // "Devam Et" butonuna tıklanınca çalışacak fonksiyon
    devamEtBtn.addEventListener("click", function () {
      try {
        localStorage.setItem("visited", "true"); // Kullanıcının ziyaret ettiğini kaydet
      } catch (error) {
        console.error("localStorage kullanılamıyor:", error);
      }

      overlay.classList.add("d-none"); // Overlay'i gizle
      document.body.classList.remove("no-scroll"); // Kaydırmayı tekrar aktif et

      // Yeni sayfaya yönlendir
      setTimeout(() => {
        window.location.href = "pages/first-time-event/index.html";
      }, 300); // Küçük bir gecikme ile yönlendir
    });
  } catch (error) {
    console.error("Bir hata oluştu:", error);
  }
});
