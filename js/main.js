var tabela = $('table').dataTable({
ajax: './data/estabelecimentos.json',
dom: '<tip>',
columns: [
    { data: 'imagem', render: function (data, type, row) { return '<img src="'+data+'" />' } },
    { data: 'estabelecimento' },      
    { data: 'tipo' },
    { data: 'endereco' },
    { data: 'cidade' },
    { data: 'estado' } /* Mapeia colunas */
]
});

$('#campo-busca').on('keyup', function () {
    tabela.search(this.value).draw()
})