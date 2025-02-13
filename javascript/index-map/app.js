// ID'si "viz1738063272277" olan <div> elementini seçiyoruz
var divElement = document.getElementById("viz1738063272277");

// Seçilen <div> içindeki ilk <object> elementini alıyoruz
var vizElement = divElement.getElementsByTagName("object")[0];

// Ekran genişliğine göre <object> elementinin boyutlarını ayarlıyoruz
if (divElement.offsetWidth > 500) {
  // Eğer genişlik 500px'den büyükse, sabit 1366x727 boyutlarını kullan
  vizElement.style.width = "1366px";
  vizElement.style.height = "727px";
} else {
  // Eğer genişlik 500px'den küçükse, genişliği %100 yap
  vizElement.style.width = "100%";
  // Yüksekliği dinamik olarak belirle (1.77 oranında)
  vizElement.style.height = divElement.offsetWidth * 1.77 + "px";
}

// Tableau API'nin JavaScript dosyasını dinamik olarak ekliyoruz
var scriptElement = document.createElement("script");
scriptElement.src = "https://public.tableau.com/javascripts/api/viz_v1.js";

// Script etiketini <object> elementinin öncesine ekliyoruz
vizElement.parentNode.insertBefore(scriptElement, vizElement);
