import { Offer } from "./Offer";
import { User } from "./User";

export class Rating{
    idRating: number;
    rate: number;

    user:User;
    offer:Offer;
}