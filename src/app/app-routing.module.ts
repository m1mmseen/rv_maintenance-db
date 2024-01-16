import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./main-components/home/home.component";
import {ClientsComponent} from "./main-components/clients/clients.component";
import {EntriesComponent} from "./main-components/entries/entries.component";
import {AddDeviceComponent} from "./main-components/devices/add-device/add-device.component";
import {AddMaintenanceComponent} from "./main-components/entries/add-maintenance/add-maintenance.component";

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'clients', component: ClientsComponent
  },
  {
    path: 'entries', component: EntriesComponent
  },
  {
    path: 'add-device', component: AddDeviceComponent
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
