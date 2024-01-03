import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ApiService } from "../api.service";
import { Title } from "@angular/platform-browser";

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.scss"],
})
export class PostComponent implements OnInit {
  postId;
  post;
  comments = [];
  postComments = [];

  user;
  photos;

  thumbUp;

  constructor(
    private _Title: Title,
    private _ActivatedRoute: ActivatedRoute,
    private _ApiService: ApiService
  ) {
    this._ApiService.getPosts().subscribe((data) => {
      this.post = data[this.postId - 1];
    });

    this._ApiService.getUsers().subscribe((data) => {
      this.user = data[this.postId - 1];
    });

    this._ApiService.getPhotos().subscribe((data) => {
      this.photos = data[this.postId - 1];
    });

    this._ApiService.getComments().subscribe((data) => {
      this.comments = data;
      for (const comment of this.comments) {
        if (comment.postId == this.postId) {
          this.postComments.push(comment.body);
        }
      }
    });
  }

  getPostId() {
    this.postId = this._ActivatedRoute.snapshot.params.id;
  }

  ngOnInit() {
    this.getPostId();
    this._Title.setTitle("Post");
  }
}
