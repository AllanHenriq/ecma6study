const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
   ];

   
   //2.1
   const exMap = usuarios.map(function(item){
       return item.idade
   })

   console.log("ex2.1: "+ exMap);

   const exFilter = usuarios.filter(function(item){
    return item.idade>18 && item.empresa == 'Rocketseat';
})

console.log(exFilter);

const exFind = usuarios.find(function(item){
return item.empresa=='Facebook'
})

console.log(exFind);

const exFilterDois = usuarios.filter(function(item){
            item.idade = item.idade*2;
    return item.idade<50
})

console.log(exFilterDois);
