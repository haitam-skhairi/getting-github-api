/* Main variables */

let input = document.querySelector(".head input"),
  getRepo = document.querySelector(".head .get-repo"),
  repositoriesInfo = document.querySelector(".repositories-info");

getRepo.onclick = function () {
  if (input.value == "") {
    repositoriesInfo.innerHTML = `<div class="worning">Please write your username!</div>`;
    setTimeout(() => {
      repositoriesInfo.innerHTML = "";
    }, 2000);
  } else if (input.value == "haitam-skhairi") {
    fetch("https://api.github.com/users/haitam-skhairi/repos")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        data.forEach((el) => {
          let mainDiv = document.createElement("div");

          let name = document.createElement("span");
          let mainDivText = document.createTextNode(`Repositories: ${el.name}`);
          // Append Main Div
          mainDiv.appendChild(mainDivText);
          repositoriesInfo.appendChild(mainDiv);
        });
      });
  } else {
    repositoriesInfo.innerHTML = `<div class="worning">Username not exist!</div>`;
    setTimeout(() => {
      repositoriesInfo.innerHTML = "";
    }, 2000);
  }
};
