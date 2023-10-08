const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds')
const pipeMaster = document.querySelector('.pipeMaster')
const fundo = document.querySelector('.fundo')

const playTheme = () => {
    document.getElementById('theme').play();
}
const pauseTheme = () => {
    document.getElementById('theme').pause();
}
const marioDeath = () => {
    document.getElementById('marioDeath').play();
}

const jump = () => {
    mario.classList.add('jump');
    
    setTimeout(() => {
        mario.classList.remove('jump');
    } ,500)
}

const loop = setInterval(() => {
    
    playTheme()

    console.log('loop')

    const pipePosition = pipe.offsetLeft;
    const marioPosition =  +window.getComputedStyle(mario).bottom.replace
    ('px', ' ');
    
    const pipeMasterPosition = pipeMaster.offsetLeft;

    const cloudsPosition = clouds.offsetLeft;
    
    const fundoPosition = fundo.offsetLeft;

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 100 || pipeMasterPosition <= 100 && pipeMasterPosition > 0){

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;
        
        pipeMaster.style.animation = 'none';
        pipeMaster.style.left = `${pipeMasterPosition}px`;
        

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './img/game-over.png'
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'

        fundo.style.animation = 'none'
        fundo.style.left = `${fundoPosition}px`

        clouds.style.animation = 'none'
        clouds.style.left = `${cloudsPosition}px`

        clearInterval(loop);

        pauseTheme()
        
        marioDeath()

    }

}, 10);


document.addEventListener('keydown', jump)