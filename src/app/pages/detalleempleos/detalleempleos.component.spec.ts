import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleempleosComponent } from './detalleempleos.component';

describe('DetalleempleosComponent', () => {
  let component: DetalleempleosComponent;
  let fixture: ComponentFixture<DetalleempleosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleempleosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleempleosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
