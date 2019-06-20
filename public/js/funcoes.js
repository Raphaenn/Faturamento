// Função para somar envios dos fornecedores detalhados
var table = document.getElementById("Fat_table"),
  sumVal = 0;

for (var i = 1; i < table.rows.length; i++) {
  sumVal = sumVal + parseInt(table.rows[i].cells[6].innerHTML);
}

document.getElementById("dinheiro").innerHTML = "R$ " + sumVal;



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
