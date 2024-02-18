let menu = document.getElementById("menu");
let links = document.getElementById("links");
let close = document.getElementById("close");

// menu.onclick = function () {
//   links.classList.remove("hidden");
//   close.classList.remove("hidden");
//   menu.classList.add("hidden");
// };

// close.onclick = function () {
//   links.classList.add("hidden");
//   close.classList.add("hidden");
//   menu.classList.remove("hidden");
// };

menu.onclick = function () {
  links.classList.remove("aboslute");
  links.classList.add("relative");
  links.classList.remove("-top-52");
  links.classList.add("top-0");
  links.classList.remove("-z-10");
  links.classList.add("-z-0");

  close.classList.remove("hidden");
  menu.classList.add("hidden");
};

close.onclick = function () {
  links.classList.add("aboslute");
  links.classList.remove("relative");
  links.classList.add("-top-52");
  links.classList.remove("top-0");
  links.classList.add("-z-10");
  links.classList.remove("-z-0");

  close.classList.add("hidden");
  menu.classList.remove("hidden");
};
