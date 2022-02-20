import getQuizzes from './adapters/page1Adapter.js';
import Page1 from './pages/Page1.js';

export const goToPage1 = () => {
    getQuizzes().then((response) => {
        Page1(response);
        window.scrollTo(0, 0);
    });
}

window.goToPage1 = goToPage1;

goToPage1();