import Header from '../components/page2Components/Header/Header.js';
import Main from '../components/page2Components/Main/Main.js';

const Page2 = ({data}) => {

    const body = document.querySelector("body");
    body.innerHTML = `
        ${Header()}
        ${Main(data)}
        <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
        <script type="module" src="https://cdn.jsdelivr.net/npm/ionicons/dist/ionicons/ionicons.esm.js"></script>
        <script nomodule src="https://cdn.jsdelivr.net/npm/ionicons/dist/ionicons/ionicons.js" ></script>
        <script src="./source/source.js" type="module"></script>
        <script src="./source/source2.js" type="module"></script>
    `;
};

export default Page2;