document.getElementById("v1").addEventListener("click", v1);
document.getElementById("v2").addEventListener("click", v2);
document.getElementById("v3").addEventListener("click", v3);
document.getElementById("v4").addEventListener("click", v4);
document.getElementById("v5").addEventListener("click", v5);
document.getElementById("v6").addEventListener("click", v6);
document.getElementById("v7").addEventListener("click", v7);
document.getElementById("v8").addEventListener("click", v8);
document.getElementById("v9").addEventListener("click", v9);





var jogador = "x"



var ve1 = "";
var ve2 = "";
var ve3 = "";
var ve4 = "";
var ve5 = "";
var ve6 = "";
var ve7 = "";
var ve8 = "";
var ve9 = "";



    function vitoria(jogada) {
        if(ve1 == jogada && ve2 == jogada && ve3 == jogada) { 
            document.getElementById('resultado').innerHTML = ('Fim do jogo! Vitória do '+ jogador);
            return true;
        }
        if(ve4 == jogada && ve5 == jogada && ve6 == jogada){
            document.getElementById('resultado').innerHTML = ('Fim do jogo! Vitória do '+ jogador);
            return true;
        }     
        if(ve7 == jogada && ve8 == jogada && ve9 == jogada){
            document.getElementById('resultado').innerHTML = ('Fim do jogo! Vitória do '+ jogador);
            return true;       
        }
        if(ve1 == jogada && ve4 == jogada && ve7 == jogada){
            document.getElementById('resultado').innerHTML = ('Fim do jogo! Vitória do '+ jogador);
            return true;       
        }
        if(ve2 == jogada && ve5 == jogada && ve8 == jogada){
            document.getElementById('resultado').innerHTML = ('Fim do jogo! Vitória do '+ jogador);  
            return true;   
        }
        if(ve3 == jogada && ve6 == jogada && ve9 == jogada){
            document.getElementById('resultado').innerHTML = ('Fim do jogo! Vitória do '+ jogador);  
            return true;  
        }
        if(ve1 == jogada && ve5 == jogada && ve9 == jogada){
            document.getElementById('resultado').innerHTML = ('Fim do jogo! Vitória do '+ jogador);  
            return true;   
        }
        if(ve3 == jogada && ve5 == jogada && ve7 == jogada){
            document.getElementById('resultado').innerHTML = ('Fim do jogo! Vitória do '+ jogador);    
            return true;  
        } 
        return false; 
        }  
                
    

    function v1() {
        document.getElementById('v1').innerHTML = jogador;
        ve1 = jogador;
        if(!vitoria(jogador)){
            if(jogador == 'x'){
                jogador = 'o';
            } else {
                jogador = 'x';
                
            }
            document.getElementById("v1").removeEventListener("click", v1);
        }
    
    }
 
    function v2() {
        document.getElementById('v2').innerHTML = jogador;
        ve2 = jogador;
        if(!vitoria(jogador)){
            if(jogador == 'x'){
                jogador = 'o';
            } else {
                jogador = 'x';
    
            }
            document.getElementById("v2").removeEventListener("click", v2);
        }
    
    }

    function v3() {
        document.getElementById('v3').innerHTML = jogador;
        ve3 = jogador;
        if(!vitoria(jogador)){
            if(jogador == 'x'){
                jogador = 'o';
            } else {
                jogador = 'x';
    
            }
            document.getElementById("v3").removeEventListener("click", v3);
        }
    
    }

    function v4() {
        document.getElementById('v4').innerHTML = jogador;
        ve4 = jogador;
        if(!vitoria(jogador)){
            if(jogador == 'x'){
                jogador = 'o';
            } else {
                jogador = 'x';
    
            }
            document.getElementById("v4").removeEventListener("click", v4);
        }
    
    }

    function v5() {
        document.getElementById('v5').innerHTML = jogador;
        ve5 = jogador;
        if(!vitoria(jogador)){
            if(jogador == 'x'){
                jogador = 'o';
            } else {
                jogador = 'x';
    
            }
            document.getElementById("v5").removeEventListener("click", v5);
        }
    
    }

    function v6() {
        document.getElementById('v6').innerHTML = jogador;
        ve6 = jogador;
        if(!vitoria(jogador)){
            if(jogador == 'x'){
                jogador = 'o';
            } else {
                jogador = 'x';
    
            }
            document.getElementById("v6").removeEventListener("click", v6);
        }
    
    }

function v7() {
    document.getElementById('v7').innerHTML = jogador;
    ve7 = jogador;
    if(!vitoria(jogador)){
        if(jogador == 'x'){
            jogador = 'o';
        } else {
            jogador = 'x';

        }
        document.getElementById("v7").removeEventListener("click", v7);
    }

}

function v8() {
    document.getElementById('v8').innerHTML = jogador;
    ve8 = jogador;
    if(!vitoria(jogador)){
        if(jogador == 'x'){
            jogador = 'o';
        } else {
            jogador = 'x';

        }
        document.getElementById("v8").removeEventListener("click", v8);
    }

}

function v9() {
    document.getElementById('v9').innerHTML = jogador;
    ve9 = jogador;
    if(!vitoria(jogador)){
        if(jogador == 'x'){
            jogador = 'o';
        } else {
            jogador = 'x';

        }
        document.getElementById("v9").removeEventListener("click", v9);
    }

}

function resetar() {
    document.location.reload(true);

}