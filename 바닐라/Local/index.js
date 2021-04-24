// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>
const sel = document.querySelector("select");

const USER_LS = "contry";

function saveCounTry(text) {
  localStorage.setItem(USER_LS, text);
}

const displayCountry = () => {
  const currentContry = localStorage.getItem("USER_LS");
  sel.value = currentContry;
};

function handleChange(event) {
  event.preventDefault();
  const currentVale = sel.value;
  saveCounTry(currentVale);
}

function askContry() {
  sel.addEventListener("change", handleChange);
}

function loadCuntry() {
  displayCountry();
  askContry();
}

function init() {
  loadCuntry();
}

init();
