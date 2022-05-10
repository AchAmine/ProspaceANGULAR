import { ForumReaction } from "./ForumReaction";
import { Post } from "./Post";
import { User } from "./User";

export class Post_Comment{
    idComment?: number;
    content?: string;
    postedAt?: Date;
    updatedAt?: Date;

    pComment?: Post_Comment;
    replies?:Post_Comment[];
    user?: User;
    post?:Post;

    // reactions?:ForumReaction[];

}