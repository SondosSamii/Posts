import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  users=[];
  comments=[];
  photos=[];
  posts=[];

  constructor( private _ApiService:ApiService) {
    this._ApiService.getComments().subscribe(data => {
      this.comments = data;
    })

    this._ApiService.getPhotos().subscribe(data => {
      this.photos = data;
      // console.log(this.photos);
    })

    this._ApiService.getPosts().subscribe(data => {
      this.posts = data;
    })

    this._ApiService.getUsers().subscribe(data => {
      this.users = data;
    })
  }

  ngOnInit() {
  }

}
