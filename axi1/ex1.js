//Crie uma função que recebe a idade de um usuário e retorna uma Promise que depois de 2segundos retornará se usuário é maior ou não que 18 anos. Se o usuário ter mais que 18 anos deidade o resultado deve cair no .then, caso contrário, no .catch
function checaIdade(idade) {  
    return new Promise(function(resolve, reject){
        setTimeout('', 2000);
        if(idade>18){
            resolve();
        }else{
            reject();
        }
    })
}


checaIdade(20)
.then(function() {
        console.log( "Maior que 18");  
})  
.catch(function() {
            console.log("Menor que 18");  
});

checaIdade(15)
.then(function() {
        console.log( "Maior que 18");  
})  
.catch(function() {
            console.log("Menor que 18");  
});checaIdade(10)
.then(function() {
        console.log( "Maior que 18");  
})  
.catch(function() {
            console.log("Menor que 18");  
});checaIdade(5)
.then(function() {
        console.log( "Maior que 18");  
})  
.catch(function() {
            console.log("Menor que 18");  
});