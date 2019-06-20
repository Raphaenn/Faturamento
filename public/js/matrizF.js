$(document).ready(function(){
    addImput();
    alterarImput();
    paginas();
});

function addImput() {
var adicionar = $('#add');

$('#add').click(function() {
    event.preventDefault();
    $('#reserva').attr('id', 'vazio');
    
});
};

function alterarImput() {
    $("#phoneNumber").mask('(00) (0000-0000)');
    $("#cep").mask('00000-000');
    $("#cnpj").mask('00.000.000/0000-00', {reverse: true});
    $("input[id=dataformat]").mask('00/00/0000');
    $("input[id=valorContrato]").mask("#.##0,00", {reverse: true});
};


function paginas() {

    var clicks = 0;
    var clicksB = 0;

        $('#proximo').click(function() {
            if (clicks == 0){
                $("#parteA").attr("class", "pt3");
                $("#parteB").attr("class", "pt1");
            } else{
                $("#parteB").attr("class", "pt3");
                $("#parteC").attr("class", "pt1");
            }
            clicks++;
            clicksB = 0;
        });

        $("#voltar").click(function(){
            if(clicksB == 0) {
                $("#parteC").attr("class", "pt3");
                $("#parteB").attr("class", "pt1");
            } else{
                $("#parteB").attr("class", "pt3");
                $("#parteA").attr("class", "pt1");
            }
            ++clicksB;
            clicks = 0;
        });
        
};