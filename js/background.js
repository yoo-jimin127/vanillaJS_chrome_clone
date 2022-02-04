const images = [ "0.PNG", "1.PNG", "2.PNG", "3.PNG" ];

const choosenImage = images[Math.floor(Math.random() * images.length)]

const bgImage = document.createElement("img");
bgImage.src = `/img/${choosenImage}`;
bgImage.classList.add("bgImage");
document.body.appendChild(bgImage);