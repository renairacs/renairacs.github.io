$('table').dataTable({
ajax: './data/estabelecimentos.json',
dom: '<"wrapper"lipt>',
columns: [
    { data: 'imagem' },
    { data: 'estabelecimento' },      
    { data: 'tipo' },
    { data: 'endereco' },
    { data: 'cidade' },
    { data: 'estado' } /* Mapeia colunas */
]
});