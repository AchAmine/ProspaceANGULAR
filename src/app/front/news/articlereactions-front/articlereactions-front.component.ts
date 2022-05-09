import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReactionType } from 'src/app/enum/ReactionType.enum';
import { Reaction } from 'src/app/model/Reaction';
import { ArticlereactionService } from 'src/app/service/articlereaction.service';

@Component({
  selector: 'app-articlereactions-front',
  templateUrl: './articlereactions-front.component.html',
  styleUrls: ['./articlereactions-front.component.css']
})
export class ArticlereactionsFrontComponent implements OnInit {

  // id of user 
  idUser = 1;
  // id de l'article
  idArticle: any;
  reaction = new Reaction();
  // list of all reacitons
  reactions: any;
  // list of emojis
  emojiList: string[];
  // toggle pr hover
  showEmojis = false;
  // hashmap : user , reactionType
  usersReaction = new Map();
  // reactions count (all)
  reactionsCount:any;
  // reaction count (per type)
  reactionCount:any;
  // check currentReaction of a user 
  currentReaction: any;

  constructor(private reactionService : ArticlereactionService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.idArticle = this.route.snapshot.params['id'];
    // reaction 
    this.emojiList = ['Like', 'Love', 'Funny'];
     this.reactionService.getAllReactions(this.idArticle).subscribe(data => {
      this.reactions = data;
      this.reactionsCount = this.reactions.length;
      console.log(this.reactionsCount)
      console.log(this.reactions);
      this.getCurrentReaction();
    }); 

    

  }

  // reaction
  emojiPath(emoji: any) {
    return `assets/reactions/${emoji}.png`
  }

  toggleShow() {
    this.showEmojis = !this.showEmojis
  }

  react(val: any){
    this.reaction = new Reaction();
    this.reaction.type = this.emojiList[val] as ReactionType;
    console.log(this.reaction.type);
    console.log(this.reaction);
    console.log("1ST-----------------------")
    //  check whether the user reacted or not , if so we get the reaction type
   // this.getCurrentReaction();
    console.log(" DID USER REACT ? ",this.currentReaction);
    console.log("2ND-----------------------")
    // if user reacted already : 
    if (this.currentReaction) {
      console.log("ARE THE REACTIONS THE SAME ? ",this.currentReaction.type == this.emojiList[val] as ReactionType)
      console.log("3RD-----------------------")
      // if the reaction is the same we delete it 
      if (this.currentReaction.type == this.emojiList[val] as ReactionType) {
          console.log("DELETING THE REACTION : ",this.reaction.idReaction);
          this.reactionService.deleteReaction(this.currentReaction.idReaction).subscribe(() => this.ngOnInit());
      } else {
        // setting the new reaction and updating it 
        this.currentReaction.type = this.emojiList[val] as ReactionType;
        console.log("updating reaction",this.currentReaction);
      this.reactionService.updateReaction(this.currentReaction).subscribe(
        () => {
          console.log("CHANGING CURRENT REACTION TO : ");
          console.log(this.reaction);
          this.ngOnInit() ; 
        }
      );
      }
      console.log("React : ",this.emojiList[val]);
      }

    // if user hasnt reacted yet :
    if (!this.currentReaction) {
    this.reactionService.addReaction(this.idArticle,this.idUser,this.reaction).subscribe(
      () => {
        console.log("NEW REACTION : ",this.reaction.type);
        console.log(this.reaction);
        this.ngOnInit() ; 
      }
    );
    console.log("React : ",this.emojiList[val]);
    }
  }

  getUsersReactions(){
    this.reactionService.getUsersReaction(this.idArticle).subscribe(data => {
      this.usersReaction = new Map(Object.entries(data));
      this.reactionsCount = this.usersReaction.size;
      console.log(this.reactionsCount)
      console.log(this.usersReaction);
    });
  }
  
  getCurrentReaction(){
    this.reactionService.getUserReaction(this.idArticle,this.idUser).subscribe(data => {
      this.currentReaction = data;
      console.log("Current REACTION : ",this.currentReaction);
    })
  }

  // get count for each reaction type
  getReactionCountByType(val: any) {
    let type = this.emojiList[val] as ReactionType;
    /* this.reactionService.getArticleReactorsByType(this.idArticle,type).subscribe(data => {

  
      this.reactionCount == data.length
      console.log(this.reactionCount);
      }) */
      this.reactionCount= 0;
      for (let reaction in this.reactions) {
        if (this.reactions[reaction].type == type )
        {
          this.reactionCount++;
        }
      }
      console.log("REACTION COUNT",this.reactionCount);
      return this.reactionCount;
  }
}
