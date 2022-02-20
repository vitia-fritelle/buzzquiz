import score from '../../../../../contexts/page2Contexts/Score/Score.js';

const QuizzResult = ({title, image, text}) => {
    
    return `
        <header style="background-color:#EC362D">${score.getScore()}% de acerto: ${title}</header>
        <figure>
            <img src="${image}" alt="imagem">
            <figcaption>${text}</figcaption>
        </figure>
        `;
};

export default QuizzResult;