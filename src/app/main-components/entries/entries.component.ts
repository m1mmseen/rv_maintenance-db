import {Component, OnInit} from '@angular/core';
import {Entry} from "../../models/entry";
import {EntriesService} from "../../services/entries.service";

@Component({
  selector: 'maintenance-entries',
  templateUrl: './entries.component.html',
  styleUrls: ['./entries.component.scss']
})
export class EntriesComponent implements OnInit{
  entries: Entry[];
  entryFilter ='';

  constructor(private entriesService: EntriesService) {
  }

  ngOnInit() {
    this.entries = this.entriesService.getMockEntries();
  }

  getDate(time: number) {
    return new Date();
  }
}
