//Transformar um input em algarismos romanos no estilo 'XVIII' em um número decimal
//Não pode haver mais de 3 algarismos iguais na sequência
//Se um algarismo de maior valor está na frente de um de menor valor ele subtraí
//Tabela de conversão
// I = 1
// V = 5
// X = 10
// L = 50
// C = 100
// D = 500
// M = 1000

const { Console } = require('console');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const algarismosValidos = ['I','V' ,'X' ,'L' ,'C' ,'D' ,'M']
const tabelaConversao = ['1','5' ,'10' ,'50' ,'100' ,'500' ,'1000']

rl.question('Número romano: ', function (input) {
    //algoritmo aqui
    const inputArray = []

    //#Separa cada algarismo em uma posição do array
    for(let i = 0; i < input.length; i++){
        //##Verifica se o algarismo é válido 
        if(algarismosValidos.indexOf(input[i]) == -1){
            console.log("Input não é um número romano");
            rl.close();
            return;
        }

        inputArray[i] = Number(tabelaConversao[algarismosValidos.indexOf(input[i])])
    }

    if(!checaRepeticoes(inputArray)){
        console.log("Input não é um número romano");
        rl.close();
        return;
    }

    let numeroFinal = inputArray[inputArray.length-1]
    for(let i = inputArray.length - 2; i >= 0; i--){
        if(i < 0) break;

        if(inputArray[i+1] <= inputArray[i]){
            numeroFinal += inputArray[i]
        }else{
            numeroFinal -= inputArray[i]
        }
    }

    console.log("O número em decimais é: " + numeroFinal)
    rl.close();
});

function checaRepeticoes(numeroRomano){
    let counter = 1

    for(let i = 0; i < numeroRomano.length; i++){
        if(i == numeroRomano.length - 1) break

        if(numeroRomano[i] == numeroRomano[i+1]){
            counter++

            if(counter == 3){
                return false
            }
        }else{
            counter = 0
        }
    }

    return true
}