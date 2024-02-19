let menu = document.getElementById("menu");
let links = document.getElementById("links");
let close = document.getElementById("close");

menu.onclick = function () {
  links.classList.remove("-top-52");
  links.classList.add("top-0");
  links.classList.add("relative");

  close.classList.remove("hidden");
  menu.classList.add("hidden");
};

close.onclick = function () {
  links.classList.add("-top-52");
  links.classList.remove("top-0");
  links.classList.remove("relative");

  close.classList.add("hidden");
  menu.classList.remove("hidden");
};
