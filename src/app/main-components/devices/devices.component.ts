import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Device} from "../../models/device";
import { Entry } from "../../models/entry"
import {DeviceService} from "../../services/device.service";
import {ClientService} from "../../services/client.service";
import {Client} from "../../models/client";
import { EntriesService } from 'src/app/services/entries.service';
import {DeviceFormService} from "../../forms/device-form.service";

@Component({
  selector: 'maintenance-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss']
})
export class DevicesComponent implements OnInit{
  deviceForm: FormGroup;
  clientId: string | null;
  device: Device;
  client: Client | undefined;
  maintenanceEntries: Entry[] = [];
  inEditingMode: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private deviceFormService: DeviceFormService,
    private deviceService: DeviceService,
    private clientService: ClientService,
    private entryService: EntriesService,
  ) {
  }

  ngOnInit() {
    this.route.fragment.subscribe(fragment => {
      this.clientId = fragment;
      this.client = this.clientService.getMockClientById(this.clientId);
    });
    this.route.params.subscribe(params => {
      if (this.deviceService.getDeviceById(params['id'])) {
        this.device = this.deviceService.getDeviceById(params['id'])!;
      } else {
        this.inEditingMode = true;
      }
    });
    this.deviceForm = this.deviceFormService.createDeviceForm(this.inEditingMode, this.device);
    this.getMaintenanceEntries(this.device.maintenanceLog);
  }

  getMaintenanceEntries(ids: string[]) {
    ids.forEach(entry => this.maintenanceEntries.push(this.entryService.getMockEntryById(entry)!))

  }
}
