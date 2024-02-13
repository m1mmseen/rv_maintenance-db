import {Component, OnInit} from '@angular/core';
import {Device} from "../../../models/device";
import {DeviceService} from "../../../services/device.service";

@Component({
  selector: 'maintenance-next-maintenance-devices',
  templateUrl: './next-maintenance-devices.component.html',
  styleUrls: ['./next-maintenance-devices.component.scss']
})
export class NextMaintenanceDevicesComponent implements  OnInit{

  devices: Device[];
  nextMaintenances: Device[] = [];
  overdueMaintenances: Device[] = [];
  currentDate: Date;

  constructor(
    private deviceService: DeviceService
  ) {
  }

  ngOnInit() {
    this.devices = this.deviceService.devices;
    this.currentDate = new Date();

    let informationDeadline = new Date();
    informationDeadline = new Date(informationDeadline.setMonth(informationDeadline.getMonth() + 2))

    this.devices.forEach(device => {
      if (device.deviceNextMaintenance >= this.currentDate && device.deviceNextMaintenance <= informationDeadline) {
        this.nextMaintenances.push(device)
      } else if (device.deviceNextMaintenance <= this.currentDate) {
        this.overdueMaintenances.push(device);
      }
    })
  }

}
