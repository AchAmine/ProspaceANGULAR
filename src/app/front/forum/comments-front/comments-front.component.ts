import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post_Comment } from 'src/app/model/Post_Comment';
import { PostCommentService } from 'src/app/service/post-comment.service';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-comments-front',
  templateUrl: './comments-front.component.html',
  styleUrls: ['./comments-front.component.css']
})
export class CommentsFrontComponent implements OnInit {

  idUser=1;
comment: Post_Comment=new Post_Comment;
id:number;
post:any;
comments:any;
newComment:Post_Comment;
comment_value: any='';
date:any;
listPosts?: any;
commentToEdit:Post_Comment;
hide=false;

listComments?:any;



  constructor(private post_commentService:PostCommentService,private route: ActivatedRoute,private router: Router,
    private postService: PostService,public datepipe: DatePipe) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.postService.getPost(this.id)
      .subscribe(data => { this.post = data; });
      this.getComments(this.id);    }



      convertDate(date: any){
        return this.date = this.datepipe.transform(date, 'yyyy-MM-dd HH:mm');
       }
    
       getAllposts(idPost:any){
        this.postService.getAllposts(idPost).subscribe(res=> { this.listPosts=res; console.log(res);})
      }
    
    
    
    
    
      
      openEditForm(comment:Post_Comment) {
        console.log("comment : ",comment);
        this.commentToEdit = comment;
        console.log("new edit vallue : ",this.commentToEdit);
      }
    
    // deleteTopic(idTopic : any){
    //   this.topicService.deleteTopic(idTopic).subscribe(() => this.getTopics(this.id))
    // }
    
    
    // getAllsectiontTopics(idTopic :any){
    //   this.topicService.getAllTopics(idTopic).subscribe(data => {
    //     this.topics = data;
    //   console.log(this.topics)});
    // }
    
    
    
      editComment(){
        console.log("Before edit",this.commentToEdit);   
        this.post_commentService.editComment(this.commentToEdit).subscribe(
         data => {
            console.log("after edit 2",data);
            this.commentToEdit = new Post_Comment();
            this.hide = true;
          }
        ); 
      }
      cancel() {
        this.router.navigate(['/topic/',this.id]);
      }
    ///////////////////////////////////
    
    addComment(){
      this.newComment= new Post_Comment();
       this.newComment.content=this.comment.content;
      // console.log('topic_value',this.topic_value);
      // console.log('new topic:',this.newTopic);
      this.post_commentService.addComment(this.newComment,this.post.idPost).subscribe(
        () => {
          this.getComments(this.id) ; 
          this.comment_value='';
        }
    
      );
    
    }
    
    
    getComments(idComment: any){
      this.post_commentService.getAllComments(idComment).subscribe(data => { this.comments = data; 
      console.log(this.comments)});
    }
    
    
    
    
    
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
    getAllComments(){
      this.post_commentService.getAllComments(this.id).subscribe(data => {
        this.listComments = data;})
    }
    
    deleteComment(idComment : any){
      console.log("idComment",idComment);
      this.post_commentService.deleteComment(idComment).subscribe(() => this.getAllComments())
      
    }
    
    
    
    
    
    
    ////////////////////////
    commentDetails(comment: Post_Comment){
      // this.viewsInc(topic);
      this.router.navigate(['comment',comment.idComment])  ;    
    }
    ////////////////////////////////////////
    
    

}
