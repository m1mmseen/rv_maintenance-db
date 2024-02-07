import {Component, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {Device} from "../../../models/device";
import {ActivatedRoute} from "@angular/router";
import {DeviceFormService} from "../../../forms/device-form.service";
import {DeviceService} from "../../../services/device.service";
import {ClientService} from "../../../services/client.service";
import {EntriesService} from "../../../services/entries.service";
import {Client} from "../../../models/client";

@Component({
  selector: 'maintenance-add-device',
  templateUrl: './add-device.component.html',
  styleUrls: ['./add-device.component.scss']
})
export class AddDeviceComponent {

}
