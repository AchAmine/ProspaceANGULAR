import { ReactionType } from "../enum/ReactionType.enum";
import { Article } from "./Article";
import { User } from "./User";

export class Reaction{
    idReaction?: number;
    type?: ReactionType

    article?: Article;
    user?: User;
}