import { HeaderService } from './../templates/header/header.service';
import { Component, OnInit } from '@angular/core';
import { DeviceService } from 'src/app/device.service';
import { Device } from 'src/app/utils/interfaces/device.interface';

@Component({
  selector: 'app-devices-list',
  templateUrl: './devices-list.component.html',
  styleUrls: ['./devices-list.component.css']
})
export class DevicesListComponent implements OnInit {

  public devices: Device | any;

  public displayedColumns = ['category', 'color', 'partNumber', 'action'];

  constructor(private deviceService: DeviceService, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Device Management'
    }
  }

  ngOnInit(): void {
    this.getList()
  }
  getList() {
    this.deviceService.getDeviceList().subscribe((res) => {
      this.devices = res;
    })
  }

  delete(id: number) {
    if (confirm('Are you sure you want to delete this Device?')) {
      this.deviceService.deleteDevice(id).subscribe(() => {
        this.deviceService.showMessage('Device Deleted')
        this.getList()
      }, (error) => {
        this.deviceService.showMessage(`delete error: ${error}`)
      })
    }
  }
}
