const imgHenio = document.getElementById("imgHenio");
const aHenio = document.getElementById("aHenio");

aHenio.addEventListener("mouseover", () => {
    imgHenio.src = "assets/things/henio2.png";
});

aHenio.addEventListener("mouseleave", () => {
    imgHenio.src = "assets/things/henio1.png";
});