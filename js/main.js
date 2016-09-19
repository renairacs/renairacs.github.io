$('table').dataTable({
ajax: './data/estabelecimentos.json',
columns: [
    { data: 'imagem' },
    { data: 'estabelecimento' },      
    { data: 'tipo' },
    { data: 'endereco' },
    { data: 'estado' },
    { data: 'cidade' } /* Mapeia colunas */
]
});