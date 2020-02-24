import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { Title } from '@angular/platform-browser';
import { $ } from 'protractor';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  postId;
  post;
  comments=[];
  postComments=[];

  user;
  photos;

  thumbUp;

  constructor( private _Title:Title, private _ActivatedRoute:ActivatedRoute, private _ApiService:ApiService) {
    this._ApiService.getPosts().subscribe(data => {
      this.post = data[this.postId-1];
      // console.log(this.post);
    })

    this._ApiService.getUsers().subscribe(data => {
      this.user = data[this.postId-1];
      // console.log(this.user);
    })

    this._ApiService.getPhotos().subscribe(data => {
      this.photos = data[this.postId-1];
      // console.log(this.photos);
    })
    
    this._ApiService.getComments().subscribe(data => {
      this.comments = data;
      for(let i = 0; i < this.comments.length; i++) {
        if(this.comments[i].postId == this.postId) {
          this.postComments.push(this.comments[i].body);
        }  
      }
      // console.log(this.postComments);
    })

  }

  getPostId() {
    this.postId = this._ActivatedRoute.snapshot.params.id;
  }

  ngOnInit() {
    this.getPostId();
    this._Title.setTitle("Post");
  }

}
