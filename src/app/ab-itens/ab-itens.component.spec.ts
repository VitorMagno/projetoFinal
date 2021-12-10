import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbItensComponent } from './ab-itens.component';

describe('AbItensComponent', () => {
  let component: AbItensComponent;
  let fixture: ComponentFixture<AbItensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbItensComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbItensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
