let value = true;
const audio = document.querySelector("#audio");
let titleStartGame = document.getElementById('title-start-game');
const sound = () => {
    return audio.paused ? audio.play() : audio.pause();
};
sound();
document.getElementById('start').onclick = () => {
    let canvas = document.getElementById("game");
    let screen = document.getElementById('screen-area');
    if(value)
    {
        let canvasCreate = document.createElement('canvas');
        canvasCreate.setAttribute("id", "game");
        canvasCreate.setAttribute("width", 480);
        canvasCreate.setAttribute("height", 480);
        document.querySelector('.canvas').append(canvasCreate);
        screen.style.cssText = `
        background: white url(../img/background.png) ;
        background-size: cover;
        transition-duration: .5s;
        `;
        titleStartGame.style.cssText = `
            left: 110px;
            top:150px;
            transition-duration: .5s;
            opacity:1;
        `;
    }
    if(!value)
    {
        canvas.remove();
        screen.style.cssText = `
            background-color:black;
            transition-duration: .5s;
        `;
        titleStartGame.style.cssText = `
            color:black;
            font-size:40px;
            position: absolute;
            left: -50px;
            opacity: 0;
        `;
    }
    value = !value;
    sound();
};
