import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Section } from 'src/app/model/Section';
import { SectionService } from 'src/app/service/section.service';

@Component({
  selector: 'app-list-sections-back',
  templateUrl: './list-sections-back.component.html',
  styleUrls: ['./list-sections-back.component.css']
})
export class ListSectionsBackComponent implements OnInit {

  listSections?: any;
  section: Section = new Section();
  form: boolean=false;
  idUser=1;


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

}
