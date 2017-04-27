// diferenca de usar listener click() ou on() 
// click() soh eh adicionado aos elementos que ja estao na pagina
// on() eh adicionado a novos elementos da pagina obs: o elemento raiz deve existir no caso de uma <ul><li></li></ul>

// "check off" todos clicados
$('ul').on('click', 'li', function () {
    $(this).toggleClass('completed');
});

// clicar no X para deletar uma tarefa
$('ul').on('click', 'span', function (e) {
    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    });

    // para o evento no elemento clicado, sem propagar para o outter-element
    e.stopPropagation();
});

// adiciona tarefas na lista
$('#inputTarefa').keypress(function (e) {
    // adiciona nova tarefa quando Enter for pressionado
    if (e.which === 13) {
        var text = $(this).val();
        $('ul').append(function () {
            return '<li><span><i class="fa fa-trash" aria-hidden="true"></i></span>' + text + '</li>';
        });
        $(this).val(''); // reseta campo input
    }
});

// clique no botao de adicionar
$('.fa-plus-square').click(function () {
    $('#inputTarefa').fadeToggle();
});