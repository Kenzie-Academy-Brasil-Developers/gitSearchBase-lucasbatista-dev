// ---------------------------------> PEGANDO ELEMENTOS HTML
const url = `https://api.github.com/`;
const inputSearch = document.querySelector(".input-search");
const buttonSearch = document.querySelector(".button-profile");
const msgError = document.querySelector(".notFound");

// ---------------------------------> Ativando e desativando botão de pesquisa

inputSearch.addEventListener("input", () => {
  msgError.classList = "notFound";
  buttonSearch.disabled = false;
  buttonSearch.style.color = "var(--color-grey-7)";
  buttonSearch.style.background = "var(--color-brand-2)";
  if (inputSearch.value.length == 0) {
    buttonSearch.disabled = true;
    buttonSearch.style.background = "rgba(214, 51, 108, 0.4)";
    buttonSearch.style.color = "rgba(255, 255, 255, 0.35);";
  }
});

console.log(inputSearch.value);

// ---------------------------------> Usuarios recentes
const ul = document.querySelector(".recentlyUserList");

function createRecentUser(index, arrayRecently) {
  ul.insertAdjacentHTML(
    "afterbegin",
    `
      <li class="recentlyUsers">
         <img
         id="${index}"
         class="recentlyImg"
         src="${arrayRecently[index].urlImg}"
         alt=""/>
         <button class="buttonAccess">
         <a href="/pages/profile/index.html?user=${arrayRecently[index].login}">Acessar este perfil</a>
       </button>
      </li>
  
  `
  );
}

function setLocalStorage() {
  let arrayRecently = [];
  if (localStorage.recentUsers) {
  } else {
    localStorage.recentUsers = JSON.stringify(arrayRecently);
  }
}
// ---------------------------------> PEGANDO DADOS DA API
async function getAPIGit() {
  const response = await fetch(`${url}users/${inputSearch.value}`);

  console.log(response);

  const data = await response.json();

  console.log(data);

  if (data.message == "Not Found") {
    setTimeout(() => {
      msgError.classList = "notFoundError";
      inputSearch.value = "";
      buttonSearch.innerHTML = "";
      buttonSearch.innerText = "Buscar na API";
      buttonSearch.disabled = true;
      buttonSearch.style.background = "rgba(214, 51, 108, 0.4)";
    }, 2000);
  } else {
    setTimeout(() => {
      setRecentUser(data.login, data.avatar_url);
      inputSearch.value = "";
      window.location.href = `../profile/index.html?user=${data.login}`;
    }, 1000);
  }
}
search();
// ---------------------------------> PEGANDO EVENTOS DE CLIQUE DE DIGITAÇÃO E JOGANDO PARA DENTRO DA URL
buttonSearch.addEventListener("click", (event) => {
  getAPIGit();
});

// ---------------------------------> Botão spinner

function search() {
  setTimeout(() => {
    const button = document.querySelector(".button-profile");

    button.addEventListener("click", () => {
      button.innerHTML = "";

      const img = document.createElement("img");
      img.src = "/assets/spinner.svg";
      img.alt = "spinner";
      img.classList.add("loading");

      button.append(img);
    });
  });
}

// --------------------------------->Adicionando  Usuarios recentes

function setListRecently() {
  let arrayRecently = JSON.parse(localStorage.recentUsers);
  arrayRecently.reverse();
  if (arrayRecently.length === 0) {
  } else if (arrayRecently.length < 3) {
    for (let index = 0; index < arrayRecently.length; index++) {
      createRecentUser(index, arrayRecently);
    }
  } else {
    for (let index = 0; index <= 2; index++) {
      createRecentUser(index, arrayRecently);
    }
  }
}

function setRecentUser(login, avatar) {
  let arrayRecently = JSON.parse(localStorage.recentUsers);
  arrayRecently.push({ login: login, urlImg: avatar });
  localStorage.recentUsers = JSON.stringify(arrayRecently);
}

setLocalStorage();
setListRecently();
