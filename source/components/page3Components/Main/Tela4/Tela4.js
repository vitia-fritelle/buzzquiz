import Header from "../../Header/Header.js";
import quizz from "../../../../contexts/page3Contexts/page3Contexts.js";

const Tela4 = () => {
    const body = document.querySelector('body');
    body.innerHTML = `
        ${Header()}
        <main class="page3">
            <section class="tela3 tela3__4">
                <div class="titulo">
                    <p>Seu quizz está pronto!</p>
                </div>
                <div class="tela3__4__img">
                    <img src="${quizz.image}" alt="imagem do quizz">
                </div>
                <div class="botao">
                    <button onclick = "window.goToPage2(${quizz.id})">Acessar Quizz</button>
                </div>
                <div class="voltar__home">
                    <span onclick = "window.goToPage1()">Voltar pra home</span>
                </div>
            </section>
        </main>
        <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
        <script type="module" src="https://cdn.jsdelivr.net/npm/ionicons/dist/ionicons/ionicons.esm.js"></script>
        <script nomodule src="https://cdn.jsdelivr.net/npm/ionicons/dist/ionicons/ionicons.js"></script>
        <script src="./source/source.js" type="module"></script>
        <script src="./source/source2.js" type="module"></script>
    `;
}
export default Tela4;