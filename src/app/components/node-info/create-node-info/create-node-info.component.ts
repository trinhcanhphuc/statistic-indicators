import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { NodeInfo } from '../../../models/node-info';

import {formatDate } from '@angular/common';

import { NodeInfoService } from '../../../services/node-info.service';

@Component({
  selector: 'app-create-node-info',
  templateUrl: './create-node-info.component.html',
  styleUrls: ['./create-node-info.component.scss']
})
export class CreateNodeInfoComponent implements OnInit {

  nodeId: string;
  temp: string;
  mois: string;
  requestParams = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private nodeInfoService: NodeInfoService
  ) { }

  ngOnInit() {
    // this.requestParams = this.route.paramMap.destination._value;
    // get params
    // let userId = 1;
    // let now = Date.now();
    // let date = formatDate(now, 'dd-MM-yyyy', 'en-US', '+700');
    // let time = formatDate(now, 'HH:mm:ss', 'en-US', '+700');
    // let nodeId = Number(this.requestParams.nodeId);
    // let soilMoisture =  Number(this.requestParams.soilMoisture);
    // let soilTemperature = Number(this.requestParams.soilTemperature);
    // let airHumidity = Number(this.requestParams.airHumidity);
    // let airTemperature = Number(this.requestParams.airTemperature);

    // save into firebase
    // this.nodeInfoService.createNodeInfo(1,
    //   new NodeInfo(
    //     `node${nodeId}`, date, time, soilMoisture, soilTemperature, airHumidity, airTemperature
    //   ));

    this.nodeInfoService.createNodeInfo(1,
      new NodeInfo(
        'node1', '10-10-2018', '19:00:00', 1, 1, 1, 1
      ));
  }
}
