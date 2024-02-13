import { Injectable } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Device} from "../models/device";
import {Cycle} from "../models/cycle";
import {Condition} from "../models/condition";

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
    deviceAccessories: [],
    deviceBatteries: [],
    deviceFirmware: '',
    maintenanceLog: [],
    deviceClient: ''
  };
  newForm: boolean = true;
  createdForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {
  }

  createDeviceFormWithData(device: Device) {
    this.createdForm = this.fb.group(device);
    return this.createdForm;
  }

  createDeviceForm() {
    this.createdForm = this.fb.group({
      device: this.fb.group(
        {
          deviceName: [''],
          deviceSerial: [''],
          deviceFlightControllerSerial: [''],
          deviceDescription: [''],
          deviceCarePackInfo: [''],
          deviceStatus: [''],
          deviceInstallation: [''],
          deviceNextMaintenance: [''],
          deviceFirmware: [''],
        }
      ),
      deviceAccessories: this.fb.array([]),
      deviceBatteries: this.fb.array([]),

    })
    return this.createdForm
  }

  get accessories() {
    return this.createdForm.get('deviceAccessories') as FormArray
  }


  public createAccessory() {
    return this.fb.group({
      accessoryName: [''],
      accessorySerial: [''],
      accessoryDescription: ['']
    })
  }

  public createBattery() {
    return this.fb.group({
      batteryType: [''],
      batterySerial: [''],
      batteryInstallation: Date,
      batteryCycleNumbers: [''],
      batteryProblems: [''],
      batteryCondition: [''],
      batteryStatus: ['']
    })
  }


}
