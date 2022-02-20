import YourQuizz from './YourQuizz/YourQuizz.js';
import Header from './Header/Header.js';

const YourQuizzes = (quizzes) => {
    
    const li = `<li class='your-quizz'>
                    <p>Você não criou nenhum quizz ainda :(</p>
                    <button onclick='window.goToPage3()'>Criar Quizz</button>
                </li>`;
    return `
    <div class="your-quizzes ${quizzes.length !== 0 && 'has-quizzes'}">
        ${Header()}
        <ul class="your-quizzes-list">
            ${quizzes.length === 0
              ?li
              :quizzes.reduce((acc,quizz) => acc+YourQuizz(quizz),'')}
        </ul>
    </div>
    `;
}
export default YourQuizzes;