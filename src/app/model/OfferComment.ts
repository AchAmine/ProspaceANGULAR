import { Offer } from "./Offer";
import { User } from "./User";
export class OfferComment{
    idOfferComment: number;
    content: string;
    postedAt: Date;
    updatedAt: Date;

    Offer: Offer;
    user: User;
}