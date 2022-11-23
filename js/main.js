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

   
confirm.onclick = function (){
    userName = document.getElementById('name').value
    numberCard = document.getElementById('number').value
    month = document.getElementById('month').value
    year = document.getElementById('year').value
    cvc = document.getElementById('cvc').value
   
    console.log(userName)
    console.log(numberCard)
    console.log(month)
    console.log(year)
    console.log(cvc)
}


    



