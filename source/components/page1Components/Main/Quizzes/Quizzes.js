import Header from './Header/Header.js';
import Quizz from './Quizz/Quizz.js';

const Quizzes = (quizzes) => {
    return `
    <div class="quizzes">
        ${Header()}
        <ul class="quizzes-list">
            ${quizzes.reduce((acc,quizz) => acc+Quizz(quizz),'')}
        </ul>
    </div>
    `;
}
export default Quizzes;