// 0 = idle, 1 = smack, 2 = babel
var henioState = 0

const imgHenio = document.getElementById("henioImg");
const aHenio = document.getElementById("henio")
const smack = document.getElementById('smack')
const babel = document.getElementById('babel')

imgHenio.addEventListener("click", () => {
    if(henioState == 0){
        imgHenio.src = "assets/babel/babelpunch.png"
        smack.play()
        henioState = henioState + 1
        setTimeout(() => {
            imgHenio.src = "assets/babel/babeltalk.png";
            babel.play()
            setTimeout(() => {
                imgHenio.src = "assets/babel/babelstand.png";
                henioState = 0
            }, 800);
        }, 800);        
    }
});