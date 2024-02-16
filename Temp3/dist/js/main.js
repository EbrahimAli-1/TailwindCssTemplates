let menu = document.getElementById("menu");
let links = document.getElementById("links");
menu.onclick = function () {
  if (links.classList.contains("hidden")) {
    links.classList.remove("hidden");
    links.classList.add("block");
  } else {
    links.classList.add("hidden");
    links.classList.remove("block");
  }
}