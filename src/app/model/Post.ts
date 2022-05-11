import { ForumReaction } from "./ForumReaction";
import { Post_Comment } from "./Post_Comment";
import { Section } from "./Section";
import { Topic } from "./Topic";
import { User } from "./User";

export class Post{
    idPost?: number;
    title?: string;
    content?: string;
    createdAt?: Date;
    updatedAt?: Date;
    enableComments? : boolean;

   

    topic?: Topic;
    user?: User;
    // reactions?:ForumReaction[];

}