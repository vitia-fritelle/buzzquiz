import getQuizz from '../../../adapters/page2Adapter.js';

/** 
* Função de arredondamento segundo NBR 5891
* @params float number
* @returns rounded number
*/
const arredonda = (x) => {

    const parteInteira = Math.trunc(x);
    const parteDecimal = x-Math.trunc(x);
    const primeiroDecimal = Math.trunc(10*parteDecimal);
    const outrosDecimais = parteDecimal - primeiroDecimal/10;

    if (primeiroDecimal > 5) {
        return parteInteira+1;
    } else if (primeiroDecimal < 5) {
        return parteInteira;
    } else {
        if (outrosDecimais !== 0) {
            return parteInteira+1;
        } else {
            if (parteInteira%2 === 0) {
                return parteInteira;
            } else {
                return parteInteira+1;
            }
        }
    }
};

function Score() {

    let _numberOfAnswers = 0.0;
    let _numberOfCorrectAnswers = 0.0;
    let _numberOfQuestions = 0.0;
    this.increaseNumberOfAnswers = () => _numberOfAnswers++;
    this.increaseNumberOfCorrectAnswers = () => _numberOfCorrectAnswers++;
    this.clearNumberOfAnswers = () => _numberOfAnswers = 0.0;
    this.clearNumberOfCorrectAnswers = () => _numberOfCorrectAnswers = 0.0;
    this.getNumberOfAnswers = () => _numberOfAnswers;
    this.getScore = () => {
        if(_numberOfAnswers !== 0) {
            return arredonda(_numberOfCorrectAnswers/_numberOfAnswers*100);
        } else {
            return 0;
        }
    };
    this.getNumberOfQuestions = () => _numberOfQuestions;
    this.setNumberOfQuestions = () => {
        getQuizz().then(({data}) => _numberOfQuestions = data.questions.length)
    }
};
const score = new Score();
export default score;