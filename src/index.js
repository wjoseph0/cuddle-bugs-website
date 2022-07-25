import buildWebsite from "./init";
import setContactPage from "./contact";

buildWebsite();

const CONTACT_BUTTON = document.getElementById("contact");
CONTACT_BUTTON.addEventListener("click", () => {
  setContactPage();

  const RETURN_HOME = document.getElementById("return");
  console.log(RETURN_HOME);
  RETURN_HOME.addEventListener("click", () => {
    document.location.reload();
  })
});
