const arr = [1, 2, 3, 4, 5];
const soma = arr.map(item => item + 10);

console.log(soma)


// 3.2
// Dica: Utilize uma constante pra function
const usuario = { nome: 'Diego', idade: 23 };
const idades = () => usuario.idade;

console.log(idades());

// 3.3
// Dica: Utilize uma constante pra function
const nome = "Diego";
const idade = 23;
const mostraUsuario = (nome = 'Diego', idade = 18) =>({nome,idade});
console.log(mostraUsuario(nome, idade));
console.log(mostraUsuario(nome));

// 3.4
   console.log(Promise = (resolve, reject) => resolve());