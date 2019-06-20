var adicionar = $('#add');

console.log(adicionar);

$('#add').click(function() {
    event.preventDefault();
    $('#reserva').attr('id', 'novo');
    console.log("Cliquei");
    
});


/* var campo = $(".campo-digitacao");
var tempoInicial = $("#tempo-digitacao").text();

$(function(){
    atualizaTamanhoFrase();
    inicializaContadores();
    inicializaCronometro();
    inicializaMarcadores();
    $("#botao-reiniciar").click(reiniciaJogo);
});

function atualizaTamanhoFrase() {
    var frase = $(".frase").text();
    var numPalavras = frase.split(" ").length;
    var tamanhoFrase = $("#tamanho-frase");
    tamanhoFrase.text(numPalavras);
}

function inicializaContadores() {
    campo.on("input", function() {
        var conteudo = campo.val();

        var qtdPalavras = conteudo.split(/\S+/).length - 1;
        $("#contador-palavras").text(qtdPalavras);

        var qtdCaracteres = conteudo.length;
        $("#contador-caracteres").text(qtdCaracteres);
    });
}

function inicializaCronometro() {
    var tempoRestante = $("#tempo-digitacao").text();
    campo.one("focus", function() {
        var cronometroID = setInterval(function() {
            tempoRestante--;
            $("#tempo-digitacao").text(tempoRestante);
            if (tempoRestante < 1) {
                campo.attr("disabled", true);
                clearInterval(cronometroID);
                campo.toggleClass("campo-desativado");
                inserePlacar();
            }
        }, 1000);
    });
}

function inicializaMarcadores() {
    var frase = $(".frase").text();
    campo.on("input", function() {
        var digitado = campo.val();
        var comparavel = frase.substr(0 , digitado.length);

        if(digitado == comparavel) {
            campo.addClass("borda-verde");
            campo.removeClass("borda-vermelha");
        } else {
            campo.addClass("borda-vermelha");
            campo.removeClass("borda-verde");
        }
    });
}

function reiniciaJogo() {
    campo.attr("disabled", false);
    campo.val("");
    $("#contador-palavras").text("0");
    $("#contador-caracteres").text("0");
    $("#tempo-digitacao").text(tempoInicial);

    inicializaCronometro();
    campo.toggleClass("campo-desativado");
    campo.removeClass("borda-vermelha");
    campo.removeClass("borda-verde");
};

function inserePlacar() {
    var placar = $(".placar");
    var corpoTabela = placar.find("tbody");
    
    var usuario = "Raphael";
    var numPalavras = $("#contador-palavras").text();

    var linha = "<tr>"+
    "<td>"+ usuario + "</td>"+
    "<td>"+ numPalavras + "</td>"+
    "</tr>";

    corpoTabela.prepend(linha);

    
} */

/* **********  TESTE DE FUNÇÃO QUE RETORNA UM OBJETO  ***********/

/* var objeto = function book() {
        
    var obj = {
        livro1: {
            quantidadePaginas: 300,
            autor: "Jorge",
            editora: "Atlas"
        },
        livro2: {
            quantidadePaginas: 300,
            autor: "Jorge",
            editora: "Atlas"
        },
    };

    return eval('obj');
};

console.log(book(obj)); */



// Imprimir objeto - item por item no console
/* var myArray = [
    'Red',
    'Blue',
    'Green',
    'Yellow'
  ];
  $.each(myArray, function() {
   var value = this;
   console.log(value);
  }); */


/* FUNÇÃO PARA IMPRIMIR UM ARRAY EM UMA DIV NO HTML*/

/*   $(function() {
    var testArray = { one:"earth", two:"mars", three:"jupiter", four:"saturn", five:"venus" };
    var vPool="";
    $.each(testArray, function(i, val) {
        vPool += val + " ";
    });

    //We add vPool HTML content to #myDIV
    $('#myDIV').html(vPool);
}); */