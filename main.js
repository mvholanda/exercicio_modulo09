$(document).ready(function() {
    $('form').on('submit', function(e) {
        e.preventDefault();
        const conteudoListagem = $('#tarefa').val();
        const novoItem = $('<li></li>');
        $(`<a type="button">${conteudoListagem}</a>`).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $('a').click(function() {
            $(this).css('text-decoration', 'line-through');
        })
        $('#tarefa').val(' ')
    })
})