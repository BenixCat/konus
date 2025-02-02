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
