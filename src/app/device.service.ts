import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  mainUrl = "http://localhost:3001"

  constructor(private http : HttpClient) { }

  getDeviceList(){
    const url = `${this.mainUrl}/devices`;

    return this.http.get(url);
    
  }
}
