
// Função para somar envios dos fornecedores detalhados
var table = document.getElementById("Fat_table"), sumVal = 0;

  for (var i = 1; i < table.rows.length; i++) {
    sumVal = sumVal + parseInt(table.rows[i].cells[6].innerHTML);
  }

document.getElementById("dinheiro").innerHTML = "R$"+sumVal;


// Função para calculo do imc - Teste de funções

var legenda = document.querySelector(".legenda");
legenda.textContent = "Painel de faturamento - 2019";


//Modificar datas @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

/*
var NData = document.querySelectorAll(".date");

for(var i = 0; i < NData.length; i++) {

var trocar = document.querySelectorAll(".date");
var trocar = trocar[i];
trocar.textContent = "19/03/2019";
}
*/


/*
// calculo IMC
var paciente = document.querySelector("#primeiro-paciente");

var tdpeso = paciente.querySelector(".info-peso");
var peso = tdpeso.textContent;

var tdaltura = paciente.querySelector(".info-altura");
var altura = tdaltura.textContent;

var tdImc = paciente.querySelector(".info-imc");

var pesoValido = true;
var alturaValida= true;

if (peso <= 0 || peso >= 1000) {
    console.log("peso inválido"); 
    pesoValido = false;
    tdImc.textContent = "Peso inválido";
}

if(altura <= 0 || altura >= 3) {
    console.log("Altura inválida");
    alturaValida = false;
    tdImc.textContent = "Altura inválida";
}

if (alturaValida && pesoValido) {
    var imc = peso / (altura * altura); // 100 / 2.0 * 2.0 = 100 => 25
    tdImc.textContent = imc;
}

console.log(imc);

*/

/* var currencyInput = document.querySelector('input[type="currency"]');
var currency = 'GBP'; // https://www.currency-iso.org/dam/downloads/lists/list_one.xml

currencyInput.addEventListener('focus', onFocus);
currencyInput.addEventListener('blur', onBlur);

function localStringToNumber( s ){
    return Number(String(s).replace(/[^0-9.-]+/g,""));
}

function onFocus(e){
  var value = e.target.value;
  e.target.value = value ? localStringToNumber(value) : '';
}

function onBlur(e){
  var value = e.target.value;

  const options = {
      maximumFractionDigits : 2,
      currency              : currency,
      style                 : "currency",
      currencyDisplay       : "symbol"
  }
  
  e.target.value = value 
    ? localStringToNumber(value).toLocaleString(undefined, options)
    : ''
};

*/
