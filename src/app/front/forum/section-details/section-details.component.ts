import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Section } from 'src/app/model/Section';
import { Topic } from 'src/app/model/Topic';
import { SectionService } from 'src/app/service/section.service';
import { TopicService } from 'src/app/service/topic.service';

@Component({
  selector: 'app-section-details',
  templateUrl: './section-details.component.html',
  styleUrls: ['./section-details.component.css']
})
export class SectionDetailsComponent implements OnInit {
idUser=1;
topic: Topic=new Topic;

id:number;
section:any;
topics:any;
newTopic:Topic;
topic_value: any='';
date:any;
listSections?: any;
topicToEdit:Topic;
hide=false;

listTopics?:any;



  constructor(private sectionService:SectionService,private route: ActivatedRoute,private router: Router,
    private topicService: TopicService,public datepipe: DatePipe) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.sectionService.getSection(this.id)
      .subscribe(data => { this.section = data; });
      this.getTopics(this.id);
  }


 
  convertDate(date: any){
    return this.date = this.datepipe.transform(date, 'yyyy-MM-dd ');
   }


   getDateMonth(date:any){
    let months: Array<string>;
    months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return months[date.getMonth()];

  }

  editSectionBack(section: any){
    this.router.navigate(['editSection', section]);
  }

    deleteSection(idSection : any){
    this.sectionService.deleteSection(idSection).subscribe(() => this.getAllSections())
  }
  getAllSections(){
    this.sectionService.getAllSections().subscribe(res=> { this.listSections=res; console.log(res);})
  }


  openEditForm(topic:Topic) {
    console.log("topic : ",topic);
    this.topicToEdit = topic;
    console.log("new edit vallue : ",this.topicToEdit);
  }

// deleteTopic(idTopic : any){
//   this.topicService.deleteTopic(idTopic).subscribe(() => this.getTopics(this.id))
// }


// getAllsectiontTopics(idTopic :any){
//   this.topicService.getAllTopics(idTopic).subscribe(data => {
//     this.topics = data;
//   console.log(this.topics)});
// }



  editTopic(){
    console.log("Before edit",this.topicToEdit);   
    this.topicService.editTopic(this.topicToEdit).subscribe(
     data => {
        console.log("after edit 2",data);
        this.topicToEdit = new Topic();
        this.hide = true;
      }
    );
  }
  Cancel() {
    this.router.navigate(['/section/',this.id]);
  }
///////////////////////////////////

addTopic(){
  this.newTopic= new Topic();
   this.newTopic.title = this.topic.title;
   this.newTopic.description=this.topic.description;
  // console.log('topic_value',this.topic_value);
  // console.log('new topic:',this.newTopic);
  this.topicService.addTopic(this.newTopic,this.section.idSection).subscribe(
    () => {
      this.getTopics(this.id) ; 
      this.topic_value='';
    }

  );

}


getTopics(idTopic: any){
  this.topicService.getAllTopics(idTopic).subscribe(data => { this.topics = data; 
  console.log(this.topics)});
}





/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

getAlltopics(){
  this.topicService.getAllTopics(this.id).subscribe(data => {
    this.listTopics = data;})
}

deleteTopic(idTopic : any){
  console.log("idTopic",idTopic);
  this.topicService.deleteTopic(idTopic).subscribe(() => this.getAlltopics())
}






////////////////////////
topicDetails(topic: Topic){
  this.viewsInc(topic);
  this.router.navigate(['topic',topic.idTopic])  ;    
}

viewsInc(topic: Topic){
  topic.views++;
  console.log("views b4 service call",topic);
  this.topicService.editTopic(topic).subscribe(
    (res: any)=> { this.listTopics=res; console.log("topic views : ",res.views) ;
    console.log("topic  : ",res)
    }
  );
}
}
