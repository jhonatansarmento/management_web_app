import { Router } from '@angular/router';
import { DeviceService } from 'src/app/device.service';
import { Component, OnInit } from '@angular/core';
import { Device } from 'src/app/utils/interfaces/device.interface';


@Component({
  selector: 'app-device-create',
  templateUrl: './device-create.component.html',
  styleUrls: ['./device-create.component.css']
})
export class DeviceCreateComponent implements OnInit {

  submitingData = false

  device: Device = {
    category: '',
    color: '',
    partNumber: null
  }

  res: any

  categories = []

  constructor(private deviceService: DeviceService, private router: Router) { }

  ngOnInit(): void {
    this.deviceService.getCategoryList().subscribe((res) => {
      this.res = res
      this.categories = this.res.map((obj) => obj.name)
    })
  }

  createDevice(): void {
    this.submitingData = true
    this.deviceService.createDevice(this.device).subscribe(() => {
      this.deviceService.showMessage('Device Created')
      this.router.navigate(['/'])
    }, (error) => {
      this.deviceService.showMessage(`Error to Create: ${error}`)
    }, () => {
      this.submitingData = false
    })
  }

  cancel(): void {
    this.router.navigate(['/'])
  }

}
