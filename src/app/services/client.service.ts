import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Client} from "../models/client";
import {clients} from "../mock-data/mock-clients"

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  clients = clients
  API_URL= ''

  constructor(private http: HttpClient) { }

  getClients() {
    this.http.get<Client[]>(this.API_URL).pipe();
  }

  getClientById(id: string) {
    this.http.get<Client>(this.API_URL, {
      params: new HttpParams().set('id', id)
    })
  }

  createNewClient(client: Client) {
    this.http.post(this.API_URL, client);
  }

  getMockClients() {
    return clients
  }

  getMockClientById(id: string | null) {
    return this.clients.find(client => client.id === id);
  }

  getClientNameById(id: string) {
    console.log(this.clients.find(client => client.id === id)?.name)
    return this.clients.find(client => client.id === id)?.name
  }

  getClientCompanyById(id: string | null) {
    return this.clients.find(client => client.id === id)?.company
  }
}
