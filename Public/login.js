(async () => {
    let authenticated = false;
    const userName = localStorage.getItem('userName');
    if (userName) {
      const nameEl = document.querySelector('#userName');
      nameEl.value = userName;
      const user = await getUser(nameEl.value);
      authenticated = user?.authenticated;
    }
  
    if (authenticated) {
      document.querySelector('#userName').textContent = userName;
    } else {
    }
  })();

  async function loginLandscaper() {
    loginOrCreateLandscaper(`/api/auth/login`);
  }
  
  async function createLandscaper() {
    loginOrCreateLandscaper(`/api/auth/create`);
  }

  async function loginCustomer() {
    loginOrCreateCustomer(`/api/auth/login`);
  }
  
  async function createCustomer() {
    loginOrCreateCustomer(`/api/auth/create`);
  }
  
  async function loginOrCreateLandscaper(endpoint) {
    const userName = document.querySelector('#userName')?.value;
    const password = document.querySelector('#userPassword')?.value;
    const response = await fetch(endpoint, {
      method: 'post',
      body: JSON.stringify({ email: userName, password: password }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const body = await response.json();
  
    if (response?.status === 200) {
      localStorage.setItem('userName', userName);
      window.location.href = 'landscaper.html';
    } else {
      let text;
      if(confirm("Username or Password incorrect, or not yet created") == true) {
        text = "Create one now!";
      } else {
        text = "You need to type it in correctly";
      }
    }
  }

  async function loginOrCreateCustomer(endpoint) {
    const userName = document.querySelector('#userName')?.value;
    const password = document.querySelector('#userPassword')?.value;
    const response = await fetch(endpoint, {
      method: 'post',
      body: JSON.stringify({ email: userName, password: password }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const body = await response.json();
  
    if (response?.status === 200) {
      localStorage.setItem('userName', userName);
      window.location.href = 'customer.html';
    } else {
      let text;
      if(confirm("Username or Password incorrect, or not yet created") == true) {
        text = "Create one now!";
      } else {
        text = "You need to type it in correctly";
      }
    }
  }

  async function getUser(email) {
    // See if we have a user with the given email.
    const response = await fetch(`/api/user/${email}`);
    if (response.status === 200) {
      return response.json();
    }
  
    return null;
  }
  
  function setDisplay(controlId, display) {
    const playControlEl = document.querySelector(`#${controlId}`);
    if (playControlEl) {
      playControlEl.style.display = display;
    }
  }
  