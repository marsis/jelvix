import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: 'user.component.html',
  styleUrls: ['user.component.css']
})
export class UserComponent implements OnInit {

  @Input()
  public user: any = {};

  @Output()
  public userClick: EventEmitter<any> = new EventEmitter();
 // public courseClick: EventEmitter<Course> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onUserClick() {
    this.userClick.emit(this.user.id);
  }

}
