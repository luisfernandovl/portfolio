var requestURL = 'https://luisfernandovl.github.io/portfolio/db.json';

var request = new XMLHttpRequest();

request.open('GET', requestURL);

request.responseType = 'json';
request.send();

request.onload = function() {
    var projetos = request.response;
    // criaCartoes(projetos);

    console.log(Object.keys(projetos).length);
    
    console.log(Object.assign(projetos));
}

// function criaCartoes(projeto){

// }