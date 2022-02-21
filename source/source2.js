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
    console.log("Perguntas: " + qtdPerguntas);
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

//===================VALIDAÇÃO DE TODOS OS CAMPOS TELA 3_2================================
function validarTela3_2(){
    questoesSemValidar = [];
    questions = [];
    for(let i = 0; i < qtdPerguntas; i++){
        capturarCampoDigitadoPergunta(i);
        validarQuestao(questoesSemValidar[i]);
    }
    if(questions.length == qtdPerguntas){
        console.log("Questões Válidas");
        const paginaTela3_2 = document.querySelector(".tela3__2");
        paginaTela3_2.classList.add("escondido");
        const paginaTela3_3 = document.querySelector(".tela3__3");
        paginaTela3_3.classList.remove("escondido");
        geradorNiveisQuizz(qtdNiveis);

    } else {
        alert("Há perguntas não validadas! Verique e tente novamente");
    }
}

//===================VALIDAÇÃO DE TODOS OS CAMPOS TELA 3_3================================
function validarTela3_3(){
    niveisSemValidar = [];
    levels = [];
    for(let i = 0; i < qtdNiveis; i++){
        capturarCampoDigitadoNivel(i);
        validarNiveis(niveisSemValidar[i]);
    }
    if(levels.length == qtdNiveis){
        console.log("Níveis Válidos");

        quizz = {
            title: title,
            image: image,
            questions: questions,
            levels: levels
        }
        enviarQuizz ();   

    } else {
        alert("Há níveis não validados! Verique e tente novamente");
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

//===================VALIDAÇÕES NA TELA 3_2================================

function validarQuestao(questaoAValidar) {
    let respostasValidadas = [];
    let existeRespostaCorreta = 0;
    let existeRespostaIncorreta = 0;
    let isValidoTituloPergunta = validarTituloPergunta(questaoAValidar.title);
    let isValidoCorDeFundoPergunta = validarCorHexadecimal(questaoAValidar.color);

    questaoAValidar.answers.forEach(resposta => {
        if (validarResposta(resposta)){
            respostasValidadas.push(resposta);
            if(resposta.isCorrectAnswer){
                existeRespostaCorreta++;
            } else {
                existeRespostaIncorreta++;
            }
        }
    });

    if(isValidoTituloPergunta && isValidoCorDeFundoPergunta){
        console.log("Título e Cor da questão Validadas!");
        if(existeRespostaCorreta > 0){
            console.log("Existe resposta correta Validada!");
            if(existeRespostaIncorreta > 0){
                console.log("Existe " + existeRespostaIncorreta + " resposta incorreta Validada!");
                let questoesValidadas = {
                    title: questaoAValidar.title,
                    color: questaoAValidar.color,
                    answers: respostasValidadas
                }
                questions.push(questoesValidadas)
                console.log("OBJETO ADICIONADO!");
                console.log(questions);
            }
        }
    } 
}

function validarTituloPergunta (tituloPergunta) {
    if (tituloPergunta.length >= 20) {
       console.log(tituloPergunta + " é um TÍTULO DA PERGUNTA válido!");
       return true;
   } else {
       console.log(tituloPergunta + " NÃO é um TÍTULO DA PERGUNTA válido!");
    //    mensagemAlerta +="Insira um TÍTULO válido!";
       return false;
   }
}

function validarCorHexadecimal(cor){
    let pattern = new RegExp('#[0-9a-fA-F]{6}');
    return !!pattern.test(cor);
}

function validarResposta (objetoResposta){
    let isValidarTextoResposta = validarTextoResposta(objetoResposta.text);
    let isValidarURL = validarURL(objetoResposta.image);
    if (isValidarTextoResposta && isValidarURL){
        console.log("Resposta Válida");
        return true;
    }
    else {
        return false;
    }
}

function validarTextoResposta (textoResposta) {
    if (textoResposta === null || textoResposta === "" || textoResposta.length <= 0) {
        console.log(textoResposta + " NÃO é um TEXTO DA RESPOSTA válido!");
        return false;       
   } else {
        console.log(textoResposta + " é um TEXTO DA RESPOSTA válido!");
        console.log("TAMANHO do texto : " + textoResposta.length);
        return true;
   }
}

//===================VALIDAÇÕES NA TELA 3_3================================

function validarNiveis(nivelAValidar) {
    let isValidoTituloNivel = validarTituloNivel(nivelAValidar.title);
    let isValidoValorMinimo = validarPercentagem(nivelAValidar.minValue);
    let isValidoUrlImagem = validarURL(nivelAValidar.image);
    let isValidoDescricao = validarDescricaoNivel(nivelAValidar.text);

    if (isValidoTituloNivel && isValidoValorMinimo && isValidoUrlImagem && isValidoDescricao){
        let nivelValidado = nivelAValidar;
        levels.push(nivelValidado);
        console.log("LEVEL ADICIONADO");
    } else {
        console.log("Há campos inválidados!");
    }
}

function validarTituloNivel (tituloNivel) {
    if (tituloNivel.length >= 10) {
       return true;
   } else {
       return false;
   }
}

function validarPercentagem (percentagem) {
    if (percentagem >= 0 && percentagem <= 100) {
       return true;
   } else {
       return false;
   }
}

function validarDescricaoNivel (descricaoNivel) {
    if (descricaoNivel.length >= 30) {
       return true;
   } else {
       return false;
   }
}

//---------------FUNÇÕES GERADORAS E REDENRIZADORAS DE CONTEÚDOS-----------------------

//===================GERADORA DA TELA 3_2================================
function geradorPerguntasQuizz (numeroPerguntas) {

    for (let i = 0; i < numeroPerguntas; i++){
        editarPerguntas[i] = `
        <div class="editar__pergunta pergunta${i+1}">
                <div>
                    <span>Pergunta ${i+1}</span>
                </div>
                <div onclick='window.clickEditarPerguntas(perguntas[${i}], "pergunta${i+1}", ${i})'>
                    <img src="./assets/images/editar.svg" alt="editar">
                </div>    
        </div>
        `;
        perguntas[i] = `
            <div class="conjunto__pergunta perguntas${i+1}">
                <span>Pergunta ${i+1}</span>
                <div class="conjunto__inputs">
                    <div class="input texto__pergunta"><input type="text" placeholder="Texto da pergunta"></div>
                    <div class="input cor__pergunta"><input type="text" placeholder="Cor de fundo da pergunta"></div>
                </div>
                <span>Resposta correta</span>
                <div class="conjunto__inputs">
                    <div class="input resposta__correta"><input type="text" placeholder="Resposta correta"></div>
                    <div class="input url__resposta__correta"><input type="text" placeholder="URL da imagem"></div>
                </div>
                <span>Respostas incorretas</span>
                <div class="conjunto__inputs">
                    <div class="input resposta__incorreta1"><input type="text" placeholder="Resposta incorreta 1"></div>
                    <div class="input url__resposta__incorreta1"><input type="text" placeholder="URL da imagem 1"></div>
                </div>
                <div class="conjunto__inputs">
                    <div class="input resposta__incorreta2"><input type="text" placeholder="Resposta incorreta 2"></div>
                    <div class="input url__resposta__incorreta2"><input type="text" placeholder="URL da imagem 2"></div>
                </div>
                <div class="conjunto__inputs">
                    <div class="input resposta__incorreta3"><input type="text" placeholder="Resposta incorreta 3"></div>
                    <div class="input url__resposta__incorreta3"><input type="text" placeholder="URL da imagem 3"></div>
                </div>
            </div>
        ` ;
    }
    redenrizarEditarPerguntas(editarPerguntas);
}

//===================REDENRIZADORA DA TELA 3_2================================
function redenrizarEditarPerguntas (editarPerguntas) {
    const telaDePerguntas = document.querySelector(".tela3__2 .editores__perguntas");
    editarPerguntas.forEach(editarPergunta => {
        telaDePerguntas.innerHTML += editarPergunta;
    });
}

function clickEditarPerguntas (pergunta, classeEditarPergunta, index) {
    if (index > 0){
        questoesSemValidar = [];
        for (let i= 0; i < index; i++){
            capturarCampoDigitadoPergunta(i);
        }
    }
    redendizarPerguntaNaTela (pergunta, classeEditarPergunta);
    if (index > 0){
        for (let i= 0; i < index; i++){
            inserirCampoDigitadoPergunta(i);
        }
    }
}

function redendizarPerguntaNaTela (pergunta, classeEditarPergunta) {
    const telaDePerguntas = document.querySelector(".tela3__2 .inputs");
    telaDePerguntas.innerHTML += pergunta;
    const divEditarPergunta = document.querySelector("." + classeEditarPergunta);
    divEditarPergunta.classList.remove("editar__pergunta");
    divEditarPergunta.classList.remove(classeEditarPergunta);
    divEditarPergunta.classList.add("escondido");
    console.log("PERGUNTA: " + pergunta);
}

//===================GERADORA DA TELA 3_3================================
function geradorNiveisQuizz (qtdNiveis) {
    let editarNiveis = [];
    for (let i = 0; i < qtdNiveis; i++){
        editarNiveis[i] = `
            <div class="editar__pergunta nivel${i+1}">
                <div>
                    <span>Nível ${i+1}</span>
                </div>
                <div onclick='window.clickEditarNivies(niveis[${i}], "nivel${i+1}", ${i})'>
                    <img src="./assets/images/editar.svg" alt="editar">
                </div>    
            </div>
        `;
        niveis[i] = `
            <div class="conjunto__pergunta cor__branco niveis${i+1} ">
                <span>Nível ${i+1}</span>
                <div class="conjunto__inputs">
                    <div class="input"><input type="text" placeholder="Título do nível"></div>
                    <div class="input"><input type="text" placeholder="% de acerto mínima"></div>
                    <div class="input"><input type="text" placeholder="URL da imagem do nível"></div>
                    <div class="input"><textarea name="" id="" cols="30" rows="10" placeholder="Descrição do nível"></textarea></div>
                </div>
            </div>
        `
    }
    redenrizarEditarNiveis(editarNiveis);
}
//===================REDENRIZADORAS DA TELA 3_3================================
function redenrizarEditarNiveis (editarNiveis) {
    const telaDeNiveis = document.querySelector(".tela3__3 .editores__perguntas");
    editarNiveis.forEach(editarNiveis => {
        telaDeNiveis.innerHTML += editarNiveis;
    });
}

function clickEditarNivies (nivel, classeEditarNiveis, index) {
    if (index > 0){
        niveisSemValidar = [];
        for (let i= 0; i < index; i++){
            capturarCampoDigitadoNivel(i);
        }
    }
    redendizarNivelNaTela(nivel, classeEditarNiveis)
    if (index > 0){
        for (let i= 0; i < index; i++){
            inserirCampoDigitadoNivel(i);
        }
    }
}

function redendizarNivelNaTela (nivel, classeEditarNiveis) {
    const telaDeNiveis = document.querySelector(".tela3__3 .inputs");
    telaDeNiveis.innerHTML += nivel;
    const divEditarNiveis = document.querySelector("." + classeEditarNiveis);
    divEditarNiveis.classList.remove("editar__pergunta");
    divEditarNiveis.classList.remove(classeEditarNiveis);
    divEditarNiveis.classList.add("escondido");
    console.log("NIVEIS: " + nivel);
}

//===================REDENRIZADORAS E GERADORA DA TELA 3_4================================
function renderizaTela3__4 () {
    const paginaTela3_3 = document.querySelector(".tela3__3");
    paginaTela3_3.classList.add("escondido");
    const paginaTela3_4 = document.querySelector(".tela3__4");
    paginaTela3_4.classList.remove("escondido");
    geradorConteudoTela3_4();

}
function geradorConteudoTela3_4 (){
    const imagemTela3_4 = document.querySelector(".tela3__4 .tela3__4__img");
    imagemTela3_4.innerHTML = `<img src=${quizz.image} alt="imagem do quizz">`;
    const botaoTela3_4 = document.querySelector(".tela3__4 .botao");
    botaoTela3_4.innerHTML = `<button onclick = "window.goToPage2(${idQuizz})">Acessar Quizz</button>`;
    const voltarHomeTela3_4 = document.querySelector(".tela3__4  .voltar__home");
    voltarHomeTela3_4.innerHTML = `<span onclick = "window.goToPage1()">Voltar pra home</span>`;
}

//---------------FUNÇÕES DE CAPTURA DE INPUTS-----------------------

//===================CAPTURA DE CONTEÚNDO DA TELA 3_2================================
function capturarCampoDigitadoPergunta(index){
    let respostas = [];
    let divPerguntas = `.perguntas${index+1}`;

    const textoPergunta = document.querySelector(divPerguntas + " .texto__pergunta input");
    console.log("Texto Pergunta: " + textoPergunta.value);
    const corDeFundoPergunta = document.querySelector(divPerguntas + " .cor__pergunta input");
    console.log("Cor Pergunta: " + corDeFundoPergunta.value);
    const respostaCorreta = document.querySelector(divPerguntas + " .resposta__correta input");
    console.log("Resposta Correta: " + respostaCorreta.value);
    const urlRespostaCorreta = document.querySelector(divPerguntas + " .url__resposta__correta input");
    console.log("URL Resposta Correta: " + urlRespostaCorreta.value);

    let objetoRespostaCorreta = 
    {
        text: respostaCorreta.value,
        image: urlRespostaCorreta.value,
        isCorrectAnswer: true
    };
    respostas.push(objetoRespostaCorreta);
    for (let i = 1; i <=3; i++) {
        let classeRespostaIncorreta = ` .resposta__incorreta${i}`;
        let classeUrlRespostaIncorreta = ` .url__resposta__incorreta${i}`;

        let respostaIncorreta = document.querySelector(divPerguntas + classeRespostaIncorreta + " input");
        console.log("Resposta Incorreta " + i + ": " + respostaIncorreta.value);
        let urlRespostaIncorreta = document.querySelector(divPerguntas + classeUrlRespostaIncorreta + " input");
        console.log("URL Resposta Incorreta "  + i + ": " +  urlRespostaIncorreta.value);

        let objetoRespostaInCorreta = 
        {
            text: respostaIncorreta.value,
            image: urlRespostaIncorreta.value,
            isCorrectAnswer: false
        };
        respostas.push(objetoRespostaInCorreta);
    }

    console.log(respostas);

    let questao = {
        title: textoPergunta.value,
        color: corDeFundoPergunta.value,
        answers: respostas
    }
    questoesSemValidar.push(questao);
}
//===================INSERÇÃO DE CONTEÚNDO DA TELA 3_2================================
function inserirCampoDigitadoPergunta(index){
    let divPerguntas = `.perguntas${index+1}`;
    let vetorInputs = document.querySelectorAll(divPerguntas + " input");
    console.log(vetorInputs);
    console.log()
    vetorInputs[0].value = questoesSemValidar[index].title;
    vetorInputs[1].value = questoesSemValidar[index].color;
    vetorInputs[2].value = questoesSemValidar[index].answers[0].text;
    vetorInputs[3].value = questoesSemValidar[index].answers[0].image;
    vetorInputs[4].value = questoesSemValidar[index].answers[1].text;
    vetorInputs[5].value = questoesSemValidar[index].answers[1].image;
    vetorInputs[6].value = questoesSemValidar[index].answers[2].text;
    vetorInputs[7].value = questoesSemValidar[index].answers[2].image;
    vetorInputs[8].value = questoesSemValidar[index].answers[3].text;
    vetorInputs[9].value = questoesSemValidar[index].answers[3].image;
}

//===================CAPTURA DE CONTEÚNDO DA TELA 3_3================================
function capturarCampoDigitadoNivel (index){
    let divNiveis = `.niveis${index+1}`;
    let inputsNivel = document.querySelectorAll(divNiveis + " input");
    let textareaNivel = document.querySelectorAll(divNiveis + " textarea");
    console.log(divNiveis);
    console.log(inputsNivel);

    let nivel = {
        title: inputsNivel[0].value,
        minValue: inputsNivel[1].value,
		image: inputsNivel[2].value,
		text: textareaNivel[0].value
    }

    niveisSemValidar.push(nivel);
}

//===================INSERÇÃO DE CONTEÚNDO DA TELA 3_3================================
function inserirCampoDigitadoNivel(index){
    let divNiveis = `.niveis${index+1}`;
    let vetorInputs = document.querySelectorAll(divNiveis + " input");
    let vetorNivel = document.querySelectorAll(divNiveis + " textarea");

    vetorInputs[0].value = niveisSemValidar[index].title;
    vetorInputs[1].value = niveisSemValidar[index].minValue;
    vetorInputs[2].value = niveisSemValidar[index].image;
    vetorNivel[0].value = niveisSemValidar[index].text;
}

//---------------FUNÇÕES DE ENVIOS (POST) NA API-----------------------

function enviarQuizz () {
    const requisicao = axios.post('https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes', quizz);
    requisicao.then(tratarSucesso);
    requisicao.catch(tratarError);   
}

function tratarSucesso (resposta) {
    alert("Quizz Cadastrado com Sucesso!");
    console.log (resposta);
    idQuizz = resposta.data.id;
    keyQuizz = resposta.data.key;
    const idStorage = serializar(idQuizz);
    const objetoStorage = serializar(resposta);
    localStorage.setItem(idStorage, objetoStorage); //GRAVA NO LOCAL STORAGE
    renderizaTela3__4();
}

function tratarError (erro) {
    alert("Quizz não cadastrado!");
    console.log("ERRO " + erro);
}

function serializar (objeto) {
    const dadosSerializados = JSON.stringify(objeto);
    return dadosSerializados;
}

function deserializar (dadosSerializados) {
    const dadosDeserializados = JSON.parse(dadosSerializados);
    return dadosDeserializados;
}

//=====================Colocar os onclicks no objeto global window====================
window.validarTela3_1 = validarTela3_1;
window.validarTela3_2 = validarTela3_2;
window.validarTela3_3 = validarTela3_3; 
window.clickEditarPerguntas = clickEditarPerguntas;
window.clickEditarNivies = clickEditarNivies;