// 0 = idle, 1 = smack
var henioState = 0

const imgHenio = document.getElementById("henioImg");
const aHenio = document.getElementById("henio")

const smack = document.getElementById('smack')
const babel = document.getElementById('babel')
const splat = document.getElementById('splat')

imgHenio.addEventListener("click", () => {
    if(henioState == 0){
        imgHenio.src = "assets/babel/withTP/babelpunch.png"
        smack.play()
        henioState = henioState + 1
        setTimeout(() => {
            imgHenio.src = "assets/babel/withTP/babeltalk.png";
            babel.play()
            setTimeout(() => {
                imgHenio.src = "assets/babel/withTP/babelstand.png";
                henioState = 0
            }, 800);
        }, 800);        
    }
});