import { Pipe, PipeTransform } from "@angular/core";
import { Section } from "src/app/model/Section";

@Pipe({
    name: 'sectionFilter'
})


export class sectionFilterPipe implements PipeTransform {
    transform(sections: Section[], searchTerm: string): Section[] {
        if (!sections || !searchTerm) {
            return sections;
        }

        return sections.filter(section => 
            section.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
    }
    
}