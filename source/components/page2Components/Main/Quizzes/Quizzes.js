import Quizz from './Quizz/Quizz.js';

const Quizzes = ({questions}) => {

    return `
    <ul class="quizzes">
        ${questions.reduce((acc,curr,quizzIndex) => {
            return acc+Quizz({...curr,quizzIndex})
        },'')} 
    </ul>`;
};

export default Quizzes;