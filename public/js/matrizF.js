$(document).ready(function(){
    addImput();
    alterarImput();
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
