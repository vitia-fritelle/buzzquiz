import { goToPage2 } from '../../../../source.js';
import correctAnswers from '../../../../contexts/page2Contexts/CorrectAnswers/CorrectAnswers.js';
import { scrollTo } from '../../../../services/page2Services.js';
import id from '../../../../contexts/page2Contexts/Id/Id.js';
import score from '../../../../contexts/page2Contexts/Score/Score.js';

const Action = () => {

    return `
        <button class="restart-button" onclick="window.restartQuizz()">Reiniciar Quizz</button>
        <button class="return-home" onclick="window.goToPage1()">Voltar pra Home</button>
    `;
};

const restartQuizz = () => {

    score.clearNumberOfAnswers();
    score.clearNumberOfCorrectAnswers();
    correctAnswers.clearList();
    goToPage2(id.getId());
    const main = document.querySelector('main');
    const topo = main.querySelector('header');
    scrollTo(topo);
    return null;
}

window.restartQuizz = restartQuizz;

export default Action;