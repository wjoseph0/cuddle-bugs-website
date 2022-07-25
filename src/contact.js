module.exports = setContactPage;

function setContactPage() {
  const MAIN = document.querySelector("main");

  //Remove all children from MAIN
  while (MAIN.firstChild) {
    MAIN.removeChild(MAIN.firstChild);
  }

  const MAP = document.createElement("img");
  MAP.id = "map";
  MAP.src = "./assets/map.png";
  MAP.alt = "Map showing location of Cuddle Bugs";

  const ADDRESS = document.createElement("p");
  ADDRESS.textContent = "W3723 Reineking Ct, Plymouth, WI 53073";

  const PHONE = document.createElement("p");
  PHONE.textContent = "Call: (920) 565-2114";

  const EMAIL = document.createElement("p");
  EMAIL.textContent = "Email: cuddlebugschildcare@tds.net";

  const RETURN_HOME = document.createElement("button");
  RETURN_HOME.id = "return";
  RETURN_HOME.textContent = "Go back";

  MAIN.appendChild(MAP);
  MAIN.appendChild(ADDRESS);
  MAIN.appendChild(PHONE);
  MAIN.appendChild(EMAIL);
  MAIN.appendChild(RETURN_HOME);
}