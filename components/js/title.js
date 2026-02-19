document.addEventListener("DOMContentLoaded", () => {
  const food = "FOOD";
  const guid = "GUID";

  const foodEl = document.getElementById("food");
  const guidEl = document.getElementById("guid");
  const dotEl = document.getElementById("dot");

  let i = 0;
  const speed = 65;

  function type() {
    if (i < food.length) {
      foodEl.textContent += food[i];
    } else if (i - food.length < guid.length) {
      guidEl.textContent += guid[i - food.length];
    } else {
      // texte terminé -> on affiche le point et on arrête
      dotEl.classList.add("show");
      return;
    }

    i++;
    setTimeout(type, speed);
  }

  type();
});
