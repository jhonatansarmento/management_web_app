import { Component, OnInit } from '@angular/core';
import { DeviceService } from 'src/app/device.service';
import { Device } from 'src/app/utils/interfaces/device.interface';

@Component({
  selector: 'app-devices-list',
  templateUrl: './devices-list.component.html',
  styleUrls: ['./devices-list.component.scss']
})
export class DevicesListComponent implements OnInit {

  public devices: Device | any;

  public displayedColumns = ['category', 'color', 'partNumber', 'action'];

  constructor(private deviceService: DeviceService) { }

  ngOnInit(): void {
    this.getList()
  }
  getList() {
    this.deviceService.getDeviceList().subscribe((res) => {
      this.devices = res;
    })
  }

  delete(id: number) {
    this.deviceService.deleteDevice(id).subscribe(() => {
      this.deviceService.showMessage('device deleted')
      this.getList()
    }, (error) => {
      this.deviceService.showMessage(`delete error: ${error}`)
    })
  }
}
