// DECLARAÇÕES DE VARIÁVEIS 
import quizz, { Level, Question } from './contexts/page3Contexts/page3Contexts.js';
import {axiosInstance, loadingInterceptor} from './adapters/axiosUtils.js';
import Pergunta from './components/page3Components/Main/Tela2/Pergunta/Pergunta.js';
import Nivel from './components/page3Components/Main/Tela3/Nivel/Nivel.js';
import Tela4 from './components/page3Components/Main/Tela4/Tela4.js';

//===================TELA 3_1================================

const writeQuizzAttribute = (element,attribute) => {
    
    const attributes = {
        "title": () => quizz.title = element.value,
        "image": () => quizz.image = element.value,
        "questions": () => {
            const numberOfQuestions = parseInt(element.value);
            quizz.questions = [];
            for(let i = 0; i < numberOfQuestions; i++) {
                quizz.questions.push(new Question());
            }
        },
        "levels": () => {
            const numberOfLevels = parseInt(element.value);
            quizz.levels = [];
            for(let i = 0; i < numberOfLevels; i++) {
                quizz.levels.push(new Level());
            }
        }
    };
    attributes[attribute]();
    return null;
}

// Validação do TÍTULO no javaScript
function validarTitulo () {

    return quizz.title.length >= 20 && quizz.title.length <=65;
}
// Validação da URL no javaScript
function validarURL () {  
   return true; //paleativo
   if(validURL(quizz.image)) {
       console.log(quizz.image + " é uma URL válida");
       return true;
   } else {
       console.log(quizz.image + " NÃO é uma URL válida");
       global.mensagemAlerta += "\nInsira uma URL válida!";
       return false;
   }
}
function isValidHttpUrl(string) {
    let url;
    try {
      url = new URL(string);
    } catch (_) {
      return false;  
    }
    return url.protocol === "http:" || url.protocol === "https:";
  }
// Valida URL - função pronta 
function validURL() {
    const pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
     '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
     '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
     '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
     '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
     '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    return pattern.test(quizz.image);
}

//Validação da quantidade de PERGUNTAS no javaScript
function validarQtdPerguntas () {
    return quizz.questions.length >= 3;
}

//Validação da quantidade de NIVEIS no javaScript
function validarQtdNiveis () {
    return quizz.levels.length >= 2;
}

function validarTela3_1() {

    const tituloValido = validarTitulo();
    const urlValida = validURL();
    const perguntasValida = validarQtdPerguntas();
    const niveisValido = validarQtdNiveis();
    if(tituloValido && urlValida && perguntasValida && niveisValido){
        const paginaTela3_1 = document.querySelector(".tela3__1");
        paginaTela3_1.classList.add("escondido");
        const paginaTela3_2 = document.querySelector(".tela3__2");
        paginaTela3_2.classList.remove("escondido");
        renderizarPerguntaNaTela();
        renderizarNivelNaTela();
    }
    return null;
}

//===================TELA 3_2================================
const writeQuestionAttributes = (element,index,attribute) => {

    const attributes = {
        "title": () => quizz.questions[index].title = element.value,
        "color": () => quizz.questions[index].color = element.value
    }
    attributes[attribute]();
    return null;
}

const writeAnswerAttributes = (element,questionIndex,answerIndex,attribute) => {

    const attributes = {
        "text": () => {
            quizz.questions[questionIndex]
                 .answers[answerIndex].text = element.value
        },
        "image": () => {
            quizz.questions[questionIndex]
                 .answers[answerIndex].image = element.value
        }
    }
    attributes[attribute]();
    return null;
}

function validarQuestao({title,color,answers}) {

    const isTextValid = validarTituloPergunta(title);
    const isColorValid = validarCorHexadecimal(color);
    const areAnswersValid = answers.every(validarResposta);
    return isTextValid && isColorValid && areAnswersValid;   
}
    
function validarTituloPergunta(tituloPergunta) {

    return tituloPergunta.length >= 20;
}

function validarCorHexadecimal(cor){

    const pattern = new RegExp('#[0-9a-fA-F]{6}');
    return pattern.test(cor);
}

function validarResposta({text,image}) {

    return validarTextoResposta(text) && validURL(image);
}

function validarTextoResposta (textoResposta) {

    return !(textoResposta === null || textoResposta === "" 
           || textoResposta.length <= 0);
}

function renderizarPerguntaNaTela() {
    const telaDePerguntas = document.querySelector(".tela3__2 .inputs");
    quizz.questions.forEach((_,index)=>{
        telaDePerguntas.innerHTML += Pergunta(index);
    })
    return null;
}

function validarTela3_2(){

    const questions = quizz.questions;
    const areQuestionsValid = questions.every(validarQuestao);
    if(areQuestionsValid){
        const paginaTela3_2 = document.querySelector(".tela3__2");
        paginaTela3_2.classList.add("escondido");
        const paginaTela3_3 = document.querySelector(".tela3__3");
        paginaTela3_3.classList.remove("escondido");
    }
}

//===================TELA 3_3================================
function validarTela3_3() {

    validarNiveis() && enviarQuizz();
    return null; 
}

const writeLevelAttributes = (element,index,attribute) => {

    const attributes = {
        "title": () => quizz.levels[index].title = element.value,
        "image": () => quizz.levels[index].image = element.value,
        "text": () => quizz.levels[index].text = element.value,
        "minValue": () => quizz.levels[index].minValue = parseInt(element.value)
    }
    attributes[attribute]();
    return null;
}

function validarNiveis() {

    const levels = quizz.levels;
    return levels.every(({title,image,text,minValue}) => {
        const isTitleValid = validarTituloNivel(title);
        const isImageValid = validURL(image);
        const isTextValid = validarDescricaoNivel(text);
        const isValueValid = validarPercentagem(minValue);
        return isTitleValid && isImageValid && isTextValid && isValueValid;
    })
}

function validarTituloNivel (tituloNivel) {
    return tituloNivel.length >= 10;
}

function validarPercentagem (percentagem) {
    return percentagem >= 0 && percentagem <= 100;
}

function validarDescricaoNivel (descricaoNivel) {
    return descricaoNivel.length >= 30;
}

function renderizarNivelNaTela () {

    const telaDeNiveis = document.querySelector(".tela3__3 .inputs");
    quizz.levels.forEach((_,index) => {
        telaDeNiveis.innerHTML += Nivel(index);
    });
    return null;
}

//---------------FUNÇÕES DE ENVIOS (POST) NA API-----------------------

function enviarQuizz () {
    const myInstance = axiosInstance();
    loadingInterceptor(myInstance);
    myInstance.post({data:quizz}).then(tratarSucesso).catch(tratarError);
    return null;   
}

function tratarSucesso ({data}) {

    quizz.id = data.id;
    const idStorage = serializar(data.id);
    const objetoStorage = serializar(data);
    localStorage.setItem(idStorage, objetoStorage); //GRAVA NO LOCAL STORAGE
    Tela4();
}

function tratarError (error) {

    alert("Quizz não cadastrado!");
    alert(error);
}

function serializar (objeto) {
    return JSON.stringify(objeto);
}

export function deserializar (dadosSerializados) {
    return JSON.parse(dadosSerializados);
}

//=====================Colocar os onclicks no objeto global window=======
window.validarTela3_1 = validarTela3_1;
window.writeQuizzAttribute = writeQuizzAttribute;
window.validarTela3_2 = validarTela3_2;
window.writeQuestionAttributes = writeQuestionAttributes;
window.writeAnswerAttributes = writeAnswerAttributes;
window.validarTela3_3 = validarTela3_3; 
window.writeLevelAttributes = writeLevelAttributes;