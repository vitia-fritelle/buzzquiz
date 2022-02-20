const Tela1 = () => {
    return `
    <section class="tela3 tela3__1  ">
        <div class="titulo">
            <p>Comece pelo começo</p>
        </div>
        <form name="formulario__tela3__1" action="#">
            <div class="inputs cor__branco">
                <div class="input"><input class="tela3__1__titulo" type="text" placeholder="Título do seu quizz" minlength="20" maxlength="65" required></div>
                <div class="input"><input class="tela3__1__url" type="url" placeholder="URL da imagem do seu quizz" pattern="https://.*" required></div>
                <div class="input"><input class="tela3__1__perguntas" type="number" placeholder="Quantidade de perguntas do quizz" min="3" required></div>
                <div class="input"><input class="tela3__1__niveis" type="number" placeholder="Quantidade de níveis do quizz" min="2" required></div>
            </div>
            <div class="botao">
                <button type="button" onclick='window.validarTela3_1()'>Prosseguir pra criar perguntas</button> 
            </div>
        </form>
    </section>
    `;
}

export default Tela1;