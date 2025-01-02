import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Post} from '../app.component';
import { Observable } from 'rxjs';
import {AsyncPipe, DatePipe} from '@angular/common';

@Component({
  selector: 'app-post-form',
  imports: [FormsModule, AsyncPipe, DatePipe],
  templateUrl: './post-form.component.html',
  styleUrl: './post-form.component.css',
})
export class PostFormComponent implements OnInit {
  @Output() onAdd:EventEmitter<Post> = new EventEmitter<Post>()
  title = '';
  text = '';
  myDate$: Observable<Date> = new Observable((obs) => {
    setInterval(() => {
      obs.next(new Date());
    }, 1000);
  });
  constructor() {
  }

  date_post!:Date
  ngOnInit():void {
    this.myDate$.subscribe(date=>{this.date_post=date })
  }

  addPost() {
    if (this.title.trim() && this.text.trim()) {
      const post: Post = {
        title: this.title,
        text: this.text,
        date: this.date_post
      }
      this.onAdd.emit(post);
      console.log('New post', post);
      this.title = this.text = ''; // очищення полів
    }
  }
}
