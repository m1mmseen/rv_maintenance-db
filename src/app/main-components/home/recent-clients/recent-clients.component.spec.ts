import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentClientsComponent } from './recent-clients.component';

describe('RecentClientsComponent', () => {
  let component: RecentClientsComponent;
  let fixture: ComponentFixture<RecentClientsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecentClientsComponent]
    });
    fixture = TestBed.createComponent(RecentClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
