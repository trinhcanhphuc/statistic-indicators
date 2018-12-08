import { Component, OnInit } from '@angular/core';
// firebase
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { FirebaseListObservable } from 'angularfire2/database-deprecated/firebase_list_observable';
import { Observable } from 'rxjs';
// models
import { User } from '../models/user';
// services
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'statistic-indicators';
  public users: User[];
  public user: User;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUser(1);
    this.getAllUsers();
  }

  getAllUsers() {
    this.userService.getAll().subscribe(users => this.users = users);
  }

  getUser(id: number) {
    this.userService.get(id).subscribe(user => this.user = user);
  }
}
