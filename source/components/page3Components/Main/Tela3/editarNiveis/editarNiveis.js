const editarNiveis = (index) => {
    return `
    <div class="editar__pergunta nivel${index+1}">
        <div>
            <span>Nível ${index+1}</span>
        </div>
        <div onclick='window.clickEditarNiveis(niveis[${index}], "nivel${index+1}", ${index})'>
            <img src="./assets/images/editar.svg" alt="editar">
        </div>    
    </div>
    
    `;
}

export default editarNiveis;