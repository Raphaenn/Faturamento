$(function(){
    graficos();
    pagamento();
    matriz();
    tentativa();
});

// Variável global - nomes dos meses
var monthNames = {
    "Janeiro": 1,
    "Fevereiro": 2,
    "Março": 3,
    "Abril": 4,
    "Maio": 5,
    "Junho": 6,
    "Julho": 7,
    "Agosto": 8,
    "Setembro": 9,
    "Outubro": 10,
    "Novembro": 11,
    "Dezembro": 12
  };

// FUNÇÃO PARA MONTRAR ARRRAY COM AS COMPETENCIAS AGRUPADAS DO JSON
function graficos() {
    $.getJSON("http://localhost:3000/base/json", function(data) {

        let label = {}, key;
        $.each(data.lancamentos, function(index, value) {
            key = value.competencia
            if(!label[key]){
                label[key] = [];
            }
            label[key].push(value.valor);
        });
        console.log(label);
        
        var legenda = Object.keys(label);
        console.log(legenda);
        
        // Usar o for in para iterar no array do for each e somar os valores de cada mês.
        for(let entry in label) {
            label[entry] = label[entry].reduce((acc, num) => acc + num);
            $(".colagem").text(JSON.stringify(label));
        };
        var valores = Object.values(label);
        console.log(valores);

        // Construir gráfico correto
        var ctx = document.getElementById('ChartMes').getContext('2d');
        var chart = new Chart(ctx, {
      type: 'bar',
      data: {
         labels: legenda,
         datasets: [{
            backgroundColor: 'rgb(129, 198, 2228)',
            borderColor: 'rgb(0, 150, 215)',
            data: valores
         }]
      },
      options: {
         responsive: 'true',
         scales: {
            yAxes: [{
                stacked: true
            }]
        }
      }
   });
        
});
};


// FUNÇÃO PARA PEGAR DADOS DO JSON E EXIBIR DENTRO DE UMA DIV
function matriz() {
    $.getJSON("http://localhost:3000/base/json", function(data) {
     /* console.log(data.lancamentos); */

     var myJSON = JSON.stringify(data);
      $("#objetoJson").text(myJSON);

    });

    console.log("Requisiçao retornada");
}


//************************************* TESTES DE ARRAYS E OBJETOS ****************************************//
const companies = [
    {name: "Company One", category: "Finance", start: 1981, end: 2003},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
  
  const ages = ["Raphael", "Lais", "Lais", "Fred", "Fred", "Nat", "Nat", "Nat", "Raphael", "Raphael", "Raphael", "Fred", "Fred"];

  const pagamentos = [
    {nome: "Google", servico: "Clouda", valor: 2000},
    {nome: "Google", servico: "Cloud", valor: 3000},
    {nome: "Algar", servico: "Internet", valor: 1800},
    {nome: "Microsoft", servico: "Software", valor: 50000},
    {nome: "Microsoft", servico: "Software", valor: 10000},
    {nome: "Microsoft", servico: "Software", valor: 2000},
    {nome: "Embratel", servico: "Internet", valor: 3000},
    {nome: "Embratel", servico: "Internet", valor: 5000},
    {nome: "Google", servico: "Cloud", valor: 10000}
  ];


// FUNÇÃO REDUCE PARA AGRUPAR OBJETOS COM MESMO NOME [PAGAMENTOS]
function pagamento() {
    
    var pag = pagamentos.reduce(function(index, value){
        index[value.nome] = index[value.nome] || [];
        index[value.nome].push(value);
        
        return index;
    })
    console.log(pag);

};


// FUNÇÃO PARA AGRUPAR DADOS DO ARRAY OBJETO (PAGAMENTOS) E EXIBIR ARRAY SÓ COM OS (KEYS)
function tentativa() {


 var itens = {},
 key;

 $.each(pagamentos, function (id, val) {
     key = val.nome;
     if(!itens[key]) {
         itens[key] = [];
     }

     itens[key].push(val.nome)
 })
    console.log(itens);
    
    let Keys = Object.keys(itens);
    console.log(Keys);

    var lista = JSON.stringify(Keys);
    $(".titulo").text(lista);
    

    

};


  

// FUNÇÃO PARA BUSCAR DADOS DO JSON E CRIAR ARRAYS COM A COMPETENCIA E DATA - FAZER TBM O GRÁFICO
/* function pegaInfo() {
    $.getJSON("http://localhost:3000/base/json", function(data) {
        var dados = [];
        var label = [];
        $.each(data.lancamentos, function(index, value) {
            if(value.valor) {
                dados.push(value.valor);
                return
            }
            
        });

        $.each(data.lancamentos, function(index, value) {
            if(value.competencia) {
                label.push(value.competencia);
                return
            }
        });
        
        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
      type: 'bar',
      data: {
         labels: label,
         datasets: [{
            backgroundColor: 'rgb(129, 198, 2228)',
            borderColor: 'rgb(0, 150, 215)',
            data: dados
         }]
      },
      options: {
         responsive: 'true',
      }
   });
        
 });
}; */
