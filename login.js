function login() {
    const nameEl = document.querySelector("#name");
    localStorage.setItem("userName", nameEl.value);
    window.location.href = "landscaper.html";
}

class landcaper {
    constructor() {
        const playerNameEl = document.querySelector('.user-name');
        playerNameEl.textContent = this.getPlayerName();
    }
    getPlayerName() {
        return localStorage.getItem('userName') ?? 'Mystery player';
      }
}

const landcaper = new landcaper();