import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ArticlecommentsService } from 'src/app/service/articlecomments.service';

@Component({
  selector: 'app-profanity',
  templateUrl: './profanity.component.html',
  styleUrls: ['./profanity.component.css']
})
export class ProfanityComponent implements OnInit {
  form: FormGroup;
  constructor(public fb: FormBuilder,private router: Router,private articleCommentService: ArticlecommentsService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      file: [null],
    });
  }

  uploadFile(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.form.get('file')?.setValue(file);
    }
  }

  addFile() {
    const formData = new FormData();
    formData.append('file', this.form.get('file')?.value);
     this.articleCommentService.addFile(formData).subscribe(
      data => {this.router.navigate(['listarticles']);}

     ); 
  }

  Cancel() {
    this.router.navigate(['listarticles']);
  }

}
