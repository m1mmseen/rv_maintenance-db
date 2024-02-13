import {Component, OnInit} from '@angular/core';
import {ENTRY_AUDIT_OPTIONS} from "../../../models/entry";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'maintenance-add-maintenance',
  templateUrl: './add-maintenance.component.html',
  styleUrls: ['./add-maintenance.component.scss']
})
export class AddMaintenanceComponent implements OnInit {
  entryForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {
  }

  ngOnInit() {
    this.entryForm = this.formBuilder.group({
      id: '',
      client: '',
      device: '',
      date: Date,
      type: '',
      technician: '',
      visualInspectionCase: '',
      propellerMotorsArms: '',
      gimbalCamera: '',
      controller: '',
      spareParts: '',
      calibration: [],
      cleanings: [],
      firmware: {
        aircraftFirmware: '',
        remoteControllerFirmware: '',
        otherFirmware: '',
      },
      swConfigurations: '',
      testFlights: [],
      flightAbnormalities: '',
      needsToBeRepaired: false,
      reasonForRepair: '',
      repairOrderNo: '',
      operationalStatus: ''
    })
  }

  protected readonly AUDIT_OPTIONS = ENTRY_AUDIT_OPTIONS;
}
