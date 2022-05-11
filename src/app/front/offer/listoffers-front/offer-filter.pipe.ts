import { PipeTransform, Pipe } from '@angular/core';
import { Offer } from 'src/app/model/Offer';

@Pipe({
    name: 'offerFilter'
})


export class OfferFilterPipe implements PipeTransform {
    transform(offers: Offer[], searchTerm: string): Offer[] {
        if (!offers || !searchTerm) {
            return offers;
        }

        return offers.filter(offer =>
            offer.title.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
    }
}