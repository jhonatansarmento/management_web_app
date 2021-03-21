import { Device } from 'src/app/utils/interfaces/device.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  mainUrl = "http://localhost:3001"

  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'fechar', {
      duration: 1500,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  getDeviceList() {
    const url = `${this.mainUrl}/devices`;
    return this.http.get(url);
  }

  getCategoryList() {
    const url = `${this.mainUrl}/categories`;
    return this.http.get(url);
  }

  createDevice(device: Device): Observable<Device> {
    const url = `${this.mainUrl}/devices`;
    return this.http.post<Device>(url, device)
  }

  deleteDevice(id: number) {
    const url = `${this.mainUrl}/devices/${id}`;
    return this.http.delete(url)
  }
}
