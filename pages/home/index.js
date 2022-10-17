// ---------------------------------> PEGANDO ELEMENTOS HTML
const url = `https://api.github.com/`;
const inputSearch = document.querySelector(".input-search");
const buttonSearch = document.querySelector(".button-profile");

console.log(inputSearch.value);

// ---------------------------------> PEGANDO DADOS DA API
async function getAPIGit() {
  const response = await fetch(`${url}users/${inputSearch.value}`);

  console.log(response);

  const data = await response.json();

  console.log(data);

  if (data.message == "Not Found") {
    setTimeout(() => {
      const msgError = document.querySelector(".notFound");
      msgError.classList = "notFoundError";
      inputSearch.value = "";
      buttonSearch.innerHTML = "";
      buttonSearch.innerText = "Buscar na API";
    }, 2000);
  } else {
    setTimeout(() => {
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

// ---------------------------------> ADICIONANDO USUARIOS RECENTE AO LOCALSTORAGE

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
