import { Image } from "./Image";
import { Rating } from "./Rating";
import { User } from "./User";

export class Offer{
    idOffer: number;
    type: string;
    title: string;
    description: string;
    startsAt: Date;
    endsAt: Date;
    state:string;
    partnerEmail: string;

    image: Image;
    partner: User;
    rating: Array<Rating>;
    moyRatings: any;


}