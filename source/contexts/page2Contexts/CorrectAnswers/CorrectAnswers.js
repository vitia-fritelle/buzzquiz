function CorrectAnswers() {
    
    let _list = [];
    this.append = (position) => _list.push(position);
    this.clearList = () => _list = [];
    this.getList = () => _list;
    this.isCorrectAnswer = (element) => {

        const [quizzIndex,answerIndex] = (element.id.split('-'));
        return _list.filter((item) => {
            return item.quizzIndex === parseInt(quizzIndex) 
                   && item.answerIndex === parseInt(answerIndex);
        }).length > 0; 
    };
};

const correctAnswers = new CorrectAnswers();
export default correctAnswers;