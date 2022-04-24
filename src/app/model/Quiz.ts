import { Question } from "./Question";
import { User } from "./User";

export class Quiz {
    idQuizz?: number;
    title?: string;
    description?: string;
    categorie?: string;
    nbQuestions?: number;
    Questions?: Question[];
    User?: User;
}