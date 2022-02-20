import correctAnswers from "../../../../../../../contexts/page2Contexts/CorrectAnswers/CorrectAnswers.js"

const Answer = ({image,isCorrectAnswer,text,quizzIndex,answerIndex}) => {

    isCorrectAnswer && correctAnswers.append({
        quizzIndex:quizzIndex,answerIndex:answerIndex
    });

    return `
    <li class="answer" onclick="window.chooseAnswer(this)" data-identifier="answer" id="${quizzIndex}-${answerIndex}">
        <figure>
            <img class="pointer" src="${image}" alt="option${answerIndex+1}">
            <figcaption>${text}</figcaption>
        </figure>                    
    </li>
    `;
};

export default Answer;