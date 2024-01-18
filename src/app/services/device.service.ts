import {Injectable, OnInit} from '@angular/core';
import {Device} from "../models/device";
import {devices} from "../mock-data/mock-devices";

@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  devices: Device[] = devices;

  constructor() { }


  getDeviceById(id: string) {
    return this.devices.find(device => device.deviceSerial === id)
  }
}
