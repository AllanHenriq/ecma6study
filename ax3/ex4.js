//ex1 
const empresa = {
    nome: 'Rocketseat',
    endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC',
    }
   };

const {nome, endereco: {cidade, estado}} = empresa;

console.log(nome);
console.log(cidade);
console.log(estado);

//ex2
// Utilize a desestruturação nos parâmetros da função para buscar o nome e idade do usuário
// separadamente.



const info= ({nome, idade}) => ( `${nome} tem ${idade} anos.`)


   var usuario = { nome: 'Diego', idade: 23 };

  console.log( info(usuario));
  console.log( info({nome:'Allan', idade:25}));

  