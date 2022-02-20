import { getQuizzWithoutLoading } from '../adapters/page2Adapter.js';
import score from '../contexts/page2Contexts/Score/Score.js';
import correctAnswers from '../contexts/page2Contexts/CorrectAnswers/CorrectAnswers.js';
import Action from '../components/page2Components/Main/Action/Action.js';
import QuizzResult from '../components/page2Components/Main/Quizzes/QuizzResult/QuizzResult.js'

export const chooseAnswer = (element) => {

    const answers = Array.from(element.parentNode.querySelectorAll(".answer"));
    let nextElement;
    if(!hasWhiteScreen(answers)) {
        answers.filter((answer) => answer !== element)
               .forEach(turnWhiteScreen);
        answers.forEach(paintAnswers);
        score.increaseNumberOfAnswers();
        correctAnswers.isCorrectAnswer(element) 
        && score.increaseNumberOfCorrectAnswers();
        if(score.getNumberOfAnswers() === score.getNumberOfQuestions()){
            getQuizzWithoutLoading().then((response) => {
                
                addQuizzResult(response);
                addAction();
                nextElement = element.parentElement.parentElement.nextElementSibling;
                setTimeout(scrollTo,2000,nextElement);
            });
        } else {
            nextElement = element.parentElement.parentElement.nextElementSibling;
            setTimeout(scrollTo,2000,nextElement); 
        }        
    }
    return null;
};

const hasWhiteScreen = (answers) => {

    return answers.filter((answer) => {
        return answer.classList.contains("esbranquicado");
    }).length !== 0?true:false;
};

export const scrollTo = (element) => {

    try{
        element.scrollIntoView({
            block:"center",inline:"center",behavior:"smooth"
        });
    } catch(e) {
        //Erro dado na última rolagem do scroll
        if(!(e instanceof TypeError)) {
            throw e;
        }
    }
    return null;
};

const turnWhiteScreen = (element) => element.classList.add("esbranquicado");

const paintAnswers = (element) => {

    const caption = element.querySelector("figcaption"); 
    correctAnswers.isCorrectAnswer(element)
    ? caption.classList.add('correct') 
    : caption.classList.add('wrong');
    return null;
};

const addQuizzResult = ({data}) => {

    const main = document.querySelector('main');
    const ul = main.querySelector('.quizzes');
    const max =  Math.max(...data.levels
                                 .filter(({minValue}) => {
                                     return minValue <= score.getScore()
                                 }).map(({minValue}) => minValue));
    const li = document.createElement('li');
    li.innerHTML = (data.levels
                        .filter(({minValue}) => minValue === max)
                        .reduce((acc,curr) => acc+QuizzResult(curr),''));
    ul.appendChild(li);
    li.classList.add('result');
    li.setAttribute('data-identifier','quizz-result');
    return null;
};

const addAction = () => {
    
    const main = document.querySelector('main');
    const div = document.createElement('div');
    div.innerHTML = Action();
    main.appendChild(div);
    div.classList.add('action');
    return null;
}