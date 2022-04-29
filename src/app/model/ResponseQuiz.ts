import { Answer } from "./Answer";
import { Quiz } from "./Quiz";
import { User } from "./User";

export class ResponseQuiz {
    idResponse?: number;
    selectedAnswers?: Answer[];
    quizz?: Quiz;
    user?:User;
  
}