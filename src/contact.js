import Map from './map.png';

export function showContact() {
  const MAIN = document.querySelector("main");

  const MAP = document.createElement("img");
  MAP.id = "map";
  MAP.src = Map;
  MAP.alt = "Map showing location of Cuddle Bugs";

  const ADDRESS = document.createElement("p");
  ADDRESS.textContent = "W3723 Reineking Ct, Plymouth, WI 53073";

  const PHONE = document.createElement("p");
  PHONE.textContent = "Call: (920) 565-2114";

  const EMAIL = document.createElement("p");
  EMAIL.textContent = "Email: cuddlebugschildcare@tds.net";

  MAIN.appendChild(MAP);
  MAIN.appendChild(ADDRESS);
  MAIN.appendChild(PHONE);
  MAIN.appendChild(EMAIL);
}