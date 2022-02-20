import Tela1 from "./Tela1/Tela1.js";
import Tela2 from "./Tela2/Tela2.js";
import Tela3 from "./Tela3/Tela3.js";
import Tela4 from "./Tela4/Tela4.js";

const Main = () => {
    return `
    <main class="page3">
        ${Tela1()}
        ${Tela2()}
        ${Tela3()}
        ${Tela4()}
    </main>
    `;
}
export default Main;