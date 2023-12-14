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
  image.id = img;
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
  linkGithub.target = '_blank';
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


const episunsa = {
  name: "Leo The Turtle",
  link: "https://github.com/JhonatanDczel/IS-fundamentos-programacion-1/tree/main/LeoTheTurtle",
  img: "episunsa",
  description: "Graficadora de imágenes usando Turtle en Java."
};


const rps = {
  name: "Rock Paper Scissors Game",
  link: "https://github.com/JhonatanDczel/rock-paper-scissors",
  img: "rps",
  description: "Juego de Piedra Papel o Tijera, hecho con JavaScript HTML y CSS."
};

const signup = {
  name: "Signup Form",
  link: "https://github.com/JhonatanDczel/sign-up-form",
  img: "sign-up",
  description: "Pagina de Inicio de Sesión, hecha para practicar CSS y validacion de datos con JavaScript usando Expresiones Regulares"
};

const paz = {
  name: "Salve Paz",
  link: "https://github.com/JhonatanDczel/salve-paz",
  img: "paz",
  description: "Nació como un proyecto de colaboración entre compañeros del primer semestre, en muestra de gratitud a las enseñanzas impartidas por el profesor Paz."
};

createCard(calculator);
createCard(sorting);
createCard(episunsa);
createCard(rps);
createCard(paz);
createCard(signup);
createCard(library);
createCard(admin);

document.getElementById("paz").src = "./img/projects/paz.gif";

