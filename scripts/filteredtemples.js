const temples = [
  {
    templeName: "Rome Italy Temple",
    location: "Rome, Italy",
    dedicated: "2022, March, 10",
    area: 22500,
    imageUrl:
    "https://churchofjesuschrist.org/imgs/60ecad34b8ccba920297633d3f3b4763a7785667/full/1600%2C/0/default"
  },
  {
    templeName: "Brazil São Paulo Temple",
    location: "São Paulo, Brazil",
    dedicated: "1978, October, 30",
    area: 22500,
    imageUrl:
    "https://www.churchofjesuschrist.org/imgs/43bc3d5ccf08d18c729b6b64777207cf5b102ae8/full/1600%2C/0/default"
  },
  {
    templeName: "Brisbane Australia Temple",
    location: "Brsibane, Australia",
    dedicated: "2005, August, 7",
    area: 22500,
    imageUrl:
    "https://www.churchofjesuschrist.org/imgs/1a533d9a3023d6579bf07948e26e0ee6a031c9d9/full/1600%2C/0/default"
  },
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  // Add more temple objects here...
  //Here is one resource for temple data: ChurchofJesusChrist

];

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

// Hamburger menu
const menuButton = document.getElementById("menu");
const navMenu = document.getElementById("navMenu");

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
