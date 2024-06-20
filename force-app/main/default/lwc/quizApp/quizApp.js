import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {
    selected = {}; // for storing answers
    correctAnswers = 0;
    isSubmitted = false;

    myQuestions = [
        {
            id: "Question1",
            question: "Which one of the following is not a template loop",
            answers: {
                a: "for:each",
                b: "iterator",
                c: "map loop"
            },
            correctAnswer: "c"
        },
        {
            id: "Question2",
            question: "Which of the file is invalid in LWC component Folder",
            answers: {
                a: ".svg",
                b: ".apex",
                c: ".js"
            },
            correctAnswer: "b"
        },
        {
            id: "Question3",
            question: "Which one of the following is not a directive",
            answers: {
                a: "for:each",
                b: "if:true",
                c: "@track"
            },
            correctAnswer: "c"
        }
    ];

    // used for disabling submit buttons
    get allNotSelected() {
        return !(Object.keys(this.selected).length === this.myQuestions.length);
    }

    // for applying dynamic styling to our result
    get isScoredFull() {
        return `slds-text-heading_large ${this.myQuestions.length === this.correctAnswers ?
            'slds-text-color_success' : 'slds-text-color_error'}`;
    }

    // changeHandler gets called on every click on the options
    changeHandler(event) {
        const { name, value } = event.target; // similar to const name = event.target.name and const value = event.target.value
        this.selected = { ...this.selected, [name]: value };
    }

    // form submit handler
    submitHandler(event) {
        event.preventDefault();
        let correct = this.myQuestions.filter(item => this.selected[item.id] === item.correctAnswer);
        this.correctAnswers = correct.length;
        this.isSubmitted = true;
    }

    // form reset handler
    resethandler() {
        this.selected = {};
        this.correctAnswers = 0;
        this.isSubmitted = false;
    }
}
