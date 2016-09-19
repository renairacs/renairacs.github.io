$('table').dataTable({
ajax: './data/estabelecimentos.json',
columns: [
    { data: 'imagem' },
    { data: 'estabelecimento' },      
    { data: 'tipo' },
    { data: 'endereco' },
    { data: 'cidade' },
    { data: 'estado' } /* Mapeia colunas */
]
});