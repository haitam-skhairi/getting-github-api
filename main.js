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
  } else {
    fetch(`https://api.github.com/users/${input.value}/repos`)
      .then((response) => response.json())
      .then((data) => {
        data.forEach((el) => {
          let repo = document.createElement("div");
          repo.className = "repo";
          // Repo Name
          let repoName = document.createElement("span");
          let repoNameText = document.createTextNode(
            `Repositories: ${el.name}`
          );
          repoName.className = "repo-name";

          // Repo Info
          let repoInfo = document.createElement("div");
          repoInfo.className = "repo-info";
          let repoVisibility = document.createElement("span");
          repoVisibility.className = "repo-visibility";
          repoVisibility.innerHTML = el.visibility;
          let repoWatchers = document.createElement("span");
          repoWatchers.className = "repo-watchers";
          repoWatchers.innerHTML = `Watchers: ${el.watchers}`;

          // Append Main Div
          repo.appendChild(repoName);
          repoName.appendChild(repoNameText);
          repositoriesInfo.appendChild(repo);
          repo.appendChild(repoInfo);
          repoInfo.appendChild(repoVisibility);
          repoInfo.appendChild(repoWatchers);
        });
      });

    // Empty and focus in input
    input.value = "";
    input.focus();
  }
};
