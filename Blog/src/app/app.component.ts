import { Component } from '@angular/core';
import {PostComponent} from './post/post.component';
import {PostFormComponent} from './post-form/post-form.component';
import {CommonModule} from '@angular/common';
import { FilterPostsPipe } from './filter-posts.pipe';
import {FormsModule} from '@angular/forms';

export interface Post {
  title:string;
  text:string;
  id?:number;
  date: Date;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [PostComponent, PostFormComponent, CommonModule, FilterPostsPipe, FormsModule]
})
export class AppComponent {
  title = 'BlogComponents';
  posts: Post[]=[{title:'Вивчаю компоненти', text:'Створюю проект "Блог"', id:1, date: new Date()},
    {title:'Вивчаю директиви', text:'Все ще створюю "Блог"', id:2, date: new Date()}]

  search: string = '';

  get filteredPosts(): Post[] {
    return this.posts.filter((post) =>
      post.title.toLowerCase().includes(this.search.toLowerCase())
    );
  }

  updatePosts(post:Post){
    const existingIds = this.posts.map(post => post.id);

    let newId = 1;
    while (existingIds.includes(newId)) {
      newId++;
    }
    post.id = newId;

    this.posts.unshift(post);
    console.log('Post',post);
    console.log('Postі',this.posts);

  }
  deletePost(id:number){
    this.posts=this.posts.filter(p=>p.id!==id)
  }
}
