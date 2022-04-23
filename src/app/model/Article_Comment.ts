import { Article } from "./Article";
import { User } from "./User";

export class Article_Comment{
    idComment: number;
    content: string;
    postedAt: Date;
    updatedAt: Date;

    article: Article;
    user: User;
}