import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Entry} from "../models/entry";
import {entries} from "../main-components/entries/entries";

@Injectable({
  providedIn: 'root'
})
export class EntriesService {
  entries: Entry[] = [];

  constructor(private http: HttpClient) { }

  getEntries() {

  }

  getEntryById(id:string) {

  }

  getMockEntries() {
    return this.entries = entries;
  }
}
