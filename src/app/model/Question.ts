import { Answer } from "./Answer";
import { Quiz } from "./Quiz";

export class Question {
    idQuestion?:number;
    content?:string;
    Quiz?:Quiz;
    Answers?: Answer[];

}