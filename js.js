const imgHenio = document.getElementById("imgHenio");
const aHenio = document.getElementById("aHenio");

const imgRock = document.getElementById("imgRock");
const aRock = document.getElementById("aRock");

const imgRock2 = document.getElementById("imgRock2");
const aRock2 = document.getElementById("aRock2");

aHenio.addEventListener("mouseover", () => {
    imgHenio.src = "assets/things/henio2.png";
});
aHenio.addEventListener("mouseleave", () => {
    imgHenio.src = "assets/things/henio1.png";
});

aRock.addEventListener("mouseover", () => {
    imgRock.src = "assets/things/Rock2.png";
});
aRock.addEventListener("mouseleave", () => {
    imgRock.src = "assets/things/Rock1.png";
});

aRock2.addEventListener("mouseover", () => {
    imgRock2.src = "assets/things/Rock2.png";
});
aRock2.addEventListener("mouseleave", () => {
    imgRock2.src = "assets/things/Rock1.png";
});