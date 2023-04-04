function login() {
    const nameEl = document.querySelector("#customerName");
    localStorage.setItem("userName", nameEl.value);
    window.location.href = "landscaper.html";
}