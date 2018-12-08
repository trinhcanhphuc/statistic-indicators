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
export class NodeInfoService extends Service {

  constructor(
    private fireDb: AngularFireDatabase,
  ) {
    super();
  }

  getAll(): Observable<any[]> {
    return this.fireDb.list('/users').valueChanges().pipe(
      tap(_ => console.log(`fetched node info`)),
      catchError(this.handleError<any>(`getNodeInfo`))
    );
  }

  getUserNodeInfo(userId: number): Observable<any[]> {
    return this.fireDb.list(`/users/user${userId}`).snapshotChanges().pipe(
      tap(_ => console.log(`fetched user ${userId} node info`)),
      map(nodeInfos => {
        return nodeInfos.map(a => {
          const data = a.payload.val();
          const key = a.payload.key;
          return {key, data};
        });
      }),
      catchError(this.handleError<any>(`getNodeInfo`))
    );
  }

  createNodeInfo(userId: number, nodeInfo: NodeInfo) {
    const users = this.fireDb.list('users');
    users.push('user3');
  }

}
