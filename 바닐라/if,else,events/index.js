// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const body = document.querySelector("body");

function handleResize() {
  if (window.innerWidth > 0 && window.innerWidth < 700) {
    body.style.backgroundColor = "aqua";
  } else if (window.innerWidth > 700 && window.innerWidth < 1400) {
    body.style.backgroundColor = "yellow";
  } else {
    body.style.backgroundColor = "purple";
  }
}

function init() {
  window.addEventListener("resize", handleResize);
}

init();
