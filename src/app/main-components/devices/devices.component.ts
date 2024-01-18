import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Device} from "../../models/device";
import { Entry } from "../../models/entry"
import {Accessoire} from "../../models/accessoire";
import {Battery} from "../../models/battery";
import {DeviceService} from "../../services/device.service";
import {ClientService} from "../../services/client.service";
import {Client} from "../../models/client";
import { EntriesService } from 'src/app/services/entries.service';

@Component({
  selector: 'maintenance-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss']
})
export class DevicesComponent implements OnInit{
  deviceForm: FormGroup;
  clientId: string | null;
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
  }
  client: Client | undefined;
  maintenanceEntries: Entry[] = [];
  inEditingMode: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private deviceService: DeviceService,
    private clientService: ClientService,
    private entryService: EntriesService,
    private fb: FormBuilder
  ) {
  }

  ngOnInit() {
    this.route.fragment.subscribe(fragment => {
      this.clientId = fragment;
      this.client = this.clientService.getMockClientById(this.clientId);
    });
    this.route.params.subscribe(params => {
      this.device = this.deviceService.getDeviceById(params['id'])!;
    });
    this.deviceForm = this.createDeviceForm();
    this.getMaintenanceEntries(this.device.maintenanceLog);
  }

  createDeviceForm() {
    return this.fb.group({
      deviceName: [this.device.deviceName],
      deviceSerial: [this.device.deviceSerial],
      deviceFlightControllerSerial: [this.device.deviceFlightControllerSerial],
      deviceDescription: [this.device.deviceDescription],
      deviceCarePackInfo: [this.device.deviceCarePackInfo],
      deviceStatus: [this.device.deviceStatus],
      deviceInstallation: [this.device.deviceInstallation],
      deviceNextMaintenance: [this.device.deviceNextMaintenance],
      deviceAccessoires: [this.device.deviceAccessoires],
      deviceBatteries: [this.device.deviceBatteries],
      deviceFirmware: [this.device.deviceFirmware],
    })
  }

  getClientCompany(id: string | null) {
    return this.clientService.getClientCompanyById(id);
  }

  getMaintenanceEntries(ids: string[]) {
    ids.forEach(entry => this.maintenanceEntries.push(this.entryService.getMockEntryById(entry)!))
    console.log(this.maintenanceEntries);
  }
}
