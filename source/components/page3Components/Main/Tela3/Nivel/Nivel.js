const Nivel = (index) => {
    return `
    <div class="conjunto__pergunta cor__branco niveis${index+1} ">
        <span>Nível ${index+1}</span>
        <div class="conjunto__inputs">
            <div class="input">
                <input onchange="window.writeLevelAttributes(this,${index},'title')" type="text" placeholder="Título do nível">
            </div>
            <div class="input">
                <input onchange="window.writeLevelAttributes(this,${index},'minValue')" type="text" placeholder="% de acerto mínima">
            </div>
            <div class="input">
                <input onchange="window.writeLevelAttributes(this,${index},'image')" type="text" placeholder="URL da imagem do nível">
            </div>
            <div class="input">
                <textarea onchange="window.writeLevelAttributes(this,${index},'text')" name="" id="" cols="30" rows="10" placeholder="Descrição do nível"></textarea>
            </div>
        </div>
    </div>
    `;
}
export default Nivel;