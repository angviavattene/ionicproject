import { Component, OnInit } from '@angular/core';
import { InstagramService, Post } from '../instagram.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  public posts: Post[] = [];
  constructor(public instaService: InstagramService) {
  }

  ngOnInit() {
    this.instaService.all().then(response => {
      this.posts = response;
      console.log(this.posts);
    });
  }


}
