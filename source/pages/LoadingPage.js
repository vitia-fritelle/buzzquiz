import Header from '../components/loadingPageComponents/Header/Header.js';
import Animation from '../components/loadingPageComponents/Animation/Animation.js';

const LoadingPage = () => {
    
    const body = document.querySelector("body");
    body.innerHTML = `
    ${Header()}
    <main class="loading-page">
        <figure>
            ${Animation()}
            <figcaption>Carregando</figcaption>
        </figure>
    </main>
    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
    <script type="module" src="https://cdn.jsdelivr.net/npm/ionicons/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://cdn.jsdelivr.net/npm/ionicons/dist/ionicons/ionicons.js" ></script>
    <script src="./source/source.js" type="module"></script>
    <script src="./source/source2.js" type="module"></script>
    `;
}

export default LoadingPage;
