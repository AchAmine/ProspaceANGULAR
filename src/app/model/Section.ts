import { ForumReaction } from "./ForumReaction";
import { Topic } from "./Topic";
import { User } from "./User";

export class Section{
    idSection?: number;
    name?: string;
    description?: string;
    
   user?:User;
   topics?: Topic[];
//    reactions?:ForumReaction[];

 
}