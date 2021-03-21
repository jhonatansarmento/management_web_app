import { Component, OnInit } from '@angular/core';
import { DeviceService } from 'src/app/device.service';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Device } from 'src/app/utils/interfaces/device.interface';

@Component({
  selector: 'app-devices-list',
  templateUrl: './devices-list.component.html',
  styleUrls: ['./devices-list.component.scss']
})
export class DevicesListComponent implements OnInit {

  public devices: Device | any;

  public displayedColumns = ['id', 'category', 'color', 'partNumber'];

  constructor(private deviceService: DeviceService) { }

  ngOnInit(): void {
    this.deviceService.getDeviceList().subscribe( (res) => {
      this.devices = res;
    })
  }

}
