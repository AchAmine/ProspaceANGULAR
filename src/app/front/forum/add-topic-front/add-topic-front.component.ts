import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Section } from 'src/app/model/Section';
import { Topic } from 'src/app/model/Topic';
import { SectionService } from 'src/app/service/section.service';
import { TopicService } from 'src/app/service/topic.service';

@Component({
  selector: 'app-add-topic-front',
  templateUrl: './add-topic-front.component.html', 
  styleUrls: ['./add-topic-front.component.css']
})
export class AddTopicFrontComponent implements OnInit {
  listTopics?: any;
  listSections?:any;
  topic: Topic = new Topic();
  section: Section=new Section();
  form: boolean=false;
  idUser=1;
  

   constructor(private topicService:TopicService,private sectionService:SectionService,
    private router: Router, public fb: FormBuilder) { }

  ngOnInit(): void {
 }

//   getAllSections(){
//     this.sectionService.getAllSections().subscribe(res=>this.listSections=res)
//   }
//   getAllTopics(){
//     this.topicService.getAllTopics().subscribe(res=>this.listTopics=res)
//   }
// addTopic(topic: any) {
//   this.topicService.addTopic(topic,this.section.idSection,this.idUser).subscribe(() => {
//    this.router.navigate(['/listTopics']);
//     this.form = false;
//   });
// }

// Cancel() {
//   this.router.navigate(['/listTopics']);
// }

}
