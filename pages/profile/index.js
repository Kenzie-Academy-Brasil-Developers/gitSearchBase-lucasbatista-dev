// -------------> PEGAR ID DA URL
const urlSearchParams = new URLSearchParams(window.location.search);
const userName = urlSearchParams.get("user");

console.log(userName);

const url = `https://api.github.com/`;

const tagMain = document.querySelector(".containerMain");

// -------------> PEGANDO URL TRATADA E RENDERIZANDO HEADER DO PROFILE
async function getAndRenderHeader() {
  const response = await fetch(`${url}users/${userName}`);

  console.log(response);

  const data = await response.json();

  console.log(data);
  tagMain.insertAdjacentHTML(
    "afterbegin",
    `
  <header class="flex justify-between align-center m-top60">
  <div class="flex align-center gap20">
    <div
      style="
        background-image: url(${data.avatar_url});
      "
      class="container-img"
    ></div>
    <div class="gap15">
      <h2 class="header-user m-botton15">${data.name}</h2>
      <p class="header-about">${data.bio}</p>
    </div>
  </div>
  <div class="flex gap15">
     <button class="button-pink"><a id="sendEmail" href="${data.email}">Email</a></button>
    <button  class="button-grey"><a href="../home/index.html" id="changeUser">Trocar de usuário</a></button>
  </div>
</header>
  `
  );
}
getAndRenderHeader();

// -------------> PEGANDO URL TRATADA E RENDERIZANDO REPOSITORIES DO PROFILE
const ulRepos = document.querySelector("#listRepos");

async function getAndRenderRepository() {
  const response = await fetch(`${url}users/${userName}/repos`);

  //   console.log(response);

  const data = await response.json();

  //   console.log(data);
  data.forEach((repos) => {
    console.log(repos);
    ulRepos.insertAdjacentHTML(
      "afterbegin",
      `
    <li class="repository-item">
            <h2 class="repository-title">${repos.name}</h2>
            <p class="repository-description">
              ${repos.description}
            </p>
            <div class="flex gap20">
              <button class="button-repository">
                <a
                  href="${repos.html_url}"
                  target="_blank"
                  >Repositório</a
                >
              </button>
              <button class="button-repository">
                <a
                  href="${repos.homepage}"
                  target="_blank"
                  >Demo</a
                >
              </button>
            </div>
          </li>
    `
    );
  });
}
getAndRenderRepository();
