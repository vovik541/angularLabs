import { Component, Input, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { Post } from '../app.component';
import {DatePipe} from '@angular/common';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  imports: [
    DatePipe
  ],
  standalone: true
})
export class PostComponent implements OnInit, OnDestroy {
  @Input() myPost!:Post;
  @Output() onRemove=new EventEmitter<number>()

  // date_post!: Date;

  constructor() { }
  removePost(){
    this.onRemove.emit(this.myPost.id)
  }
  ngOnInit(): void {
    // this.date_post = this.myPost.date || new Date();
  }
  ngOnDestroy(){
    console.log('метод ngOnDestroy');
  }

}
