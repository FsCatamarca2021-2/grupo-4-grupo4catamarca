import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagaComponent } from './paga.component';

describe('PagaComponent', () => {
  let component: PagaComponent;
  let fixture: ComponentFixture<PagaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
