module.exports = buildWebsite;

function setHeader() {
  const HEADER = document.createElement("header");
  const TITLE = document.createElement("h1");
  TITLE.id = "title";
  TITLE.textContent = "Cuddle Bugs Child Care";
  HEADER.appendChild(TITLE);

  return HEADER;
}

function setMain() {
  const MAIN = document.createElement("main");

  //Remove all children from MAIN
  while (MAIN.firstChild) {
    MAIN.removeChild(MAIN.firstChild);
  }

  const LOGO = document.createElement("img");
  LOGO.id = "logo";
  LOGO.src = "./assets/logo.jpg";
  LOGO.alt = "logo";

  const INFO = document.createElement("p");
  INFO.id = "info";
  INFO.textContent = "We are a licensed child care provider that offers care for 6 weeks old through 12 years old."

  const CONTACT_BUTTON = document.createElement("button");
  CONTACT_BUTTON.id = "contact";
  CONTACT_BUTTON.textContent = "Contact Us";

  MAIN.appendChild(LOGO);
  MAIN.appendChild(INFO);
  MAIN.appendChild(CONTACT_BUTTON);

  return MAIN;
}

function buildWebsite() {
  const CONTENT = document.getElementById("content");

  CONTENT.appendChild(setHeader());
  CONTENT.appendChild(setMain());
}