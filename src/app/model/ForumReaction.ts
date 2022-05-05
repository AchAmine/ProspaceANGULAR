import { ForumReactionType } from "../enum/ForumReactionType.enum";
import { Post } from "./Post";
import { Post_Comment } from "./Post_Comment";
import { Section } from "./Section";
import { Topic } from "./Topic";
import { User } from "./User";

export class ForumReaction{
    idReaction?: number;
    Rtype?: ForumReactionType;

    post?:Post;
    postComment?:Post_Comment;
    section?:Section;
    topic?:Topic;
    user?:User;
    


}