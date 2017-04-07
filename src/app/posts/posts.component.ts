import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(private _userService: UsersService) { }

  public userId: any;
  ngOnInit() {
    //this.userId = this._userService.setUserId()
    //this._userService.getPosts(this.user.id)
  }

}
