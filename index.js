// Select some elements...
let header = document.querySelector("#page-header");

header.style.textAlign = "left";
header.style.backgroundColor = "blue";

const images = document.querySelectorAll(".dog-image");

for (let i = 0; i < images.length; i++) {
  const image = images[i];
  image.style.borderRadius = "50px";
  image.style.width = "20px";
}

const dogNames = document.querySelectorAll(".dog-name");

for (let i = 0; i < dogNames.length; i++) {
  const dogName = dogNames[i];
  dogName.style.textAlign = "left";
}

let footer = document.querySelector(".footer");
footer.style.color = "yellow";
