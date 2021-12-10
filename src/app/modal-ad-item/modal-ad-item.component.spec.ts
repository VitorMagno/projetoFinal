import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAdItemComponent } from './modal-ad-item.component';

describe('ModalAdItemComponent', () => {
  let component: ModalAdItemComponent;
  let fixture: ComponentFixture<ModalAdItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAdItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAdItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
