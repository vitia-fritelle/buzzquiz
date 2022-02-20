
const Quizz = ({id,image,title}) => {
    return `
    <li class="quizz">
        <figure onclick="window.goToPage2(${id})">
            <img src="${image}" alt="quizz">
            <figcaption>${title}</figcaption>
        </figure>
    </li>
    `;
}
export default Quizz;

