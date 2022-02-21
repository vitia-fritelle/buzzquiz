export function Level() {
    this.title = null;
	this.image = null;
	this.text = null;
	this.minValue =  null;
}

export function Answer() {
    this.text = null;
    this.image = null;
    this.isCorrectAnswer = null;
}

const populateAnswers = () => {
    const respostas = [];
    for(let i = 0; i < 4; i++) {
        respostas.push(new Answer());
    }
    return respostas.map((answer,index) => {
        if(index === 0) {
            answer.isCorrectAnswer = true;
        } else {
            answer.isCorrectAnswer = false;
        }
        return answer
    })
};

export function Question() {
    this.title = null;
    this.color = null;
    this.answers = populateAnswers();
}

export function Quizz() {
    this.title = null;
    this.image = null;
    this.questions = [];
    this.levels = [];
}

const quizz = new Quizz();

export default quizz;


