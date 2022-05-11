import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/model/Post';
import { Post_Comment } from 'src/app/model/Post_Comment';
import { PostCommentService } from 'src/app/service/post-comment.service';
import { PostService } from 'src/app/service/post.service';
import { TopicService } from 'src/app/service/topic.service';

@Component({
  selector: 'app-topic-details-front',
  templateUrl: './topic-details-front.component.html',
  styleUrls: ['./topic-details-front.component.css']
})
export class TopicDetailsFrontComponent implements OnInit {
  idUser=1;
post: Post=new Post;
comment:Post_Comment=new Post_Comment();
id:number;
topic:any;
posts:any;
newPost:Post;
post_value: any='';
date:any;
listTopics?: any;
postToEdit:Post;
hide=false;

listPosts?:any;




  constructor(private topicService:TopicService,private route: ActivatedRoute,private router: Router,
    private postService: PostService,public datepipe: DatePipe) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.topicService.getTopic(this.id)
      .subscribe(data => { this.topic = data; });
      this.getPosts(this.id);
  }


  convertDate(date: any){
    return this.date = this.datepipe.transform(date, 'yyyy-MM-dd HH:mm');
   }



  // editTopic(section: any){
  //   this.router.navigate(['editSection', section]);
  // }

  //   deleteSection(idSection : any){
  //   this.sectionService.deleteSection(idSection).subscribe(() => this.getAllSections())
  // }
  getAllTopics(idTopic:any){
    this.topicService.getAllTopics(idTopic).subscribe(res=> { this.listTopics=res; console.log(res);})
  }





  
  openEditForm(post:Post) {
    console.log("post : ",post);
    this.postToEdit = post;
    console.log("new edit vallue : ",this.postToEdit);
  }

// deleteTopic(idTopic : any){
//   this.topicService.deleteTopic(idTopic).subscribe(() => this.getTopics(this.id))
// }


// getAllsectiontTopics(idTopic :any){
//   this.topicService.getAllTopics(idTopic).subscribe(data => {
//     this.topics = data;
//   console.log(this.topics)});
// }



  editPost(){
    console.log("Before edit",this.postToEdit);   
    this.postService.editPost(this.postToEdit).subscribe(
     data => {
        console.log("after edit 2",data);
        this.postToEdit = new Post();
        this.hide = true;
      }
    ); 
  }
  cancel() {
    this.getPosts(this.id) ; ;
  }
///////////////////////////////////

addPost(){
  this.newPost= new Post();
   this.newPost.title = this.post.title;
   this.newPost.content=this.post.content;
  // console.log('topic_value',this.topic_value);
  // console.log('new topic:',this.newTopic);
  this.postService.addPost(this.newPost,this.topic.idTopic).subscribe(
    () => {
      this.getPosts(this.id) ; 
      this.post_value='';
    }

  );

}


getPosts(idPost: any){
  this.postService.getAllposts(idPost).subscribe(data => { this.posts = data; 
  console.log(this.posts)});
}





/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

getAllPosts(){
  this.postService.getAllposts(this.id).subscribe(data => {
    this.listPosts = data;})
}

deletePost(idPost : any){
  console.log("idPost",idPost);
  this.postService.deletePost(idPost).subscribe(() => this.getAllPosts())
  
}






////////////////////////
postDetails(post: Post){
  // this.viewsInc(topic);
  this.router.navigate(['post',post.idPost])  ;    
}
////////////////////////////////////////




}
