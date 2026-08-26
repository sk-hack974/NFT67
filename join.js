const joinBtn = document.getElementById("joinBtn");
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("closeBtn");
const password = document.getElementById("password");
const showPassword = document.getElementById("showPassword");
// Відкрити вікно
joinBtn.addEventListener("click", function () {
    modal.style.display = "flex";
});
// Закрити хрестиком
closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
});
// Закрити при натисканні на фон
modal.addEventListener("click", function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
// Показати / сховати пароль
showPassword.addEventListener("click", function () {
if (password.type === "password") {
    password.type = "text";
    showPassword.textContent = "◉";
} else {
    password.type = "password";
    showPassword.textContent = "○";
}
});
