var requestURL = 'https://luisfernandovl.github.io/portfolio/db.json';

var request = new XMLHttpRequest();

request.open('GET', requestURL);

request.responseType = 'json';
request.send();

request.onload = function() {
    var projetos = request.response;
    
    console.log(projetos);
}