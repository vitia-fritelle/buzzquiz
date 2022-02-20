import Header from './Header/Header.js'
import Quizzes from './Quizzes/Quizzes.js'

const Main = (data) => {
    return `
    <main class="tela2">
        ${Header(data)}
        ${Quizzes(data)}
    </main>
    `;
};

export default Main;