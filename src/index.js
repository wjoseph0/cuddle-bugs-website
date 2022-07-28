import showHome, { buildWebsite } from "./init";
import { showAbout } from "./about";
import { showContact } from "./contact";
import './reset.css';
import './style.css';

function clearMain() {
  const MAIN = document.querySelector('main');
  while (MAIN.firstChild) {
    MAIN.removeChild(MAIN.firstChild);
  }
}

function clearNavbarFocus() {
  const NAV_BUTTONS = document.querySelectorAll('button');
  NAV_BUTTONS.forEach(button => {
    button.style.backgroundColor = "#90ee90";
  });
}

function applyFocus(button) {
  button.style.backgroundColor = "#7cd47c";
}

buildWebsite();

const HOME_BUTTON = document.getElementById("homeButton");
const ABOUT_BUTTON = document.getElementById("aboutButton");
const CONTACT_BUTTON = document.getElementById("contactButton");

applyFocus(HOME_BUTTON);

HOME_BUTTON.addEventListener("click", () => {
  clearMain();
  clearNavbarFocus();
  applyFocus(HOME_BUTTON);
  showHome();
});

ABOUT_BUTTON.addEventListener("click", () => {
  clearMain();
  clearNavbarFocus();
  applyFocus(ABOUT_BUTTON);
  showAbout();
});

CONTACT_BUTTON.addEventListener("click", () => {
  clearMain();
  clearNavbarFocus();
  applyFocus(CONTACT_BUTTON);
  showContact();
});