// DECLARAÇÕES DE VARIÁVEIS 
let mensagemAlerta = "";
let title = "";
let image = "";
let perguntas = [];
let niveis = [];
let editarPerguntas = [];
let qtdPerguntas = 0;
let qtdNiveis = 0;

let questions = [];
let levels = [];
let questoesSemValidar = [];
let niveisSemValidar = [];
let answers = [];

let quizz = {};
let idQuizz = null;
let keyQuizz = null;

//---------------FUNÇÕES DE VALIDAÇÕES COMPLEMENTARES-----------------------

//===================VALIDAÇÃO DE TODOS OS CAMPOS TELA 3_1================================
function validarTela3_1(){
    mensagemAlerta = "";
    let titulo = document.querySelector(".tela3__1__titulo").value;
    console.log("Titulo: " + titulo);
    let url = document.querySelector(".tela3__1__url").value;
    console.log("URL: " + url);
    qtdPerguntas = document.querySelector(".tela3__1__perguntas").value;
    console.log("Perguntas: " + perguntas);
    qtdNiveis = document.querySelector(".tela3__1__niveis").value;
    console.log("Níveis: " + qtdNiveis);

    let tituloValido = validarTitulo(titulo);
    let urlValida = validarURL(url);
    let perguntasValida = validarQtdPerguntas(qtdPerguntas);
    let niveisValido = validarQtdNiveis(qtdNiveis);

    if (mensagemAlerta !== "") {
        alert(mensagemAlerta);
    } 

    if(tituloValido && urlValida && perguntasValida && niveisValido){
        title = titulo;
        image = url;
        console.log("Tudo Válido");
        const paginaTela3_1 = document.querySelector(".tela3__1");
        paginaTela3_1.classList.add("escondido");
        const paginaTela3_2 = document.querySelector(".tela3__2");
        paginaTela3_2.classList.remove("escondido");
        geradorPerguntasQuizz(qtdPerguntas);
    }
}




//---------------FUNÇÕES DE VALIDAÇÕES COMPLEMENTARES-----------------------

//===================VALIDAÇÕES NA TELA 3_1================================
// Validação do TÍTULO no javaScrip
function validarTitulo (titulo) {
    if (titulo.length >= 20 && titulo.length <=65) {
       console.log(titulo + " é um título válido!");
       return true;
   } else {
       console.log(titulo + " NÃO é um título válido!");
       mensagemAlerta +="Insira um TÍTULO válido!";
       return false;
   }
}
// Validação da URL no javaScrip
function validarURL (url) {  
   return true; //paleativo
   if(validURL(url)) {
       console.log(url + " é uma URL válida");
       return true;
   } else {
       console.log(url + " NÃO é uma URL válida");
       mensagemAlerta += "\nInsira uma URL válida!";
       return false;
   }
}
// Valida URL - função pronta 
function validURL(str) {
   var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
     '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
     '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
     '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
     '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
     '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
   return !!pattern.test(str);
}

//Validação da quantidade de PERGUNTAS no javaScrip
function validarQtdPerguntas (perguntas) {
   if (perguntas >= 3) {
       console.log(perguntas + " é um nº de PERGUNTAS válidas");
       return true;
   } else {
       console.log(perguntas + " NÃO é um nº de PERGUNTAS válidas");
       mensagemAlerta += "\nInsira um nº de PERGUNTAS válidas! >= 3" ;
       return false;
   }
}

//Validação da quantidade de NIVEIS no javaScrip
function validarQtdNiveis (qtdNiveis) {
   if (qtdNiveis >= 2) {
       console.log(qtdNiveis + " é um nº de NÍVEIS válidos");
       return true;
   } else {
       console.log(qtdNiveis + " NÃO é um nº de NÍVEIS válidos");
       mensagemAlerta += "\nInsira um nº de NIVEIS válidos! >= 2";
       return false;
   }
}
