// Sayaç için başlangıç tarihi
const startDate = new Date("2025-01-29T01:14:41"); // Başlangıç tarihi (örnek: 1 Ocak 2025)

// Sayaç güncelleme fonksiyonu
function updateCounter() {
  const now = new Date(); // Şu anki tarih ve saat
  const elapsedTime = now - startDate; // Geçen süre (milisaniye cinsinden)

  // Milisaniyeleri gün, saat, dakika ve saniyeye çevirme
  const days = Math.floor(elapsedTime / (1000 * 60 * 60 * 24));
  const hours = Math.floor((elapsedTime / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
  const seconds = Math.floor((elapsedTime / 1000) % 60);

  // Sonucu ekranda gösterme
  document.getElementById(
    "timeElapsed"
  ).textContent = `${days} gün, ${hours} saat, ${minutes} dakika, ${seconds} saniye geçti.`;
}

// Her saniyede bir sayaç güncellemesi
setInterval(updateCounter, 1000);

// Sayfa yüklendiğinde ilk değer için fonksiyonu çağırma
updateCounter();
