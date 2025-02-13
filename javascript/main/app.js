document.addEventListener("DOMContentLoaded", function () {
  // Gerekli HTML elementlerini seçiyoruz
  const donationSlider = document.getElementById("donationSlider");
  const currentValue = document.querySelector(".current-value");
  const educationImpact = document.getElementById("educationImpact");
  const medicalImpact = document.getElementById("medicalImpact");
  const shelterImpact = document.getElementById("shelterImpact");

  // Eğer gerekli elementler yoksa fonksiyon çalıştırmayı iptal et
  if (
    !donationSlider ||
    !currentValue ||
    !educationImpact ||
    !medicalImpact ||
    !shelterImpact
  ) {
    console.warn("Bağış hesaplayıcı için gerekli elementler bulunamadı!");
    return;
  }

  // Etki hesaplama ve güncelleme fonksiyonu
  function updateImpact(value) {
    const scalingFactor = value / 25; // 25₺ üzerinden hesaplama yapılıyor
    currentValue.textContent = `₺${value}`; // Mevcut bağış miktarını göster

    // Eğitim, sağlık ve barınma etkilerini hesapla ve güncelle
    educationImpact.textContent = Math.round(25 * scalingFactor);
    medicalImpact.textContent = Math.round(10 * scalingFactor);
    shelterImpact.textContent = Math.round(5 * scalingFactor);
  }

  // Kaydırıcı değeri değiştiğinde etkiyi güncelle
  donationSlider.addEventListener("input", function () {
    updateImpact(Number(this.value)); // Değerin sayı olduğundan emin ol
  });

  // Sayfa yüklendiğinde varsayılan değerle başlat
  updateImpact(Number(donationSlider.value));
});
