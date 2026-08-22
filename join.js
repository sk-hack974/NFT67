const joinBtn = document.getElementById("joinBtn");
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("closeBtn");
// Відкрити вікно
joinBtn.addEventListener("click", function () {
    modal.style.display = "flex";
});
// Закрити вікно
closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
});
// Закрити при натисканні на фон
modal.addEventListener("click", function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
