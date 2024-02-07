import { Injectable } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {Device} from "../models/device";

@Injectable({
  providedIn: 'root'
})
export class DeviceFormService {
  device: Device = {
    deviceName: '',
    deviceSerial: '',
    deviceFlightControllerSerial: '',
    deviceDescription: '',
    deviceCarePackInfo: '',
    deviceStatus: '',
    deviceInstallation: new Date(),
    deviceNextMaintenance: new Date(),
    deviceAccessoires: [],
    deviceBatteries: [],
    deviceFirmware: '',
    maintenanceLog: []
  };
  newForm: boolean = true;

  constructor(
    private fb: FormBuilder
  ) { }

  createDeviceForm(newForm: boolean, device?:Device) {
    if(!newForm) {
      this.newForm = false;
      if (device) {
        this.device = device;
      }
    }
    return this.fb.group({
      device: this.fb.group(
        {
          deviceName: [this.newForm ? '' : this.device.deviceName, [Validators.required]],
          deviceSerial: [this.newForm ? '' : this.device.deviceSerial, [Validators.required]],
          deviceFlightControllerSerial: [this.newForm ? '' : this.device.deviceFlightControllerSerial],
          deviceDescription: [this.newForm ? '' : this.device.deviceDescription],
          deviceCarePackInfo: [this.newForm? '' : this.device.deviceCarePackInfo],
          deviceStatus: [this.newForm? '' : this.device.deviceStatus],
          deviceInstallation: [this.newForm? '' : this.device.deviceInstallation],
          deviceNextMaintenance: [this.newForm? '' : this.device.deviceNextMaintenance],
          deviceFirmware: [this.newForm? '' : this.device.deviceFirmware],
        }
      ),
      accessoires: this.fb.group(
        {
          deviceAccessoires: [this.newForm? '' : this.device.deviceAccessoires],
        }
      ),
      batteries: this.fb.group(
        {
          deviceBatteries: [this.newForm? '' : this.device.deviceBatteries],
        }
      ),



    })
  }
}
