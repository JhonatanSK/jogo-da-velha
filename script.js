const quadrados = document.querySelectorAll(".quadrados");
const blocos = document.querySelectorAll(".bloco");
let vez = 1;

function jogada (){

    if(quadrados.innerHTML !== ""){
        
        if(vez%2 != 0){
            this.innerHTML = "x";
        }
        else{
            this.innerHTML = "o";
        }
        vez++;

    }
}

    for(let percorre of quadrados){
        console.log("lala");
        percorre.onclick = jogada;
    }
    
