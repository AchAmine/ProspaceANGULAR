import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Section } from 'src/app/model/Section';
import { SectionService } from 'src/app/service/section.service';

@Component({
  selector: 'app-list-sections-front',
  templateUrl: './list-sections-front.component.html',
  styleUrls: ['./list-sections-front.component.css']
})

  export class ListSectionsFrontComponent implements OnInit {

    listSections?: any;
    section: Section = new Section();
    form: boolean=false;
    idUser=1;
    section_value: any='';

  
    public isEmojiPickerVisible: boolean;

  
    Sections: Observable<Section[]>
    constructor(private sectionService :SectionService, private router: Router,private route: ActivatedRoute) { }
  
    ngOnInit(): void {
      this.getAllSections();;
    }
    getAllSections(){
      this.sectionService.getAllSections().subscribe(res=> { this.listSections=res; console.log(res);})
    }
  
    addQuiz(section: any){
      this.sectionService.addSection(section,this.idUser).subscribe(() => {
        this.getAllSections();
        this.form = false;
      });
    }
    deleteSection(idSection : any){
      this.sectionService.deleteSection(idSection).subscribe(() => this.getAllSections())
    }
   
  
    editSection(section: any){
      this.router.navigate(['editSection', section]);
    }
 
    sectionDetails(section: Section){
this.router.navigate(['section',section.idSection])  ;    
     //this.router.navigate(['listTopicsFront', id]);
    }




    public addEmoji(event: any) {
      this.section_value = `${this.section_value}${event.emoji.native}`;
      this.isEmojiPickerVisible = false;
   }




  }
