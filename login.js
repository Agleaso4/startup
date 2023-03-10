function login() {
    const nameEl = document.querySelector("#Name");
    localStorage.setItem("userName", nameEl.value);
    window.location.href = "landscaper.html";
}