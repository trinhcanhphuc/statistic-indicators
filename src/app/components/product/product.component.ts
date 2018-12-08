import { Component, OnInit } from '@angular/core';
// firebase
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { FirebaseListObservable } from 'angularfire2/database-deprecated/firebase_list_observable';
import { Observable } from 'rxjs';
// models
import { User } from '../../models/user';
import { NodeInfo } from 'src/app/models/node-info';
// services
import { UserService } from '../../services/user.service';
import { NodeInfoService } from '../../services/node-info.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  public users: User[];
  public user: User;
  public userNodeInfos: NodeInfo[] = [];
  public nodeInfos: any[];

  constructor(
    private userService: UserService,
    private nodeInfoService: NodeInfoService
  ) { }

  ngOnInit() {
    this.getNodeInfo(1, this.userNodeInfos);
  }

  getAllUsers() {
    this.userService.getAll().subscribe(users => this.users = users);
  }

  getUser(id: number) {
    this.userService.get(id).subscribe(user => this.user = user);
  }

  getAllNodeInfo() {
    this.nodeInfoService.getAll().subscribe(nodeInfos => this.nodeInfos = nodeInfos);
  }

  getNodeInfo(userId: number, userNodeInfos: NodeInfo[]) {
    this.nodeInfoService.getUserNodeInfo(userId).subscribe(nodeInfos => {
      nodeInfos.forEach(function(dateData) {
        const timeData = Object.keys(dateData.data).map(function(k) {
          return { 'key': k, 'value': dateData.data[k]};
        });
        timeData.forEach(function(data) {
          userNodeInfos.push(
            new NodeInfo(
              'node1',
              dateData.key,
              data.key,
              data.value.node1.Soil.Moisture,
              data.value.node1.Soil.Temperature,
              data.value.node1.Air.Humidity,
              data.value.node1.Air.Temperature)
          );
        });
      });
    });
  }
}
