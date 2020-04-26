import { Component, OnInit,Input } from '@angular/core';
import { Comment } from "../../interfaces/comment";

import { ShopService } from "src/app/shop.service";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  @Input() comments:Comment[]
  @Input() product_id:number
  username: string;
  edit:boolean = false;
  content:string = '';
  constructor(
    private shopService: ShopService,
  ) { }

  ngOnInit(): void {
    // let datef = new Date(this.comments[0].created_date)
    // console.log(this.comments[0].created_date.getFullYear())
    // console.log(datef.getFullYear())
    this.username = localStorage.getItem('user');
    // this.changeDateFormat(this.comments);
  }
  changeDateFormat(created_date):string {
    const el = new Date(created_date).toLocaleString();
    return el;
  }

  delete(comment: Comment):void {
    this.shopService.deleteComment(comment).subscribe();

    this.reloadPage();
  }

  save(comment:Comment): void {
    console.log(comment);
    this.shopService.updateComment(comment)
      .subscribe(
      
      );
    this.reloadPage();
  }

  openSave(e):void {
    // console.log(e.target.parentElement.parentElement.lastChild.style.display='block');
    // this.edit = !this.edit;
    if(e.target.parentElement.parentElement.lastChild.style.display==='block')
      e.target.parentElement.parentElement.lastChild.style.display='none'
    else
      e.target.parentElement.parentElement.lastChild.style.display='block'
    // this.edit ? e.target.parentElement.parentElement.lastChild.style.display='block': e.target.parentElement.parentElement.lastChild.style.display='none'
    // e.target.parentElement.parentElement.lastChild.style.display='block'
  }

  addComment():void {
    // console.log(this.product_id)
    if(this.content.length < 1) return;
    const comment = {
      "content":this.content,
      "product_id":this.product_id
    }
    // console.log(JSON.stringify(comment))
    this.shopService.addComment(comment).subscribe()
    this.reloadPage();
  }

  reloadPage():void {
    location.reload();
  }
}
