import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Entry} from "../models/entry";
import {mockEntries} from "../mock-data/mock-entries";

@Injectable({
  providedIn: 'root'
})
export class EntriesService {
  entries: Entry[] = mockEntries;

  constructor(private http: HttpClient) { }

  getEntries() {

  }

  getEntryById(id:string) {

  }

  getMockEntries() {
    return this.entries
  }

  getMockEntryById(id: string) {
    return this.entries.find(entry => entry.id.toString() === id)
  }
}
