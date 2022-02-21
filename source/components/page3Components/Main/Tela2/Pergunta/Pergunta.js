const Pergunta = (index) => {
    return `
    <div class="conjunto__pergunta perguntas${index+1}">
        <span>Pergunta ${index+1}</span>
        <div class="conjunto__inputs">
            <div class="input texto__pergunta">
                <input onchange="window.writeQuestionAttributes(this,${index},'title')" type="text" placeholder="Texto da pergunta">
            </div>
            <div class="input cor__pergunta">
                <input onchange="window.writeQuestionAttributes(this,${index},'color')" type="text" placeholder="Cor de fundo da pergunta">
            </div>
        </div>
        <span>Resposta correta</span>
        <div class="conjunto__inputs">
            <div class="input resposta__correta">
                <input onchange="window.writeAnswerAttributes(this,${index},0,'text')" type="text" placeholder="Resposta correta">
            </div>
            <div class="input url__resposta__correta">
                <input onchange="window.writeAnswerAttributes(this,${index},0,'image')" type="text" placeholder="URL da imagem">
            </div>
        </div>
        <span>Respostas incorretas</span>
        <div class="conjunto__inputs">
            <div class="input resposta__incorreta1">
                <input onchange="window.writeAnswerAttributes(this,${index},1,'text')" type="text" placeholder="Resposta incorreta 1">
            </div>
            <div class="input url__resposta__incorreta1">
                <input onchange="window.writeAnswerAttributes(this,${index},1,'image')" type="text" placeholder="URL da imagem 1">
            </div>
        </div>
        <div class="conjunto__inputs">
            <div class="input resposta__incorreta2">
                <input onchange="window.writeAnswerAttributes(this,${index},2,'text')" type="text" placeholder="Resposta incorreta 2">
            </div>
            <div class="input url__resposta__incorreta2">
                <input onchange="window.writeAnswerAttributes(this,${index},2,'image')" type="text" placeholder="URL da imagem 2">
            </div>
        </div>
        <div class="conjunto__inputs">
            <div class="input resposta__incorreta3">
                <input onchange="window.writeAnswerAttributes(this,${index},3,'text')" type="text" placeholder="Resposta incorreta 3">
            </div>
            <div class="input url__resposta__incorreta3">
                <input onchange="window.writeAnswerAttributes(this,${index},3,'image')" type="text" placeholder="URL da imagem 3">
            </div>
        </div>
    </div>
    `;
}
export default Pergunta;