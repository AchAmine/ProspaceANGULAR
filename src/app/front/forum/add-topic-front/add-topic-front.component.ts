import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  idUser =1;
  // id parametre
  id: number;

  section: any;
  topics: any;
  //user: any;
  nbrComments: any;
  date: any;
  // commentaire saisie par l'utilisateur
  topic_value: any='';
  hide=false;
  // instance commentaire a ajouter
  topic: Topic=new Topic;

  form: boolean=false;

   constructor(private topicService:TopicService,private sectionService:SectionService,
    private router: Router, public fb: FormBuilder,private route: ActivatedRoute) { }

  ngOnInit(): void {
 }
 

 addTopic(topic: any) {
  this.topicService.addTopic(topic,this.route.snapshot.params.id).subscribe(() => {
    // this.getAllQuiz();
    this.router.navigate([`/section/:id${this.route.snapshot.params.id}`]);
     this.form = false;
   });
}

getTopics(){
  this.topicService.getAllTopics(this.id).subscribe();  }


  Cancel() {
    this.router.navigate([`/section/${this.route.snapshot.params.id}`]);
  }
}
