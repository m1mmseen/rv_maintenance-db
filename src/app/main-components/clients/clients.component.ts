import {Component, OnInit} from '@angular/core';
import {Client} from "../../models/client";
import {ClientService} from "../../services/client.service";

@Component({
  selector: 'maintenance-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit{
  clients: Client[];
  filter = '';
  sortType = '';


  constructor(private clientService: ClientService) {
  }

  ngOnInit() {
    this.clients = this.clientService.getMockClients();
  }

  setSortType(type: string) {
    this.sortType = type;
  }

  resetInput(filterInput: HTMLInputElement) {
    filterInput.value = '';
    this.filter = '';
  }
}
