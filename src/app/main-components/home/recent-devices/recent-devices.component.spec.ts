import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentDevicesComponent } from './recent-devices.component';

describe('RecentDevicesComponent', () => {
  let component: RecentDevicesComponent;
  let fixture: ComponentFixture<RecentDevicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecentDevicesComponent]
    });
    fixture = TestBed.createComponent(RecentDevicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
