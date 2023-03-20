import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavinfoComponent } from './navinfo.component';

describe('NavinfoComponent', () => {
  let component: NavinfoComponent;
  let fixture: ComponentFixture<NavinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavinfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
