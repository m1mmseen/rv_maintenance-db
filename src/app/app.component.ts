import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {slideInAnimation} from "./animations/details-view.animation";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slideInAnimation]
})
export class AppComponent {
  title = 'client';

  getRouteAnimationData(outlet: RouterOutlet) {
    return outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animation'];

  }
}
