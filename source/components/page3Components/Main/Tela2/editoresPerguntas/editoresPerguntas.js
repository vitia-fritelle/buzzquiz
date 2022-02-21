const editoresPerguntas = (index) => {
    return `
    <div class="editar__pergunta pergunta${index+1}">
        <div>
            <span>Pergunta ${index+1}</span>
        </div>
        <div onclick='window.clickEditarPerguntas(${index})'>
            <img src="./assets/images/editar.svg" alt="editar">
        </div>    
    </div>
    `;
}

export default editoresPerguntas;