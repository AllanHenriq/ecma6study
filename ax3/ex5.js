//A partir do array: const arr = [1, 2, 3, 4, 5, 6], defina uma variável x que recebe a primeira
// posição do vetor e outra variável y que recebe todo restante dos dados.

const arr = [1, 2, 3, 4, 5, 6]

const [x,...y] = arr;

console.log(x);
console.log(y);

//Crie uma função que recebe inúmeros parâmetros e retorna a soma de todos eles:

const soma=(...params) => params.reduce((total,next) => total+next);

console.log(soma(12,13,14));

// 5.2 Spread

const usuario = {
   nome: 'Diego',
   idade: 23,
   endereco: {
   cidade: 'Rio do Sul',
   uf: 'SC',
   pais: 'Brasil',
   }
  };

const usuario2= {...usuario, nome:'Gabriel'}

console.log(usuario2)

var usuario3= {...usuario, endereco:{...usuario.endereco,cidade:'Lontras'}}

console.log(usuario3);

//exercicio 6
//Literals

var usuarioLit = 'Diego';
var idadeLit = 23;

console.log(`O usuário ${usuarioLit} possui ${idadeLit} anos`);

//exercicio 7
//Object Short Syntax
const nome = 'Diego';
const idade = 23;
const usuarioOSS = {
 nome,
 idade,
 cidade: 'Rio do Sul',
};

console.log(usuarioOSS);