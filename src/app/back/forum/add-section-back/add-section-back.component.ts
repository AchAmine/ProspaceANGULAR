import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Section } from 'src/app/model/Section';
import { SectionService } from 'src/app/service/section.service';

@Component({
  selector: 'app-add-section-back',
  templateUrl: './add-section-back.component.html',
  styleUrls: ['./add-section-back.component.css']
})
export class AddSectionBackComponent implements OnInit {

  lisSections?: any;
  section: Section = new Section();
  form: boolean=false;
  idUser=1;
  constructor(private sectionService: SectionService,
    private router: Router, public fb: FormBuilder) { }

  ngOnInit(): void {
   
  }

  getAllQuiz(){
    this.sectionService.getAllSections().subscribe(res=>this.lisSections=res)
  }
addSection(section: any) {
  this.sectionService.addSection(section,this.idUser).subscribe(() => {
   this.router.navigate(['/listSections']);
    this.form = false;
  });
}

Cancel() {
  this.router.navigate(['/listSections']);
}


}
