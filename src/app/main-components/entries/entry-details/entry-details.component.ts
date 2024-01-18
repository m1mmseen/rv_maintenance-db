import {Component, OnInit} from '@angular/core';
import {Entry} from "../../../models/entry";
import {EntriesService} from "../../../services/entries.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'maintenance-entry-details',
  templateUrl: './entry-details.component.html',
  styleUrls: ['./entry-details.component.scss']
})
export class EntryDetailsComponent implements OnInit{
  entry: Entry = {
    id: -1,
    client: '',
    device: '',
    type: '',
    date: new Date(),
    technician: ''
  };
  entryId: string;

  constructor(
    private entryService: EntriesService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe((routeParams) => {
      this.entryId = routeParams['id'];
    });
    if (this.entryId) {
      this.entry = this.entryService.getMockEntryById(this.entryId)!;
    }
  }

}
