
const sonic = document.querySelector(".sonic");
const eggman = document.querySelector(".eggman");
const fundo = document.querySelector(".fundo");

const jump = () => {
    sonic.classList.add("jump");
    sonic.src = "Sonic-Jump.gif";

    setTimeout(() => {
        sonic.classList.remove("jump");
        sonic.src = "Sonic.gif";
    }, 900);
};

const loop = setInterval(() =>{
    const eggmanpos = eggman.offsetLeft;
    const sonicpos = +window
    .getComputedStyle(sonic)
    .bottom.replace("px", "");
    if(eggmanpos < 110 && eggmanpos > 0 && sonicpos < 220){
       eggman.style.animation= "none";
       eggman.style.left = `${eggmanpos}px`;
       sonic.style.animation = "none";
       sonic.src ="Sonic-Loss.gif";
       
       fundo.src="GO.png";
       
    }
}, 10);

document.addEventListener("click", jump);