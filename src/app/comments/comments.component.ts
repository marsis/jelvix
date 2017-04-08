import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  constructor(
    private _userService: UsersService,
    private _route: ActivatedRoute
  ) { }

  public comments: any = [];
  ngOnInit() {
    this._route.params
      .switchMap((params: Params) => this._userService.getComments(+params['postId']))
      .subscribe(comments => this.comments = comments.json() );
  }
}
