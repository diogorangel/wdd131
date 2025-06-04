// Date copyright
const yearSpan = document.getElementById("year");
const modified = document.getElementById("lastModified");

yearSpan.textContent = new Date().getFullYear();
modified.textContent = `Last Modification: ${document.lastModified}`;

// Hamburger menu
const menuButton = document.getElementById("menu");
const navMenu = document.getElementById("navMenu");

menuButton.addEventListener("click", () => {
  navMenu.classList.toggle("open");
  menuButton.textContent = navMenu.classList.contains("open") ? '✖' : '☰';
});

document.getElementById("menu").addEventListener("click", () => {
  document.querySelector(".navigation").classList.toggle("show");

  // Alterna ícone entre ☰ e ✖
  const icon = document.getElementById("menu");
  icon.textContent = icon.textContent === "☰" ? "✖" : "☰";
});

document.addEventListener("DOMContentLoaded", () => {
  const templeContainer = document.getElementById("temple-cards-container"); // Make sure you have a container with this ID in your HTML
  const navLinks = document.querySelectorAll("nav a");

  function createTempleCard(temple) {
    const card = document.createElement("div");
    card.classList.add("temple-card");

    const name = document.createElement("h2");
    name.textContent = temple.templeName;

    const location = document.createElement("p");
    location.textContent = `Location: ${temple.location}`;

    const dedicated = document.createElement("p");
    dedicated.textContent = `Dedicated: ${temple.dedicated}`;

    const area = document.createElement("p");
    area.textContent = `Area: ${temple.area} sq ft`;

    const img = document.createElement("img");
    img.src = temple.imageUrl;
    img.alt = temple.templeName;
    img.loading = "lazy"; // Native lazy loading

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedicated);
    card.appendChild(area);
    card.appendChild(img);

    return card;
  }

  function displayTemples(filteredTemples) {
    templeContainer.innerHTML = ""; // Clear existing cards
    filteredTemples.forEach((temple) => {
      templeContainer.appendChild(createTempleCard(temple));
    });
  }

  // Initial display of all temples
  displayTemples(temples);

  // Itera sobre cada link de navegação encontrado
  navLinks.forEach((link) => {
    // Adiciona um "ouvinte de evento" de clique para cada link
    link.addEventListener("click", (event) => {
      event.preventDefault(); // Impede o comportamento padrão do link (recarregar a página)
      
      // Obtém o valor do atributo 'data-filter' do link clicado
      const filter = event.target.dataset.filter; 
      let filteredTemples = [];

      // Usa o valor do 'filter' para decidir qual filtro aplicar
      switch (filter) {
        case "old":
          filteredTemples = temples.filter(
            (temple) => new Date(temple.dedicated).getFullYear() < 1900
          );
          break;
        case "new":
          filteredTemples = temples.filter(
            (temple) => new Date(temple.dedicated).getFullYear() > 2000
          );
          break;
        case "large":
          filteredTemples = temples.filter((temple) => temple.area > 90000);
          break;
        case "small":
          filteredTemples = temples.filter((temple) => temple.area < 10000);
          break;
        case "home":
        default:
          filteredTemples = temples;
          break;
      }
      displayTemples(filteredTemples);
    });
  });

  // Footer copyright year and last modified
  const currentYear = new Date().getFullYear();
  document.getElementById("currentyear").textContent = currentYear; // Assuming an element with id="currentyear"
  document.getElementById("lastmodified").textContent = `Last Modified: ${document.lastModified}`; // Assuming an element with id="lastmodified"
});

// Date copyright
const yearSpan = document.getElementById("year");
const modified = document.getElementById("lastModified");

yearSpan.textContent = new Date().getFullYear();
modified.textContent = `Last Modification: ${document.lastModified}`;

menuButton.addEventListener("click", () => {
  navMenu.classList.toggle("open");
  menuButton.textContent = navMenu.classList.contains("open") ? '✖' : '☰';
});

document.getElementById("menu").addEventListener("click", () => {
  document.querySelector(".navigation").classList.toggle("show");

  //Change the ícon among ☰ e ✖
  const icon = document.getElementById("menu");
  icon.textContent = icon.textContent === "☰" ? "✖" : "☰";
});
