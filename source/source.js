import id from './contexts/page2Contexts/Id/Id.js';
import score from './contexts/page2Contexts/Score/Score.js';
import getQuizz from './adapters/page2Adapter.js';
import Page2 from './pages/Page2.js';
import {chooseAnswer} from './services/page2Services.js';
import getQuizzes from './adapters/page1Adapter.js';
import Page1 from './pages/Page1.js';

export const goToPage1 = () => {
    getQuizzes().then((response) => {
        Page1(response);
        window.scrollTo(0, 0);
    });
}

export const goToPage2 = (numero) => {
    id.setId(numero);
    score.setNumberOfQuestions();
    getQuizz().then((response) => {
        Page2(response); 
        window.scrollTo(0, 0);
    });
    return null;
}

export const goToPage3 = () => {
    Page3();
    window.scrollTo(0, 0);
    return null;
}

window.goToPage1 = goToPage1;
window.goToPage2 = goToPage2;
window.goToPage3 = goToPage3;
window.chooseAnswer = chooseAnswer;
window.goToPage1 = goToPage1;

goToPage1();

