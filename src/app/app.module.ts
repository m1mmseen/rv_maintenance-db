import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './shared/sidenav/sidenav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import {NgxScannerQrcodeModule} from "ngx-scanner-qrcode";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import { HeaderComponent } from './shared/header/header.component';
import { QrInputComponent } from './shared/qr-input/qr-input.component';
import { HomeComponent } from './main-components/home/home.component';
import { ClientsComponent } from './main-components/clients/clients.component';
import { EntriesComponent } from './main-components/entries/entries.component';
import { DevicesComponent } from './main-components/devices/devices.component';
import { AddDeviceComponent } from './main-components/devices/add-device/add-device.component';
import { AddMaintenanceComponent } from './main-components/entries/add-maintenance/add-maintenance.component';
import { AddClientModalComponent } from './modals/add-client-modal/add-client-modal.component';

import {MatIconModule} from "@angular/material/icon";
import { HttpClientModule} from "@angular/common/http";
import { FilterPipe } from './pipes/filter.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { AllKeysFilterPipe } from './pipes/all-keys-filter.pipe';
import { ClientDetailsComponent } from './main-components/clients/client-details/client-details.component';
import { EntryDetailsComponent } from './main-components/entries/entry-details/entry-details.component';
import { RecentEntriesComponent } from './main-components/home/recent-entries/recent-entries.component';
import { RecentClientsComponent } from './main-components/home/recent-clients/recent-clients.component';
import { RecentDevicesComponent } from './main-components/home/recent-devices/recent-devices.component';
import { NextMaintenanceDevicesComponent } from './main-components/home/next-maintenance-devices/next-maintenance-devices.component';


@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    HeaderComponent,
    QrInputComponent,
    HomeComponent,
    ClientsComponent,
    EntriesComponent,
    DevicesComponent,
    AddDeviceComponent,
    AddMaintenanceComponent,
    AddClientModalComponent,
    FilterPipe,
    SortPipe,
    AllKeysFilterPipe,
    ClientDetailsComponent,
    EntryDetailsComponent,
    RecentEntriesComponent,
    RecentClientsComponent,
    RecentDevicesComponent,
    NextMaintenanceDevicesComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    NgxScannerQrcodeModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
