import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranferenciaComponent } from './tranferencia.component';

describe('TranferenciaComponent', () => {
  let component: TranferenciaComponent;
  let fixture: ComponentFixture<TranferenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TranferenciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TranferenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
