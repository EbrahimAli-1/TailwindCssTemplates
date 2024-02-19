let menu = document.getElementById("menu");
let links = document.getElementById("links");
let close = document.getElementById("close");

menu.onclick = function () {
  links.classList.remove("h-0");
  links.classList.add("h-fit");

  close.classList.remove("hidden");
  menu.classList.add("hidden");
};

close.onclick = function () {
  links.classList.add("h-0");
  links.classList.remove("h-fit");

  close.classList.add("hidden");
  menu.classList.remove("hidden");
};
