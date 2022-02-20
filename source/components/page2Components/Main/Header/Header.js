const Header = ({title,image}) => {

    return `
    <header>
        <figure>
            <img src="${image}" alt="quizz">
            <figcaption>${title}</figcaption>
        </figure>
    </header>
    `;
};
export default Header;