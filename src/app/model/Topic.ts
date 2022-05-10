import { ForumReaction } from "./ForumReaction";
import { Post } from "./Post";
import { Section } from "./Section";
import { User } from "./User";

export class Topic{
    idTopic?: number;
    title?: string;
    description?: string;
    creationDate?: Date;
   
    views : number;
  // closed ? : boolean;

    section?: Section;
    user?: User;
    posts?:Post[];

    // reactions?:ForumReaction[];

}