import {Component, OnInit} from '@angular/core';
import {Client} from "../../../models/client";
import {Device} from "../../../models/device";
import {ClientService} from "../../../services/client.service";
import {ActivatedRoute} from "@angular/router";
import {FormArray, FormBuilder, FormGroup} from "@angular/forms";
import {DeviceService} from "../../../services/device.service";

@Component({
  selector: 'maintenance-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.scss']
})
export class ClientDetailsComponent implements OnInit{
  client: Client = {
    id: '',
    name: '',
    company: '',
    email: '',
    devices: [],
    isActive: true
  }
  clientId: string;
  clientForm: FormGroup;
  isInEditingMode = false;
  deviceArray: Device[] = [];

  constructor(
    private clientService: ClientService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private deviceService: DeviceService
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe(routeParams => {
      this.clientId = routeParams['id'];
    });
    this.client = this.clientService.getMockClientById(this.clientId)!;
    this.clientForm = this.fb.group({
      id: [this.client.id],
      name: [this.client.name],
      company: [this.client.company],
      email: [this.client.email],
      devices: this.fb.array([]),
      isActive: this.client.isActive
    });
    this.client.devices.forEach(device => this.deviceArray.push(<Device>this.deviceService.getDeviceById(device)));

  }

  onEdit(fieldset: HTMLFieldSetElement, button: HTMLButtonElement) {
    const buttonValues = ['Edit', 'Save']
    this.isInEditingMode = !this.isInEditingMode;
    fieldset.disabled = !fieldset.disabled;
    button.innerHTML = this.isInEditingMode ? buttonValues[1] : buttonValues[0];
    button.classList.toggle('btn-primary');
    button.classList.toggle('btn-success');
  }

}
