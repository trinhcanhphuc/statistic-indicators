import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
// firebase
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import { FirebaseListObservable } from 'angularfire2/database-deprecated/firebase_list_observable';
import { Service } from './service.service';
// models
import { User } from '../models/user';
import { NodeInfo } from '../models/node-info';

@Injectable({
  providedIn: 'root'
})
export class UserService extends Service {

  constructor(
    private fireDb: AngularFireDatabase,
  ) {
    super();
  }

  getAll(): Observable<any[]> {
    return this.fireDb.list('/users').valueChanges().pipe(
      tap(_ => console.log(`fetched users`)),
      catchError(this.handleError<any>(`getUsers`))
    );
  }

  get(id: number): Observable<any> {
    return this.fireDb.object('/users/user' + id ).valueChanges().pipe(
      tap(_ => console.log(`fetched user id=${id}`)),
      catchError(this.handleError<any>(`getUser id=${id}`))
    );
  }

}
