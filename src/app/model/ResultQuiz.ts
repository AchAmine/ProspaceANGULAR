import { Quiz } from "./Quiz";
import { User } from "./User";

export class ResultQuiz {
    idResultQuizz?: number;
    score?: any;
    quizz?: Quiz;
    user?:User;
    correctAnswers?:number
    falseAnswers?:number
    nbreQuestions?:number

}