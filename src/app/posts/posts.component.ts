import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(
    private _userService: UsersService,
    private _route: ActivatedRoute
    ) { }

  public posts: any = [];
  ngOnInit() {
    this._route.params
      .switchMap((params: Params) => this._userService.getPosts(+params['userId']))
      .subscribe(posts => this.posts = posts.json());
  }

}
/*


 getCourseId(): Observable<number> {
 return this._route.parent.params.mergeMap(params => {
 this._courseId = +params['courseId'];
 return Observable.of(this._courseId);
 });
 }


 ngOnInit() {
 this.route.params
 // (+) converts string 'id' to a number
 .switchMap((params: Params) => this.service.getHero(+params['id']))
 .subscribe((hero: Hero) => this.hero = hero);
 }


 */