// Constantes que pegam os meus elementos div da tela do meu html
const visible = document.querySelector('.visible')
const ocult = document.querySelector('.ocult')

//quando acionada vai para a próxima tela
function concluido (){
    visible.style.display ="none"
    ocult.style.display ="block"
}
//Receber inputs da tela
let userName = "";
let numberCard = "";
let month = "";
let year = "";
let cvc = "";

//Recebendo o input button
const confirm = document.getElementById('confirm');

  
let teste1 = false
let teste2 = false
let teste3 = false


confirm.onclick = function (){
    userName = document.getElementById('name').value
    numberCard = document.getElementById('number').value
    month = document.getElementById('month').value
    year = document.getElementById('year').value
    cvc = document.getElementById('cvc').value

    verificaInputNumberCard()
    verificaInputsMonth()
    verificaInputCVC()
    
    verificaLogicaTela()
}
//Recebendo elementos para inserir textos
const numberHtml = document.getElementById('numberHtml')
const nameHtml = document.getElementById('nameHtml')
const monthHtml = document.getElementById('monthHtml')
const cvcHtml = document.getElementById('cvcHtml')

//Gerando os elementos HTML na tela
function gerarHTML (){

numberHtml.innerHTML = numberCard.substring(0,4) + " " + numberCard.substring(4,8) + " " + numberCard.substring(8,12) + " " +  numberCard.substring(12,16);
nameHtml.innerHTML = userName
monthHtml.innerHTML = `${month}/${year}`
cvcHtml.innerHTML = cvc
}
function verificaInputsMonth (){
    if(month > 0 && month < 13 && year > 21 && year < 40){
        console.log('Okay')
        teste1 = true
        
    } else if( month == "" && year == ""){
        console.log('os dois vazios')
    }else if( month == "" ){
        console.log('month vazio')
    }
    else if( year == "" ){
        console.log('year vazio')
    }else if (month < 1 || month > 12 || year < 22 || year > 39){
        console.log('digite apenas números válios')
    }else{
        console.log('Digite apenas numeros')
    }
    
}

function verificaInputNumberCard (){
    numberCard = Number(numberCard)
    console.log(numberCard)
    numberCard = String(numberCard)
    console.log(numberCard)
    if( numberCard.length == 16 ){
        console.log('okay')
        teste2 = true
    }else{
        console.log('deu muita merda')
    }
}

function verificaInputCVC (){
    cvc = Number(cvc)
    console.log(cvc)
    cvc = String(cvc)
    console.log(cvc)
    if(cvc == "NaN" ){
        console.log('sou NAN')
    }else if (cvc.length == 3 ){
        console.log('deu certo')
        teste3 = true
    }else{
        console.log('digite todos os numeros')
    }
   
}


function verificaLogicaTela (){
    if(teste1 == true && teste2 == true && teste3 == true){
        concluido()
    }
}