import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncioSesionComponent } from './incio-sesion.component';

describe('IncioSesionComponent', () => {
  let component: IncioSesionComponent;
  let fixture: ComponentFixture<IncioSesionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncioSesionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncioSesionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
