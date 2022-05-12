import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Article_Comment } from 'src/app/model/Article_Comment';
import { ArticleService } from 'src/app/service/article.service';
import { ArticlecommentsService } from 'src/app/service/articlecomments.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-articledetails-front',
  templateUrl: './articledetails-front.component.html',
  styleUrls: ['./articledetails-front.component.css']
})
export class ArticledetailsFrontComponent implements OnInit {

  user: any;
  // id parametre
  id: number;
  // objet article contenant les details
  article: any;
  comments: any;
  //user: any;
  nbrComments: any;
  date: any;
  commentForm: FormGroup;
  editcommentForm: FormGroup;
  // commentaire saisie par l'utilisateur
  comment_value: any='';
  commentToEdit:Article_Comment;
  hide=false;
  forbiddenValues:any = [] ;
  // instance commentaire a ajouter
  newcomment: Article_Comment;

  public isEmojiPickerVisible: boolean;

  constructor(private articleService: ArticleService, private route: ActivatedRoute,private router: Router,
    private commentService: ArticlecommentsService,private userService: UserService,public datepipe: DatePipe, public fb: FormBuilder) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.userService.getConnectedUser().subscribe(data => {
      console.log("data : ",data); 
      this.user = data
      console.log("user id: ",this.user.idUser);
    });
    console.log("user : ",this.user);
    // recuperation de l'article avec id 
    this.articleService.getArticle(this.id)
      .subscribe(data => { this.article = data; });

    // recuperation des commentaires de l'article avc id
    this.getComments(this.id);
    this.getForbbidenwords();

    this.commentForm = this.fb.group({
      'comment': ['', [Validators.required, this.isForbidden()]]
    });

    this.editcommentForm = this.fb.group({
      'editcomment': ['', [Validators.required, this.isForbidden()]]
    });

    

    
  }

  getComments(idComment: any){
    this.commentService.getAllComments(idComment).subscribe(data => { this.comments = data; 
    console.log(this.comments)});
  }

  addComment(){
    this.newcomment= new Article_Comment();
    this.newcomment.content = this.comment_value.toString();
    console.log('comment_value',this.comment_value);
    console.log('new comment:',this.newcomment);
    this.commentService.addComment(this.newcomment,this.article.idArticle,this.user.idUser).subscribe(
      () => {
        this.getComments(this.id) ; 
        this.comment_value='';
      }

    );
  
  }

  convertDate(date: any){
   return this.date = this.datepipe.transform(date, 'yyyy-MM-dd HH:mm');
  }

  getDateMonth(date:any){
    let months: Array<string>;
    months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return months[date.getMonth()];

  }

  deleteComment(idComment : any){
    this.commentService.deleteComment(idComment).subscribe(() => this.getComments(this.id))
  }


  ToArticles() {
    this.router.navigate(['/home/articles']);
  }

  public addEmoji(event: any) {
    this.comment_value = `${this.comment_value}${event.emoji.native}`;
    this.isEmojiPickerVisible = false;
 }

  openEditForm(Comment:Article_Comment) {
    console.log("comment : ",Comment);
    this.commentToEdit = Comment;
    console.log("new edit vallue : ",this.commentToEdit);
  }

  editComment(){
    console.log("Before edit",this.commentToEdit);   
    this.commentService.editComment(this.commentToEdit).subscribe(
     data => {
        console.log("after edit 2",data);
        this.commentToEdit = new Article_Comment();
        this.hide = true;
      }
    );
  }

  Cancel() {
    this.commentToEdit = new Article_Comment();
    this.hide = true;
    this.ngOnInit();
  }


  //
  editArticleBack(article: any){
    this.router.navigate(['home/editarticle', article]);
  }

  editArticleFront(article: any){
    this.router.navigate(['home/editarticle', article]);
  }

  deleteArticle(idArticle : any){
    if (window.confirm('Are sure you want to delete this Article ?')) {
    this.articleService.deleteArticle(idArticle).subscribe(() => {
      this.router.navigate(['/Articlesnav']);
    console.log("DELETE ID:",idArticle);}
    )
    }
  }

  getForbbidenwords(){
    let words:any
    this.commentService.getForbiddenwords().subscribe(data => {
      //let word: keyof typeof data;
     words = data
     for(const word in data) {
       console.log("data words",data);
      this.forbiddenValues.push(words[word].word);
      console.log("forbidden values",this.forbiddenValues);
     }
    })
    console.log("forbidden words : ",this.forbiddenValues);
  }

   isForbidden(): ValidatorFn {
   
    return (c: AbstractControl): { [key: string]: boolean } | null => {
      if (this.forbiddenValues.indexOf(c.value) !== -1) {
        console.log("forbidden true")
        return { 'forbiddenValues': true };
      }
      return null;
    };
  }
}
