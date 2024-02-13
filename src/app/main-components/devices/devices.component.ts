import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {FormArray, FormBuilder, FormGroup} from "@angular/forms";
import {Device} from "../../models/device";
import { Entry } from "../../models/entry"
import {DeviceService} from "../../services/device.service";
import {ClientService} from "../../services/client.service";
import {Client} from "../../models/client";
import { EntriesService } from 'src/app/services/entries.service';
import {clients} from "../../mock-data/mock-clients";


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
  newForm: boolean = false;
  activeTab: string = 'deviceData'
  availableClients: Client[];

  constructor(
    private route: ActivatedRoute,
    private deviceService: DeviceService,
    private clientService: ClientService,
    private entryService: EntriesService,
    private formBuilder: FormBuilder
  ) {
  }

  ngOnInit() {
    this.availableClients = this.clientService.getMockClients();
    this.route.params.subscribe(params => {
      if (this.route.snapshot.paramMap.get('id') !== null) {

        this.device = this.deviceService.getDeviceById(params['id'])!;
        this.client = this.clientService.getMockClientById(this.device.deviceClient);
        this.maintenanceEntries = this.getMaintenanceEntries(this.device.maintenanceLog);

      } else {
        this.newForm = true;
        this.inEditingMode = true;
      }
      this.createDeviceForm();
      if (!this.newForm) {
        this.device.deviceAccessories.forEach(accessory => {
          this.accessories.push(this.formBuilder.group(accessory));
        })
        this.device.deviceBatteries.forEach(battery => {
          this.batteries.push(this.formBuilder.group(battery));
        })
      }
    });
  }

  createDeviceForm() {
    this.deviceForm = this.formBuilder.group({
      device: this.formBuilder.group(
        {
          deviceName: [this.newForm ? '' : this.device.deviceName],
          deviceSerial: [this.newForm ? '' : this.device.deviceSerial],
          deviceFlightControllerSerial: [this.newForm ? '' : this.device.deviceFlightControllerSerial],
          deviceDescription: [this.newForm ? '' : this.device.deviceDescription],
          deviceCarePackInfo: [this.newForm ? '' : this.device.deviceCarePackInfo],
          deviceStatus: [this.newForm ? '' : this.device.deviceDescription],
          deviceInstallation: [this.newForm ? '' : this.device],
          deviceNextMaintenance: [this.newForm ? '' : this.device],
          deviceFirmware: [this.newForm ? '' : this.device],
        }
      ),
      deviceAccessories: this.formBuilder.array([]),
      deviceBatteries: this.formBuilder.array([]),

    })
  }

  getMaintenanceEntries(ids: string[]) {
    let maintenanceArray: Entry[] = [];
    ids.forEach(entry => maintenanceArray.push(this.entryService.getMockEntryById(entry)!))
    return maintenanceArray;
  }

  public createAccessory() {
    return this.formBuilder.group({
      accessoryName: [''],
      accessorySerial: [''],
      accessoryDescription: ['']
    })
  }

  public createBattery() {
    return this.formBuilder.group({
      batteryType: [''],
      batterySerial: [''],
      batteryInstallation: Date,
      batteryCycleNumbers: [''],
      batteryProblems: [''],
      batteryCondition: [''],
      batteryStatus: ['']
    })
  }

  get accessories() {
    return this.deviceForm.get('deviceAccessories') as FormArray;
  }

  public addAccessory() {
    this.accessories.push(this.createAccessory());
  }

  public deleteAccessory(index: number) {
    this.accessories.removeAt(index);
  }


  get batteries() {
    return this.deviceForm.get('deviceBatteries') as FormArray;
  }

  public addBattery() {
    this.batteries.push(this.createBattery());
  }

  public deleteBattery(index: number) {
    this.batteries.removeAt(index);
  }

  setClient(value: string) {
    this.client = this.clientService.getMockClientById(value);
  }

  resetClient() {
    this.client = undefined;
  }

  test(value: string) {
    alert("Selected: "+ value);
  }


/*  setActiveTab() {
    const activatedTab = document.querySelector('.show');
    activatedTab?.classList.remove('show');
    activatedTab?.classList.remove('active');
    const activeNavLink =  document.querySelector('.nav-link.active');
    activeNavLink?.classList.remove('active');
    activeNavLink?.setAttribute('aria-selected', 'false');

    const newActivatedTab = document.getElementById(this.activeTab);
    newActivatedTab?.classList.add('show');
    newActivatedTab?.classList.add('active');
    const newActiveTab = document.getElementById(`${this.activeTab}-tab`);
    newActiveTab?.setAttribute('aria-selected', 'true');
    newActiveTab?.classList.add('active');
  }*/
}
