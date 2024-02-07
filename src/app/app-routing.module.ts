import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./main-components/home/home.component";
import {ClientsComponent} from "./main-components/clients/clients.component";
import {EntriesComponent} from "./main-components/entries/entries.component";
import {AddMaintenanceComponent} from "./main-components/entries/add-maintenance/add-maintenance.component";
import {ClientDetailsComponent} from "./main-components/clients/client-details/client-details.component";
import {EntryDetailsComponent} from "./main-components/entries/entry-details/entry-details.component";
import {DevicesComponent} from "./main-components/devices/devices.component";

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'clients', component: ClientsComponent, data: {animation: 'List'}
  },
  {
    path: 'client-details/:id', component: ClientDetailsComponent, data: {animation: 'Details'}
  },
  {
    path: 'entries', component: EntriesComponent, data: {animation: 'List'}
  },
  {
    path: 'entry-details/:id', component: EntryDetailsComponent, data: {animation: 'Details'}
  },
  {
    path: 'device/:id', component: DevicesComponent
  },
  {
    path: 'add-device', component: DevicesComponent
  },
  {
    path: 'add-maintenance', component: AddMaintenanceComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
