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
    this.getNodeInfo(1);
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

  getNodeInfo(userId: number) {
    this.nodeInfoService.getUserNodeInfo(userId).subscribe(nodeInfos => {
      console.log(nodeInfos);
      console.log(Object.keys(nodeInfos));
      nodeInfos.forEach(function(dateData) {
        console.log(dateData);
        const timeData = Object.keys(dateData.data).map(function(k) {
          return { 'key': k, 'value': dateData.data[k]};
        });
        console.log(timeData);
        timeData.forEach(function(data) {
          console.log('dateData.key ' + dateData.key);
          console.log('data.key ' + data.key);
          console.log('data.value.node1.Soil.Moisture ' + data.value.node1.Soil.Moisture);
          // this.userNodeInfos.push(
          //   new NodeInfo(
          //     dateData.key,
          //     data.key,
          //     data.value.node1.Soil.Moisture,
          //     data.value.node1.Soil.Temperature,
          //     data.value.node1.Air.Humidity,
          //     data.value.node1.Air.Temperature)
          // );
        });
      });
    });
  }
}
