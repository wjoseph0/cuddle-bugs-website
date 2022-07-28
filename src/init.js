import Logo from './logo.jpg';

function setHeader() {
  const HEADER = document.createElement("header");

  const TITLE = document.createElement('h1');
  TITLE.id = "title";
  TITLE.textContent = "Cuddle Bugs Child Care";

  const NAVBAR = document.createElement('div');
  NAVBAR.id = "navbar";

  const HOME_BUTTON = document.createElement("button");
  HOME_BUTTON.id = "homeButton";
  HOME_BUTTON.textContent = "Home";

  const ABOUT_BUTTON = document.createElement("button");
  ABOUT_BUTTON.id = "aboutButton";
  ABOUT_BUTTON.textContent = "About";

  const CONTACT_BUTTON = document.createElement("button");
  CONTACT_BUTTON.id = "contactButton";
  CONTACT_BUTTON.textContent = "Contact";

  NAVBAR.append(HOME_BUTTON, ABOUT_BUTTON, CONTACT_BUTTON);

  HEADER.appendChild(TITLE);
  HEADER.appendChild(NAVBAR);

  return HEADER;
}

export default function setMain() {
  let MAIN = document.createElement('main');

  if (document.querySelector('main')) {
    MAIN = document.querySelector('main');
  }

  const LOGO = document.createElement('img');
  LOGO.id = "logo";
  LOGO.src = Logo;
  LOGO.alt = "logo";

  const FB_PAGE = document.createElement('div');
  FB_PAGE.id = "FB_DIV";
  FB_PAGE.innerHTML = '<iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fcuddlebugschildcarecenter&tabs=timeline&width=500&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="500" height="500" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>'

  /* MAIN.appendChild(LOGO); */
  MAIN.appendChild(FB_PAGE);

  return MAIN
}

export function buildWebsite() {
  const BODY = document.querySelector('body');

  const CONTENT = document.createElement('div');
  CONTENT.id = "content";
  CONTENT.append(setHeader(), setMain());

  return BODY.appendChild(CONTENT);
}