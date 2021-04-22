// <⚠️ DONT DELETE THIS ⚠️>
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/
const title = document.querySelector("h2");

const superEventHandler = {
  handleMousedown: function () {
    title.innerHTML = "I Click Right";
    title.style.color = colors[0];
  },
  handleResize: function () {
    title.style.color = colors[1];
    title.innerHTML = "Size change";
  },
  handleMouseover: function () {
    return (title.innerHTML = "on mouse here"), (title.style.color = colors[2]);
  },
  handleMouseOut: function () {
    return (title.innerHTML = "on mouse out"), (title.style.color = colors[3]);
  }
};

window.addEventListener("mousedown", superEventHandler.handleMousedown);
title.addEventListener("mouseover", superEventHandler.handleMouseover);
title.addEventListener("mouseout", superEventHandler.handleMouseOut);
window.addEventListener("resize", superEventHandler.handleResize);
