import { User } from "./User";

export class Quiz {
    idResultQuizz?: number;
    score?: Float32Array;
    quizz?: Quiz;
    user?:User;
    correctAnswers?:number
    falseAnswers?:number
    nbreQuestions?:number

}