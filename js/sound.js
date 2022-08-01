const buttonClickSound = document.body.getElementsByClassName("button");
for (let button of buttonClickSound) {
    button.addEventListener("click", ()=>{
        const soundClick = new Audio('/music/button-click.mp3');
        soundClick.play();
    });
}