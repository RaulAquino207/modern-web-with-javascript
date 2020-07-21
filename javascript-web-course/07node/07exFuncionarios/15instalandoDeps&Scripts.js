/**
 * São duas coisas bem simples relacionadas ao package.json
 * Primeiro é fato de poder ser criado scripts dentro desse arquivo para poder executar de forma
 * mais simples através do terminal.
 * 
 * A outra questão é que a partir do package.json é possível recriar a pasta node_modules, a partir
 * daquilo que está definido dentro do nosso arquivo package.json.
 * 
 */

 /*
ADICIONANDO SCRIPTS no arquivo package.json
"scripts": {
    "start": "nodemon",
    "dev": "nodemon",

Existem alguns scripts que já pré definidos, esses scripts basta dar um npm nomeDoScript, porém 
quando se é criado um script novo, como por exemplo esse acima chamado "dev", é necessário ir no
terminal e fazer npm run nomeDoSeuScript
 */

 /*
Trazendo de volta a pasta node_modules
Vá até o terminal e de um npm i dentro da pasta onde há o package.json
 */