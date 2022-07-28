export function showAbout() {
  const MAIN = document.querySelector('main');

  const INFO = document.createElement("p");
  INFO.id = "info";
  INFO.textContent = "We are a licensed child care provider that offers care from 6 weeks old through 12 years old."

  MAIN.appendChild(INFO);
}