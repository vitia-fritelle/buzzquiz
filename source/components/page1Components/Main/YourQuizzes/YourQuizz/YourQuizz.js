const YourQuizz = ({id,image,title}) => {
    return `
    <li class="your-quizz">
        <div class='quizz-utilities'>
            <ion-icon onclick="window.editQuizz(${id})" name="create-outline"></ion-icon>
            <ion-icon onclick="window.deleteQuizz(${id})" name="trash-outline"></ion-icon>
        </div>
        <figure onclick="window.goToPage2(${id})">
            <img src="${image}" alt="quizz">
            <figcaption>${title}</figcaption>
        </figure>
    </li>
    `;
}
export default YourQuizz;