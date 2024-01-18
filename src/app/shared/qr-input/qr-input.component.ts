import {Component, OnInit, ViewChild, Input} from '@angular/core';
import {FormControl} from "@angular/forms";
import {NgxScannerQrcodeComponent} from "ngx-scanner-qrcode";

@Component({
  selector: 'maintenance-qr-input',
  templateUrl: './qr-input.component.html',
  styleUrls: ['./qr-input.component.scss']
})
export class QrInputComponent implements  OnInit{
  @ViewChild('scanner') scanner: NgxScannerQrcodeComponent;
  @Input() input= new FormControl('scan serial no.')

  ngOnInit() {
    this.input.valueChanges.subscribe(value => {
      console.log('Input value changed to: ', value);
    });
  }

  terminate(){
    if (this.scanner.data.value.length === 1) {
      this.scanner.stop();
    }
  }
}
