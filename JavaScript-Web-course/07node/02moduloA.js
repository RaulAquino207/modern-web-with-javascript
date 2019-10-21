/*
Dentro do Node um arquivo representa um modulo, usando Node como servidor para prover página,
prove um arquivo, prove video, uma imagem e etc, gerar conteúdo dinâmico e também pode servir
como a sua API do seu sistema(ele é muito usado para isso).A organização backend em Node, se da
através de pastas e arquivos e cada arquivo representa um módulo(um módulo tem uma certa 
interioridade, ou seja, ele não deixa tudo aquilo que se escreve dentro dele disponivel para
todo mundo, se tem a priori, tudo o que foi escrito dentro de um módulo ele fica visível apenas
dentro do módulo, para que seja tornado algo público/disponível para outro arquivo será preciso
utilizar de uma das ideias do Node que é exportar algo e de importar algo).
*/
//Forma para que o arquivo consiga ser visível em outros módulos
//Utilizando o this
this.ola = "Fala pessoal"
//Outra forma seria utilizando o exports
exports.bemVindo = "Bem vindo ao node!"
//Forma geralmente mais utilizando para exportar algo
module.exports.ateLogo = "Até o próximo exemplo"