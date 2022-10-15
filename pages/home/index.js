// ---------------------------------> PEGANDO ELEMENTOS HTML
// const inputSearch = document.querySelector("#searchUser");

// async function getGitAPI(baseUrl) {
//   const data = await fetch(baseUrl);
//   const dataJson = await data.json();

//   return dataJson;
// }

// async function getAUser() {
//   const baseUrl = `https://api.github.com/users/${inputSearch.value}`;
//   const valueSearch = await getGitAPI(baseUrl);
//   console.log(valueSearch);
// }
// getAUser();

function next() {
  const button = document.querySelector(".button-profile");

  button.addEventListener("click", () => {
    window.location.replace("pages/profile/index.html");
  });
}
next();

function search() {
  const button = document.querySelector(".button-profile");

  button.addEventListener("click", () => {
    button.innerHTML = "";

    const img = document.createElement("img");
    img.src = "/assets/spinner.svg";
    img.alt = "spinner";
    img.classList.add("loading");

    button.append(img);
  });
}
search();
