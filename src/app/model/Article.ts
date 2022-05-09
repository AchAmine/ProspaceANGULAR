import { ArticleType } from "../enum/ArticleType.enum";
import { Image } from "./Image";
import { User } from "./User";

export class Article{
    idArticle?: number;
    title?: string;
    content?: string;
    createdAt?: Date;
    updatedAt?: Date;
    views? : number;
    enableComments? : boolean;
    type?: ArticleType;

    image?: Image;
    user?: User;
}