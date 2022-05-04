import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article_Comment } from 'src/app/model/Article_Comment';
import { ArticleService } from 'src/app/service/article.service';
import { ArticlecommentsService } from 'src/app/service/articlecomments.service';

@Component({
  selector: 'app-articledetails-front',
  templateUrl: './articledetails-front.component.html',
  styleUrls: ['./articledetails-front.component.css']
})
export class ArticledetailsFrontComponent implements OnInit {

  idUser =3;
  // id parametre
  id: number;
  // objet article contenant les details
  article: any;
  comments: any;
  //user: any;
  nbrComments: any;
  date: any;
  // commentaire saisie par l'utilisateur
  comment_value: any='';
  commentToEdit:Article_Comment;
  hide=false;
  // instance commentaire a ajouter
  newcomment: Article_Comment;

  public isEmojiPickerVisible: boolean;

  constructor(private articleService: ArticleService, private route: ActivatedRoute,private router: Router,
    private commentService: ArticlecommentsService,public datepipe: DatePipe) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    
    // recuperation de l'article avec id 
    this.articleService.getArticle(this.id)
      .subscribe(data => { this.article = data; });

    // recuperation des commentaires de l'article avc id
    this.getComments(this.id);

    
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
    this.commentService.addComment(this.newcomment,this.article.idArticle).subscribe(
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
    this.router.navigate(['/articles']);
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
    this.router.navigate(['/article',this.id]);
  }


  //
  editArticleBack(article: any){
    this.router.navigate(['editarticle', article]);
  }

  editArticleFront(article: any){
    this.router.navigate(['editarticle', article]);
  }

  deleteArticle(idArticle : any){
    if (window.confirm('Are sure you want to delete this Article ?')) {
    this.articleService.deleteArticle(idArticle).subscribe(() => {
      this.router.navigate(['/Articlesnav']);
    console.log("DELETE ID:",idArticle);}
    )
    }
  }
}
