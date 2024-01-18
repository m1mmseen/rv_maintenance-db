import {Component, OnInit} from '@angular/core';
import {Entry} from "../../models/entry";
import {EntriesService} from "../../services/entries.service";
import {ClientService} from "../../services/client.service";

@Component({
  selector: 'maintenance-entries',
  templateUrl: './entries.component.html',
  styleUrls: ['./entries.component.scss']
})
export class EntriesComponent implements OnInit{
  entries: Entry[];
  entryFilter ='';
  sortType = '';

  constructor(
    private entriesService: EntriesService,
    private clientService: ClientService
  ) {
  }

  ngOnInit() {
    this.entries = this.entriesService.getMockEntries();
  }

  getDate(time: number) {
    return new Date();
  }
  resetInput(filterInput: HTMLInputElement) {
     filterInput.value = '';
     this.entryFilter = '';
  }

  setSortType(type: string) {
    this.sortType = type;
  }

  getClientName(id: string) {

    return this.clientService.getClientNameById(id)
  }

  getClientCompany(id: string) {
    return this.clientService.getClientCompanyById(id)
  }

}
