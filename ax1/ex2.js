//Crie uma tela com um <input> que deve receber o nome de um usuário no Github. Após digitar onome do usuário e clicar no botão buscar a aplicação deve buscar pela API do Github (conformeURL abaixo) os dados de repositórios do usuário e mostrá-los em tela:

var btnAdicionar = document.querySelector('button');
var lblUserName = document.querySelector("input");
var repoList = document.getElementById('list');

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
    var repoText = ' https://api.github.com/users/'
    +lblUserName.value+ '/repos';
 
    repos.push(repoText);
    lblUserName.value = '';
    renderList();
}

btnAdicionar.onclick = addRepo;