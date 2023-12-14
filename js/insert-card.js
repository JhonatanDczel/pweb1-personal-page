function createCard(card) {
  let name = card.name;
  let link = card.link;
  let descriptionProject = card.description;
  let img = card.img;
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

  var linkGithub = document.createElement("a");
  linkGithub.href = link;
  var githubLogo = document.createElement("img");
  githubLogo.src = "./img/github.svg";
  githubLogo.alt = "logo github";
  linkGithub.appendChild(githubLogo);

  var description = document.createElement("p");
  description.classList.add("project-description");
  description.textContent = descriptionProject;

  projectInfo.appendChild(title);
  projectInfo.appendChild(linkGithub);
  projectInfo.appendChild(description);

  newCard.appendChild(projectImage);
  newCard.appendChild(projectInfo);

  var projectsContainer = document.querySelector(".projects-container");
  projectsContainer.appendChild(newCard);
}

const sorting = {
  name: "Sorting Algorithms",
  link: "https://github.com/JhonatanDczel/FP2-sorting-and-search-pr-01",
  img: "sorting",
  description: "Proyecto para el curso Fundamentos de Programacion II, hace una comparación de rendimientos entre algoritmos de ordenamiento y búsqueda. Se usó Java, GNU Plot y bash."
};

const library = {
  name: "Library App",
  link: "https://github.com/JhonatanDczel/library-app",
  img: "library-app",
  description: "Una pagina que gestiona los libros que leiste o que leerás. Hecha para practicar la programación orientada a objetos en JavaScript, como parte de mi aprendizaje autodidacta."
};

const admin = {
  name: "Admin Dashboard",
  link: "https://github.com/JhonatanDczel/admin-dashboard",
  img: "admin-dashboard",
  description: "Interfaz de un administrador de entradas. Hecho para practicar CSS grid."
};

const calculator = {
  name: "Calculator",
  link: "https://github.com/JhonatanDczel/calculator?tab=readme-ov-file",
  img: "calculator",
  description: "Calculadora hecha para poner en práctica el manejo del DOM en JavaScript, como parte de mi aprendizaje autodidacta."
};


createCard(calculator);
createCard(sorting);
createCard(library);
createCard(admin);

