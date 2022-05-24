function comecarJogo(){
    let placarIA = 0
    let placarjogador = 0
    let nomeJogador = prompt("Qual é o seu nome?")
    let jogar = confirm("vamos jogar "+nomeJogador+" ?")
    if(jogar){
        obterEscolhas()
    }else{
        comecarJogo()
    }
    
    function obterEscolhas (){
        alert("Escolha uma das três opções "+nomeJogador)
        let valorjogador = prompt("pedra, papel ou tesoura?")
        let valorIA = parseInt (Math.random()*(3-1)+1)
        

        if(valorjogador === "pedra"){
            valorjogador = 1
        }else if(valorjogador === "papel"){
            valorjogador = 2
        }else if(valorjogador === "tesoura"){
            valorjogador = 3
        }else{
            valorjogador = 4
        }

        if(valorjogador === 4){
            let continuar = confirm("valor invalido, deseja continuar?")
            if(continuar){
                obterEscolhas()
            }
        }
        
        
        console.log(valorIA+"======"+ valorjogador)
        verificarVencedor()
        function verificarVencedor(){
            
            if (valorIA === valorjogador){
                continuar = confirm("Deu empate, jogar mais?")
            }else if((valorjogador === 1 && valorIA === 3) || (valorjogador === 2 && valorIA === 1) || (valorjogador === 3 && valorIA === 2)){
                placarjogador = placarjogador + 1
                continuar = confirm("Voçê venceu!!, jogar mais?")
            }else{
                continuar = confirm("Voçê perdeu :(, tentar mais uma vez?")
                placarIA = placarIA + 1
            }    
            
            if (continuar){
                obterEscolhas()
            }else{
                verificarPlacar()
            }
           
            
            function verificarPlacar(){
               alert("Placar da IA:"+placarIA+"----Seu placar:"+placarjogador)
               
                if(placarIA > placarjogador){
                    continuar = confirm("Voçê pedeu deseja jogar mais?")
                    if(continuar){
                        comecarJogo()
                    }
                }else if(placarIA < placarjogador){
                    continuar = confirm("Voçê venceu deseja jogar mais?")
                    if(continuar){
                        comecarJogo()
                    } 
                }
            
                
               
            }

        }
    }

}
comecarJogo()