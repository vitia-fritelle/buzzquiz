import Answers from './Answers/Answers.js'

const Quizz = ({title,color,answers,quizzIndex}) => {
    
    return  `
    <li class="quizz" data-identifier="question">
        <header style="background-color:${color}">${title}</header>
        <ul class="answers">
        ${Answers(answers,quizzIndex)}
        </ul>
    </li>
    `;
};

export default Quizz;