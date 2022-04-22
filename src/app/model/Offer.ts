import { Image } from "./Image";
import { Rating } from "./Rating";
import { User } from "./User";

export class Offer{
    idOffer: number;
    title: string;
    description: string;
    startsAt: Date;
    endsAt: Date;
    partnerEmail: string;

    image: Image;
    partner: User;
    rating: Array<Rating>;


}