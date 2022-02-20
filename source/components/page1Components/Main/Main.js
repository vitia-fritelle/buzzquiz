import Quizzes from './Quizzes/Quizzes.js';
import YourQuizzes from './YourQuizzes/YourQuizzes.js';

const Main = (quizzes) => {
    
    const yourQuizzes = quizzes.filter(() => false);
    return `
    <main class='tela1'>
        ${YourQuizzes(yourQuizzes)}
        ${Quizzes(quizzes)}
    </main>
    `;
}
export default Main;