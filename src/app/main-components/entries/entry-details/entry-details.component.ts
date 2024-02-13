import {Component, OnInit} from '@angular/core';
import {Entry, ENTRY_AUDIT_OPTIONS, defaultEntry} from "../../../models/entry";
import {EntriesService} from "../../../services/entries.service";
import {ActivatedRoute} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ClientService} from "../../../services/client.service";
import {DeviceService} from "../../../services/device.service";
import {PrintService} from "../../../services/print.service";
import {Client} from "../../../models/client";
import {Device} from "../../../models/device";
import {BATTERY_STATUS} from "../../../models/battery";



@Component({
  selector: 'maintenance-entry-details',
  templateUrl: './entry-details.component.html',
  styleUrls: ['./entry-details.component.scss']
})
export class EntryDetailsComponent implements OnInit {
  entry: Entry = defaultEntry;
  entryId: string;
  entryForm: FormGroup;
  client: Client | undefined;
  device: Device | undefined;

  constructor(
    private entryService: EntriesService,
    private route: ActivatedRoute,
    private clientService: ClientService,
    private deviceService: DeviceService,

  ) {
  }

  ngOnInit() {
    this.route.params.subscribe((routeParams) => {
      this.entryId = routeParams['id'];
    });
    if (this.entryId) {
      this.entry = this.entryService.getMockEntryById(this.entryId)!;
    }
    this.client = this.clientService.getMockClientById(this.entry.client);
    this.device = this.deviceService.getDeviceById(this.entry.device);
  }

  printPDF() {
/*    this.printService.printPDF('printable-content')*/
    window.print();
  }

  protected readonly BATTERY_STATUS = BATTERY_STATUS;
}
