function createCard(name, link, descriptionProject, img) {
  var newCard = document.createElement("div");
  newCard.classList.add("project-card");

  var projectImage = document.createElement("div");
  projectImage.classList.add("project-image");
  var image = document.createElement("img");
  image.src = `./img/projects/${img}.png`;
  image.alt = "imagen nuevo proyecto";
  projectImage.appendChild(image);

  var projectInfo = document.createElement("div");
  projectInfo.classList.add("project-card-info");
  var title = document.createElement("h3");
  title.classList.add("project-title");
  title.textContent = name;
  var githubLogo = document.createElement("img");
  githubLogo.src = "./img/github.svg";
  githubLogo.alt = "logo github";
  var description = document.createElement("p");
  description.classList.add("project-description");
  description.textContent = descriptionProject;

  projectInfo.appendChild(title);
  projectInfo.appendChild(githubLogo);
  projectInfo.appendChild(description);

  newCard.appendChild(projectImage);
  newCard.appendChild(projectInfo);

  var projectsContainer = document.querySelector(".projects-container");
  projectsContainer.appendChild(newCard);
}

createCard("Calculator", "https://github.com/JhonatanDczel/calculator?tab=readme-ov-file", "Calculadora hecha para poner en práctica mis conocimientos principiantes de JavaScript, como parte de mi aprendizaje autodidacta.", "calculator");
createCard("Calculator", "#", "Some description", "calculator");
createCard("Calculator", "#", "Some description", "calculator");

