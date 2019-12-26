
// 3º exercícioA partir do resultado do exemplo anterior adicione um indicador de carregamento em tela no lugar
// Além disso, adicione uma mensagem de erro em tela caso o usuário no Github não exista.


var btnAdicionar = document.querySelector('button');
var lblUserName = document.querySelector("input");
var repoList = document.getElementById('list');
var repoText;
var repos = [];

function renderList(){
    repoList.innerHTML = '';
    for (repo of repos){
        var repoElement = document.createElement('ul');
        var repoText = document.createTextNode(repo);

        repoElement.appendChild(repoText);
        repoList.appendChild(repoElement);
    } 
}


function addRepo(){
    repoText = 'https://api.github.com/users/'
    +lblUserName.value+ '/repos';
    console.log("asdasdas");

    repos.push('carregando...');
    renderList();
    repos.pop();

    axios.get(repoText)
    .then(function(){
        repos.push(repoText);
        renderList();
    })
    .catch(function(error){
        renderList();
        alert(error);
    })

    lblUserName.value = '';

}

btnAdicionar.onclick = addRepo;

