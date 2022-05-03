import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Section } from 'src/app/model/Section';
import { SectionService } from 'src/app/service/section.service';

@Component({
  selector: 'app-update-section-back',
  templateUrl: './update-section-back.component.html',
  styleUrls: ['./update-section-back.component.css']
})
export class UpdateSectionBackComponent implements OnInit {

  id: number;
  section: Section = new Section();
  form: FormGroup;
  constructor(private sectionService: SectionService,private router: Router,private route: ActivatedRoute,public fb: FormBuilder) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log("ID  ",this.id);
    this.sectionService.getSection(this.id).subscribe(data => {
      this.section = data;
      console.log("DATA :",data);}
      
      );
    
  }


  editSection(section: Section) {
    
  this.sectionService.editSection(section).subscribe();
  this.router.navigate(['/listSections']);
    
  }

  Cancel() {
    this.router.navigate(['/listSections']);
  }}
