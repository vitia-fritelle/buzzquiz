import Answer from "./Answer/Answer.js";

const Answers = (answers,quizzIndex) => {

    return scramble(answers).reduce((acc,curr,answerIndex) => {
        return acc + Answer({...curr,quizzIndex,answerIndex}) 
    },'');
};

const scramble = (answers) => {

    const comparador = () => Math.random() - 0.5;
    const result = answers;
    result.sort(comparador);
    return result
};

export default Answers;