import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAdContratosComponent } from './modal-ad-contratos.component';

describe('ModalAdContratosComponent', () => {
  let component: ModalAdContratosComponent;
  let fixture: ComponentFixture<ModalAdContratosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAdContratosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAdContratosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
