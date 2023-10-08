function start(){
    const start = document.getElementById('Btn')
    start.style.width = "50%"
    start.innerHTML = `CARREGANDO..`
    
    setTimeout(function() {
        window.location.href = "./game.html";
    }, 2000);
}